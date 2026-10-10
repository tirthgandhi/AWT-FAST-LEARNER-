import StudentCard from "./StudentCard";
export default function StudentTable({ students, courses, onEdit, onDelete }) {
  if (!students.length)
    return (
      <div className="empty">
        <h3>No students found</h3>
        <p>Add a student or adjust your search and filters.</p>
      </div>
    );
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            {[
              "Enrollment",
              "Student",
              "Email",
              "Course",
              "Semester",
              "Attendance",
              "Status",
              "Actions",
            ].map((x) => (
              <th key={x}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              course={courses.find((c) => c.id === student.courseId)}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
