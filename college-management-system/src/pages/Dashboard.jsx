import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  CircleCheck,
  Activity,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import DashboardCard from "../components/DashboardCard";
import GlassPanel from "../components/GlassPanel";
import StudentTable from "../components/StudentTable";
export default function Dashboard({ students, courses }) {
  // Derived statistics are recalculated only when their source arrays change.
  const average = useMemo(
    () =>
      students.length
        ? (
            students.reduce((sum, s) => sum + Number(s.attendance), 0) /
            students.length
          ).toFixed(1)
        : "0",
    [students],
  );
  const active = useMemo(
    () => courses.filter((c) => c.status === "Active").length,
    [courses],
  );
  return (
    <>
      <header className="page-heading">
        <div>
          <div className="eyebrow">YOUR CAMPUS, AT A GLANCE</div>
          <h1>
            Dashboard<span className="accent">.</span>
          </h1>
          <p>A clearer view of your students, courses, and progress.</p>
        </div>
        <Link className="btn-primary" to="/students?add=1">
          <Plus size={17} />
          Add student
        </Link>
      </header>
      <div className="stats-grid">
        <DashboardCard
          title="Total students"
          value={String(students.length).padStart(2, "0")}
          icon={Users}
          subtitle="Across all courses"
        />
        <DashboardCard
          title="Total courses"
          value={String(courses.length).padStart(2, "0")}
          icon={BookOpen}
          subtitle="In your curriculum"
        />
        <DashboardCard
          title="Active courses"
          value={String(active).padStart(2, "0")}
          icon={CircleCheck}
          subtitle="Currently available"
        />
        <DashboardCard
          title="Average attendance"
          value={average + "%"}
          icon={Activity}
          subtitle="All enrolled students"
        />
      </div>
      <GlassPanel className="welcome-panel">
        <div>
          <span className="eyebrow">
            A LITTLE ORGANIZATION. A LOT OF POSSIBILITY.
          </span>
          <h2>
            Good learning starts with
            <br />a well-managed campus.
          </h2>
          <p>Your academic workspace, all in one place.</p>
          <Link className="text-link" to="/courses">
            Explore courses <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="academic-stamp">
          <BookOpen size={48} strokeWidth={1} />
          <span>SEMESTER</span>
          <strong>05</strong>
          <small>COMPUTER SCIENCE & ENGINEERING</small>
        </div>
      </GlassPanel>
      <GlassPanel>
        <header className="panel-heading">
          <div>
            <h2>Recent students</h2>
            <p>The latest additions to your campus.</p>
          </div>
          <Link className="text-link" to="/students">
            View all students <ArrowUpRight size={16} />
          </Link>
        </header>
        <StudentTable
          students={students.slice(-5).reverse()}
          courses={courses}
        />
        <footer className="table-footer">
          Showing {Math.min(5, students.length)} of {students.length} students
          <span>Attendance eligibility starts at 75%</span>
        </footer>
      </GlassPanel>
    </>
  );
}
