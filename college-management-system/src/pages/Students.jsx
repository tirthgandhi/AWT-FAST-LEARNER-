import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Plus, Search, Users } from "lucide-react";
import GlassPanel from "../components/GlassPanel";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import ConfirmDialog from "../components/ConfirmDialog";
export default function Students({
  students,
  courses,
  onSave,
  onDelete,
  notify,
}) {
  const [params, setParams] = useSearchParams();
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(params.get("add") === "1");
  const [deleting, setDeleting] = useState(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const filtered = useMemo(
    () =>
      students.filter(
        (s) =>
          (!filter || s.courseId === filter) &&
          [s.name, s.email, s.enrollment].some((x) =>
            x.toLowerCase().includes(query.trim().toLowerCase()),
          ),
      ),
    [students, query, filter],
  );
  function close() {
    setAdding(false);
    setEditing(null);
    setParams({}, { replace: true });
  }
  return (
    <>
      <header className="page-heading">
        <div>
          <div className="eyebrow">PEOPLE MAKE THE CAMPUS</div>
          <h1>
            Students<span className="accent">.</span>
          </h1>
          <p>Every student. Every detail. One organized workspace.</p>
        </div>
        <button className="btn-primary" onClick={() => setAdding(true)}>
          <Plus size={17} />
          Add student
        </button>
      </header>
      <GlassPanel>
        <div className="panel-heading">
          <div className="title-with-icon">
            <Users size={20} />
            <h2>
              Student directory <span className="count">{students.length}</span>
            </h2>
          </div>
        </div>
        <div className="toolbar">
          <label className="search">
            <Search size={18} />
            <input
              aria-label="Search students"
              placeholder="Search by name, enrollment, or email…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <select
            className="glass-input filter"
            aria-label="Filter students by course"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All courses</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <StudentTable
          students={filtered}
          courses={courses}
          onEdit={setEditing}
          onDelete={setDeleting}
        />
        <footer className="table-footer">
          Showing {filtered.length} of {students.length} students
          <span>Manage with confidence.</span>
        </footer>
      </GlassPanel>
      {(adding || editing) && (
        <StudentForm
          student={editing}
          students={students}
          courses={courses}
          onCancel={close}
          onSave={(s) => {
            onSave(s);
            notify(
              editing
                ? "Student updated successfully."
                : "Student added successfully.",
            );
            close();
          }}
        />
      )}
      <ConfirmDialog
        open={!!deleting}
        title="Delete student?"
        message={
          "Remove " +
          deleting?.name +
          " from the directory? This cannot be undone."
        }
        onCancel={() => setDeleting(null)}
        onConfirm={() => {
          onDelete(deleting.id);
          setDeleting(null);
          notify("Student deleted successfully.");
        }}
      />
    </>
  );
}
