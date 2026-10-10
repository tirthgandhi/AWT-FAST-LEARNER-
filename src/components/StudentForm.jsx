import { useState } from "react";
import Modal from "./Modal";
export default function StudentForm({
  student,
  students,
  courses,
  onSave,
  onCancel,
}) {
  const [form, setForm] = useState(
    student || {
      name: "",
      enrollment: "",
      email: "",
      courseId: "",
      semester: 5,
      gender: "",
      attendance: "",
    },
  );
  const [error, setError] = useState("");
  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    const data = {
      ...form,
      name: form.name.trim(),
      enrollment: form.enrollment.trim(),
      email: form.email.trim(),
      semester: Number(form.semester),
      attendance: Number(form.attendance),
    };
    if (
      !data.name ||
      !data.enrollment ||
      !data.gender ||
      !data.email ||
      form.attendance === ""
    )
      return setError("Please complete every required field.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      return setError("Enter a valid email address.");
    if (
      students.some(
        (s) =>
          s.id !== student?.id &&
          s.enrollment.toLowerCase() === data.enrollment.toLowerCase(),
      )
    )
      return setError("This enrollment number already exists.");
    if (!courses.some((c) => c.id === data.courseId))
      return setError("Choose an existing course.");
    if (
      !Number.isInteger(data.semester) ||
      data.semester < 1 ||
      data.semester > 8
    )
      return setError("Semester must be between 1 and 8.");
    if (
      !Number.isFinite(data.attendance) ||
      data.attendance < 0 ||
      data.attendance > 100
    )
      return setError("Attendance must be between 0 and 100.");
    onSave({ ...data, id: student?.id || crypto.randomUUID() });
  }
  return (
    <Modal title={student ? "Edit student" : "Add student"} onClose={onCancel}>
      <p className="muted">
        Keep your student records accurate and up to date.
      </p>
      <form onSubmit={submit} noValidate>
        {error && (
          <p className="alert error" role="alert">
            {error}
          </p>
        )}
        <div className="form-grid">
          {[
            ["name", "Student name", "text"],
            ["enrollment", "Enrollment number", "text"],
            ["email", "Email address", "email"],
          ].map(([name, label, type]) => (
            <label key={name}>
              {label}
              <input
                className="glass-input"
                name={name}
                type={type}
                value={form[name]}
                onChange={change}
                required
              />
            </label>
          ))}
          <label>
            Course
            <select
              className="glass-input"
              aria-label="Course"
              name="courseId"
              value={form.courseId}
              onChange={change}
              required
            >
              <option value="">Select course</option>
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Semester
            <input
              className="glass-input"
              type="number"
              min="1"
              max="8"
              name="semester"
              value={form.semester}
              onChange={change}
            />
          </label>
          <label>
            Gender
            <select
              className="glass-input"
              aria-label="Gender"
              name="gender"
              value={form.gender}
              onChange={change}
            >
              <option value="">Select gender</option>
              {["Male", "Female", "Other", "Prefer not to say"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <label>
            Attendance (%)
            <input
              className="glass-input"
              type="number"
              min="0"
              max="100"
              step="0.1"
              name="attendance"
              value={form.attendance}
              onChange={change}
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-primary" type="submit">
            Save student
          </button>
        </div>
      </form>
    </Modal>
  );
}
