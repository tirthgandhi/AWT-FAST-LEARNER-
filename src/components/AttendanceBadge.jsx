import { getAttendanceStatus } from "../utils/attendance";
export default function AttendanceBadge({ attendance }) {
  const status = getAttendanceStatus(attendance);
  return (
    <span className={"badge " + status.toLowerCase()}>
      <span className="dot" />
      {status}
    </span>
  );
}
