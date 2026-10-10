import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { GraduationCap, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import { initialCourses, initialStudents } from "./data/seedData";
import { loadData, saveData, storageIssue } from "./utils/storage";
export default function App() {
  const [issues] = useState(() => ({
    students: storageIssue("college_students"),
    courses: storageIssue("college_courses"),
  }));
  const [students, setStudents] = useState(() =>
    loadData("college_students", initialStudents),
  );
  const [courses, setCourses] = useState(() =>
    loadData("college_courses", initialCourses),
  );
  const [storageError, setStorageError] = useState(
    issues.students || issues.courses,
  );
  const [notice, setNotice] = useState(null);
  const location = useLocation();
  // Do not overwrite malformed stored data on initialization; keep it available for recovery.
  // Storage is an external system; a failed write must surface in React UI.
  useEffect(() => {
    if (!issues.students && !saveData("college_students", students))
      // A failed external storage write must be reflected in the UI.
      // oxlint-disable-next-line react/set-state-in-effect
      setStorageError(true);
  }, [students, issues]);
  useEffect(() => {
    if (!issues.courses && !saveData("college_courses", courses))
      // A failed external storage write must be reflected in the UI.
      // oxlint-disable-next-line react/set-state-in-effect
      setStorageError(true);
  }, [courses, issues]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 6000);
    return () => clearTimeout(timer);
  }, [notice]);
  function notify(message, error = false) {
    setNotice({ message, error });
  }
  function saveStudent(student) {
    setStudents((previous) =>
      previous.some((s) => s.id === student.id)
        ? previous.map((s) => (s.id === student.id ? student : s))
        : [...previous, student],
    );
  }
  function deleteStudent(id) {
    setStudents((previous) => previous.filter((s) => s.id !== id));
  }
  function addCourse(course) {
    setCourses((previous) =>
      previous.some((c) => c.id === course.id)
        ? previous.map((c) => (c.id === course.id ? course : c))
        : [...previous, course],
    );
  }
  function deleteCourse(id) {
    if (students.some((s) => s.courseId === id)) return false;
    setCourses((previous) => previous.filter((c) => c.id !== id));
    return true;
  }
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <div className="main-shell">
        <header className="topbar">
          <div>
            Workspace <span>/</span>{" "}
            <strong>{location.pathname.split("/")[1] || "Dashboard"}</strong>
          </div>
          <span className="university">
            <GraduationCap size={17} /> GSFC University{" "}
            <span className="term">SEM 05</span>
          </span>
        </header>
        <main id="main" className="workspace">
          {storageError && (
            <div className="alert error" role="alert">
              Browser storage is unavailable or contains malformed data. Changes
              may only last for this session; existing unreadable data has been
              preserved.
            </div>
          )}
          {notice && (
            <div
              className={"toast alert " + (notice.error ? "error" : "")}
              role={notice.error ? "alert" : "status"}
            >
              {notice.message}
              <button
                className="icon-button"
                aria-label="Dismiss notification"
                onClick={() => setNotice(null)}
              >
                <X size={16} />
              </button>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={<Dashboard students={students} courses={courses} />}
            />
            <Route
              path="/students"
              element={
                <Students
                  students={students}
                  courses={courses}
                  onSave={saveStudent}
                  onDelete={deleteStudent}
                  notify={notify}
                />
              }
            />
            <Route
              path="/students/:id"
              element={<StudentDetails students={students} courses={courses} />}
            />
            <Route
              path="/courses"
              element={
                <Courses
                  courses={courses}
                  students={students}
                  onAdd={addCourse}
                  onDelete={deleteCourse}
                  notify={notify}
                />
              }
            />
            <Route
              path="/courses/:id"
              element={<CourseDetails courses={courses} students={students} />}
            />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          <footer className="workspace-footer">
            CampusOS <span>College Course & Student Management System</span>
            <span>AWT · FAST LEARNER</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
