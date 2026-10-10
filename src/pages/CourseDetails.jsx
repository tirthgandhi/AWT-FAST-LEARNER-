import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Users, BookOpen } from "lucide-react";
import GlassPanel from "../components/GlassPanel";
import StudentTable from "../components/StudentTable";
export default function CourseDetails({ courses, students }) {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  if (!course)
    return (
      <div className="empty glass-panel">
        <h1>Record Not Found</h1>
        <Link className="text-link" to="/courses">
          Back to courses
        </Link>
      </div>
    );
  const enrolled = students.filter((s) => s.courseId === id);
  return (
    <>
      <Link className="back-link" to="/courses">
        <ArrowLeft size={17} />
        Back to courses
      </Link>
      <header className="page-heading">
        <div>
          <div className="eyebrow">{course.code} / COURSE OVERVIEW</div>
          <h1>
            {course.name}
            <span className="accent">.</span>
          </h1>
          <p>{course.description}</p>
        </div>
        <span
          className={
            "badge " + (course.status === "Active" ? "eligible" : "inactive")
          }
        >
          {course.status}
        </span>
      </header>
      <div className="course-meta">
        <GlassPanel padding={24}>
          <BookOpen size={21} />
          <small>ACADEMIC SEMESTER</small>
          <strong>Semester {course.semester}</strong>
        </GlassPanel>
        <GlassPanel padding={24}>
          <Users size={21} />
          <small>ENROLLED STUDENTS</small>
          <strong>{enrolled.length} students</strong>
        </GlassPanel>
      </div>
      <GlassPanel>
        <header className="panel-heading">
          <div>
            <h2>Enrolled students</h2>
            <p>Students currently assigned to this course.</p>
          </div>
        </header>
        <StudentTable students={enrolled} courses={courses} />
      </GlassPanel>
    </>
  );
}
