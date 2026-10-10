import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, BookOpen } from "lucide-react";
import GlassPanel from "../components/GlassPanel";
import AttendanceBadge from "../components/AttendanceBadge";
export default function StudentDetails({ students, courses }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);
  if (!student)
    return (
      <div className="empty glass-panel">
        <h1>Record Not Found</h1>
        <Link className="text-link" to="/students">
          Back to students
        </Link>
      </div>
    );
  const course = courses.find((c) => c.id === student.courseId);
  return (
    <>
      <Link className="back-link" to="/students">
        <ArrowLeft size={17} />
        Back to students
      </Link>
      <header className="page-heading">
        <div>
          <div className="eyebrow">STUDENT PROFILE</div>
          <h1>
            {student.name}
            <span className="accent">.</span>
          </h1>
          <p>Academic information and attendance overview.</p>
        </div>
        <AttendanceBadge attendance={student.attendance} />
      </header>
      <div className="details-grid">
        <GlassPanel className="profile-panel">
          <span className="avatar large">
            {student.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </span>
          <h2>{student.name}</h2>
          <p className="mono muted">ENROLLMENT #{student.enrollment}</p>
          <a className="text-link" href={"mailto:" + student.email}>
            <Mail size={16} />
            {student.email}
          </a>
          <dl>
            <div>
              <dt>Semester</dt>
              <dd>{student.semester}</dd>
            </div>
            <div>
              <dt>Gender</dt>
              <dd>{student.gender}</dd>
            </div>
          </dl>
        </GlassPanel>
        <div className="detail-stack">
          <GlassPanel padding={28}>
            <div className="eyebrow">ATTENDANCE OVERVIEW</div>
            <div className="big-number">
              {student.attendance}
              <span>%</span>
            </div>
            <div className="wide-track">
              <span style={{ width: student.attendance + "%" }} />
            </div>
            <p className="muted">75% attendance is required for eligibility.</p>
            <AttendanceBadge attendance={student.attendance} />
          </GlassPanel>
          <GlassPanel padding={28}>
            <div className="eyebrow">ENROLLED COURSE</div>
            <h2>
              <BookOpen size={20} /> {course?.name || "Unassigned"}
            </h2>
            <p className="muted">
              {course?.code} · Semester {student.semester}
            </p>
            {course && (
              <Link className="text-link" to={"/courses/" + course.id}>
                View course details →
              </Link>
            )}
          </GlassPanel>
        </div>
      </div>
    </>
  );
}
