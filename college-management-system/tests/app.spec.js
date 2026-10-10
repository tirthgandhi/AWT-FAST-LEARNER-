import { test, expect } from "@playwright/test";
import fs from "node:fs";
const shots = "../screenshots";
async function studentForm(page, values = {}) {
  const data = {
    "Student name": "Test Student",
    "Enrollment number": "999",
    "Email address": "test@example.com",
    Semester: "5",
    "Attendance (%)": "75",
    ...values,
  };
  for (const [label, value] of Object.entries(data))
    await page.getByLabel(label, { exact: true }).fill(value);
  await page.getByLabel("Course", { exact: true }).selectOption("course-1");
  await page.getByLabel("Gender", { exact: true }).selectOption("Other");
}
test("student CRUD, validation, combined filtering, persistence and dashboard", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/dashboard");
  await expect(page.getByText("69.0%")).toBeVisible();
  await page.getByRole("link", { name: "Add student", exact: true }).click();
  await page.getByRole("button", { name: "Save student" }).click();
  await expect(page.getByRole("alert")).toContainText("complete every");
  await studentForm(page, { "Enrollment number": "101" });
  await page.getByRole("button", { name: "Save student" }).click();
  await expect(page.getByRole("alert")).toContainText("already exists");
  await page.getByLabel("Enrollment number").fill("999");
  await page.getByLabel("Attendance (%)").fill("101");
  await page.getByRole("button", { name: "Save student" }).click();
  await expect(page.getByRole("alert")).toContainText("between 0 and 100");
  await page.getByLabel("Attendance (%)").fill("75");
  await page.getByLabel("Email address").fill("invalid");
  await page.getByRole("button", { name: "Save student" }).click();
  await expect(page.getByRole("alert")).toContainText("valid email");
  await page.getByLabel("Email address").fill("test@example.com");
  await page.getByRole("button", { name: "Save student" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.reload();
  await expect(
    page.getByRole("link", { name: "TS Test Student" }),
  ).toBeVisible();
  await page.getByLabel("Search students").fill("Test");
  await page.getByLabel("Filter students by course").selectOption("course-2");
  await expect(page.getByText("No students found")).toBeVisible();
  await page.getByLabel("Filter students by course").selectOption("course-1");
  await expect(page.locator("tbody tr")).toHaveCount(1);
  await expect(page.locator("tbody")).toContainText("Eligible");
  await page
    .getByRole("button", { name: "Edit Test Student", exact: true })
    .click();
  await page.getByLabel("Attendance (%)").fill("60");
  await page.getByRole("button", { name: "Save student" }).click();
  await page.reload();
  await expect(
    page.locator("tr").filter({ hasText: "Test Student" }),
  ).toContainText("Warning");
  await page
    .getByRole("link", { name: "View Test Student", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Test Student.", exact: true }),
  ).toBeVisible();
  await page.goto("/students");
  await page
    .getByRole("button", { name: "Delete Test Student", exact: true })
    .click();
  await page.getByRole("button", { name: "Cancel", exact: true }).click();
  await expect(page.locator("tbody")).toContainText("Test Student");
  await page
    .getByRole("button", { name: "Delete Test Student", exact: true })
    .click();
  await page.getByRole("button", { name: "Delete record" }).click();
  await page.reload();
  await expect(page.locator("tbody")).not.toContainText("Test Student");
  expect(errors).toEqual([]);
});
test("course CRUD, assigned deletion protection, search and filter", async ({
  page,
}) => {
  await page.goto("/courses");
  await page
    .getByRole("button", { name: "Delete CSE501", exact: true })
    .click();
  await page.getByRole("button", { name: "Delete record" }).click();
  await expect(page.getByRole("alert")).toContainText("Cannot delete");
  await page.getByRole("button", { name: "Add course", exact: true }).click();
  await page.getByRole("button", { name: "Save course" }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "complete every",
  );
  await page.getByLabel("Course code").fill("cse501");
  await page.getByLabel("Course name").fill("Test Course");
  await page.getByLabel("Description").fill("Test description");
  await page.getByRole("button", { name: "Save course" }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "already exists",
  );
  await page.getByLabel("Course code").fill("CSE599");
  await page.getByLabel("Status", { exact: true }).selectOption("Inactive");
  await page.getByRole("button", { name: "Save course" }).click();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Test Course", exact: true }),
  ).toBeVisible();
  await page.getByLabel("Search courses").fill("CSE599");
  await page.getByLabel("Filter courses by status").selectOption("Active");
  await expect(page.getByText("No courses found")).toBeVisible();
  await page.getByLabel("Filter courses by status").selectOption("Inactive");
  await expect(page.locator(".course-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Edit CSE599" }).click();
  await page.getByLabel("Course name").fill("Updated Course");
  await page.getByRole("button", { name: "Save course" }).click();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Updated Course", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Updated Course", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Updated Course.", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("No students found")).toBeVisible();
  await page.goto("/courses");
  await page.getByRole("button", { name: "Delete CSE599" }).click();
  await page.getByRole("button", { name: "Delete record" }).click();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Updated Course", exact: true }),
  ).toHaveCount(0);
});
test("empty arrays stay empty; bad routes and storage failures are handled", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("college_students", "[]");
    localStorage.setItem("college_courses", "[]");
  });
  await page.goto("/dashboard");
  await expect(page.getByText("0%", { exact: true })).toBeVisible();
  await expect(page.getByText("No students found")).toBeVisible();
  await page.reload();
  await expect(page.getByText("0%", { exact: true })).toBeVisible();
  for (const route of ["/students/missing", "/courses/missing"]) {
    await page.goto(route);
    await expect(
      page.getByRole("heading", { name: "Record Not Found" }),
    ).toBeVisible();
  }
  await page.goto("/unknown");
  await expect(page).toHaveURL(/dashboard/);
});
test("storage denial and malformed JSON show a warning", async ({
  browser,
}) => {
  for (const mode of ["denied", "malformed"]) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.addInitScript((mode) => {
      if (mode === "denied") {
        Storage.prototype.setItem = () => {
          throw Error("denied");
        };
      } else localStorage.setItem("college_students", "{bad");
    }, mode);
    await page.goto("/dashboard");
    await expect(page.getByRole("alert")).toContainText("Browser storage");
    if (mode === "malformed")
      expect(
        await page.evaluate(() => localStorage.getItem("college_students")),
      ).toBe("{bad");
    await context.close();
  }
});
test("all pages, forms and responsive screenshots", async ({ page }) => {
  fs.mkdirSync(shots, { recursive: true });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const [route, name] of [
    ["/dashboard", "01-dashboard"],
    ["/students", "02-students"],
    ["/students/student-1", "03-student-details"],
    ["/courses", "04-courses"],
    ["/courses/course-1", "05-course-details"],
    ["/students/missing", "10-record-not-found"],
  ]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await page.screenshot({
      path: shots + "/" + name + ".png",
      fullPage: true,
    });
  }
  await page.goto("/students");
  await page.getByRole("button", { name: "Add student", exact: true }).click();
  await page.screenshot({
    path: shots + "/06-add-student.png",
    fullPage: true,
  });
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "Edit Rahul Patel", exact: true })
    .click();
  await page.screenshot({
    path: shots + "/07-edit-student.png",
    fullPage: true,
  });
  await page.keyboard.press("Escape");
  await page.goto("/courses");
  await page.getByRole("button", { name: "Add course", exact: true }).click();
  await page.screenshot({ path: shots + "/08-add-course.png", fullPage: true });
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Edit CSE501" }).click();
  await page.screenshot({
    path: shots + "/09-edit-course.png",
    fullPage: true,
  });
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [route, name] of [
    ["/dashboard", "11-mobile-dashboard"],
    ["/students", "12-mobile-students"],
    ["/courses", "13-mobile-courses"],
    ["/students/student-1", "14-mobile-student-details"],
    ["/courses/course-1", "15-mobile-course-details"],
  ]) {
    await page.goto(route);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: shots + "/" + name + ".png",
      fullPage: true,
    });
  }
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await expect(page.locator(".sidebar")).toHaveClass(/is-open/);
  await page.screenshot({
    path: shots + "/16-mobile-navigation.png",
    fullPage: true,
  });
  await page.getByRole("link", { name: "Students", exact: true }).click();
  await expect(page).toHaveURL(/students$/);
  await expect(page.locator(".sidebar")).not.toHaveClass(/is-open/);
  await page.getByRole("button", { name: "Add student", exact: true }).click();
  await page.screenshot({
    path: shots + "/17-mobile-form.png",
    fullPage: true,
  });
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 900, height: 1100 });
  await page.goto("/dashboard");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: shots + "/18-tablet-dashboard.png",
    fullPage: true,
  });
  expect(errors).toEqual([]);
});
