import { useState } from "react";
import Modal from "./Modal";
export default function CourseForm({ course, courses, onSave, onCancel }) {
  const [form, setForm] = useState(
    course || {
      code: "",
      name: "",
      semester: 5,
      description: "",
      status: "Active",
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
      code: form.code.trim().toUpperCase(),
      name: form.name.trim(),
      description: form.description.trim(),
      semester: Number(form.semester),
    };
    if (!data.code || !data.name || !data.description)
      return setError("Please complete every required field.");
    if (
      courses.some(
        (c) =>
          c.id !== course?.id &&
          c.code.toLowerCase() === data.code.toLowerCase(),
      )
    )
      return setError("This course code already exists.");
    if (
      !Number.isInteger(data.semester) ||
      data.semester < 1 ||
      data.semester > 8
    )
      return setError("Semester must be between 1 and 8.");
    onSave({ ...data, id: course?.id || crypto.randomUUID() });
  }
  return (
    <Modal title={course ? "Edit course" : "Add course"} onClose={onCancel}>
      <p className="muted">Shape the curriculum, one course at a time.</p>
      <form onSubmit={submit} noValidate>
        {error && (
          <p className="alert error" role="alert">
            {error}
          </p>
        )}
        <div className="form-grid">
          {[
            ["code", "Course code"],
            ["name", "Course name"],
          ].map(([name, label]) => (
            <label key={name}>
              {label}
              <input
                className="glass-input"
                name={name}
                value={form[name]}
                onChange={change}
              />
            </label>
          ))}
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
            Status
            <select
              className="glass-input"
              aria-label="Status"
              name="status"
              value={form.status}
              onChange={change}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </label>
          <label className="full-width">
            Description
            <textarea
              className="glass-input"
              rows="3"
              name="description"
              value={form.description}
              onChange={change}
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-primary">Save course</button>
        </div>
      </form>
    </Modal>
  );
}
