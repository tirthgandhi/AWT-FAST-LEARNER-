import { Link } from "react-router-dom";
import { BookOpen, ArrowUpRight, Trash2, Pencil } from "lucide-react";
export default function CourseCard({ course, count, onDelete, onEdit }) {
  return (
    <article className="glass-panel course-card">
      <div className="course-top">
        <span className="course-icon">
          <BookOpen size={23} />
        </span>
        <span
          className={
            "badge " + (course.status === "Active" ? "eligible" : "inactive")
          }
        >
          <span className="dot" />
          {course.status}
        </span>
      </div>
      <div className="eyebrow">
        {course.code} <span> / SEMESTER {course.semester}</span>
      </div>
      <h2>
        <Link to={"/courses/" + course.id}>{course.name}</Link>
      </h2>
      <p>{course.description}</p>
      <div className="course-count">
        {count} enrolled {count === 1 ? "student" : "students"}
      </div>
      <footer>
        <Link className="text-link" to={"/courses/" + course.id}>
          View details <ArrowUpRight size={16} />
        </Link>
        <div className="row-actions">
          <button
            className="icon-button"
            aria-label={"Edit " + course.code}
            onClick={() => onEdit(course)}
          >
            <Pencil size={16} />
          </button>
          <button
            className="icon-button danger"
            aria-label={"Delete " + course.code}
            onClick={() => onDelete(course)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </footer>
    </article>
  );
}
