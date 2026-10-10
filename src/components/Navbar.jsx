import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="mobile-toggle icon-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <button
          className="drawer-backdrop"
          aria-label="Close navigation overlay"
          onClick={() => setOpen(false)}
        />
      )}
      <aside id="navigation" className={"sidebar " + (open ? "is-open" : "")}>
        <Link className="brand" to="/dashboard" onClick={() => setOpen(false)}>
          <span className="brand-icon">
            <GraduationCap />
          </span>
          <span>
            Campus<span className="brand-accent">OS</span>
            <small>COLLEGE MANAGEMENT</small>
          </span>
        </Link>
        <div className="sidebar-label">WORKSPACE</div>
        <nav>
          {[
            ["/dashboard", LayoutDashboard, "Dashboard"],
            ["/students", Users, "Students"],
            ["/courses", BookOpen, "Courses"],
          ].map(([url, Icon, label]) => (
            <NavLink key={url} to={url} onClick={() => setOpen(false)}>
              <Icon size={19} />
              {label}
              <ArrowUpRight className="nav-arrow" size={15} />
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <span className="badge eligible">
            <span className="dot" /> AWT Practical
          </span>
          <h4>GSFC University</h4>
          <p>
            Computer Science & Engineering
            <br />
            Semester 5 · Fast Learner
          </p>
          <div className="sidebar-foot">Built for better learning.</div>
        </div>
      </aside>
    </>
  );
}
