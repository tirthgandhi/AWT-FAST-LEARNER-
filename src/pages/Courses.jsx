import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import CourseCard from "../components/CourseCard";
import CourseForm from "../components/CourseForm";
import ConfirmDialog from "../components/ConfirmDialog";
export default function Courses({
  courses,
  students,
  onAdd,
  onDelete,
  notify,
}) {
  const [form, setForm] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          (!status || c.status === status) &&
          (c.name + " " + c.code)
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      ),
    [courses, query, status],
  );
  return (
    <>
      <header className="page-heading">
        <div>
          <div className="eyebrow">BUILD THE NEXT CHAPTER</div>
          <h1>
            Courses<span className="accent">.</span>
          </h1>
          <p>A thoughtfully organized curriculum. Endless possibilities.</p>
        </div>
        <button className="btn-primary" onClick={() => setForm({})}>
          <Plus size={17} />
          Add course
        </button>
      </header>
      <div className="toolbar standalone glass-panel">
        <label className="search">
          <Search size={18} />
          <input
            aria-label="Search courses"
            placeholder="Search by course name or code…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <select
          className="glass-input filter"
          aria-label="Filter courses by status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All statuses</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="results-label">
        {filtered.length} COURSES IN YOUR CURRICULUM
      </div>
      <div className="course-grid">
        {filtered.map((c) => (
          <CourseCard
            key={c.id}
            course={c}
            count={students.filter((s) => s.courseId === c.id).length}
            onEdit={setForm}
            onDelete={setDeleting}
          />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty glass-panel">
          <h3>No courses found</h3>
          <p>Add a course or adjust your filters.</p>
        </div>
      )}
      {form && (
        <CourseForm
          course={form.id ? form : null}
          courses={courses}
          onCancel={() => setForm(null)}
          onSave={(c) => {
            onAdd(c);
            setForm(null);
            notify("Course saved successfully.");
          }}
        />
      )}
      <ConfirmDialog
        open={!!deleting}
        title="Delete course?"
        message={
          "Remove " +
          deleting?.name +
          "? Courses with enrolled students cannot be deleted."
        }
        onCancel={() => setDeleting(null)}
        onConfirm={() => {
          const deleted = onDelete(deleting.id);
          setDeleting(null);
          notify(
            deleted
              ? "Course deleted successfully."
              : "Cannot delete this course: reassign or delete its enrolled students first.",
            !deleted,
          );
        }}
      />
    </>
  );
}
