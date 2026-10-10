import { memo } from "react";
import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";
import AttendanceBadge from "./AttendanceBadge";
// Memo keeps unchanged rows from re-rendering when stable parent props are reused.
export default memo(function StudentCard({
  student,
  course,
  onEdit,
  onDelete,
}) {
  return (
    <tr>
      <td className="mono">#{student.enrollment}</td>
      <td>
        <Link className="person" to={"/students/" + student.id}>
          <span className="avatar">
            {student.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </span>
          <strong>{student.name}</strong>
        </Link>
      </td>
      <td className="muted">{student.email}</td>
      <td>{course?.name || "Unassigned"}</td>
      <td>Sem {student.semester}</td>
      <td>
        <div className="attendance-value">
          {student.attendance}%
          <span className="mini-track">
            <span style={{ width: student.attendance + "%" }} />
          </span>
        </div>
      </td>
      <td>
        <AttendanceBadge attendance={student.attendance} />
      </td>
      <td>
        <div className="row-actions">
          <Link
            className="icon-button"
            aria-label={"View " + student.name}
            to={"/students/" + student.id}
          >
            <Eye size={16} />
          </Link>
          {onEdit && (
            <button
              className="icon-button"
              aria-label={"Edit " + student.name}
              onClick={() => onEdit(student)}
            >
              <Pencil size={16} />
            </button>
          )}
          {onDelete && (
            <button
              className="icon-button danger"
              aria-label={"Delete " + student.name}
              onClick={() => onDelete(student)}
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
});
