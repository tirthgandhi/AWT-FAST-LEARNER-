import { test } from "node:test";
import assert from "node:assert/strict";
import { getAttendanceStatus } from "../src/utils/attendance.js";
import { loadData, saveData } from "../src/utils/storage.js";
test("attendance boundaries and invalid values", () => {
  for (const [value, status] of [
    [0, "Detained"],
    [59.9, "Detained"],
    [60, "Warning"],
    [74.9, "Warning"],
    [75, "Eligible"],
    [100, "Eligible"],
    [-1, "Invalid"],
    [101, "Invalid"],
    ["bad", "Invalid"],
  ])
    assert.equal(getAttendanceStatus(value), status);
});
test("storage preserves empty data and handles malformed and denied storage", () => {
  let value = null;
  globalThis.localStorage = {
    getItem: () => value,
    setItem: (_, v) => {
      value = v;
    },
  };
  assert.deepEqual(loadData("test", [1]), [1]);
  assert.equal(saveData("test", []), true);
  assert.deepEqual(loadData("test", [1]), []);
  value = "{bad";
  assert.deepEqual(loadData("test", [1]), [1]);
  globalThis.localStorage = {
    getItem: () => {
      throw Error();
    },
    setItem: () => {
      throw Error();
    },
  };
  assert.equal(saveData("test", []), false);
  assert.deepEqual(loadData("test", [1]), [1]);
});
