export function getAttendanceStatus(attendance) {
  const value = Number(attendance);
  if (!Number.isFinite(value) || value < 0 || value > 100) return "Invalid";
  return value >= 75 ? "Eligible" : value >= 60 ? "Warning" : "Detained";
}
