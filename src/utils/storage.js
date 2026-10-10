export function loadData(key, defaultData = []) {
  try {
    const saved = localStorage.getItem(key);
    if (saved === null) return defaultData;
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("Expected an array");
    return parsed;
  } catch {
    return defaultData;
  }
}
export function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}
export function storageIssue(key) {
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null && !Array.isArray(JSON.parse(raw))) return true;
    return false;
  } catch {
    return true;
  }
}
