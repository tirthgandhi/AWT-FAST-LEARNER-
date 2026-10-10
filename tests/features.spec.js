import { test, expect } from "@playwright/test";
import fs from "node:fs";

// Each test has fresh browser storage: demonstration actions never touch user records.
async function capture(page, name) {
  fs.mkdirSync("screenshots", { recursive: true });
  await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
}

test("student display, search, course filter and deletion evidence", async ({ page }) => {
  await page.goto("/students");
  await expect(page.locator("tbody tr")).toHaveCount(3);
  await capture(page, "19-display-students");

  await page.getByLabel("Search students").fill("Priya");
  await expect(page.locator("tbody tr")).toHaveCount(1);
  await expect(page.locator("tbody")).toContainText("Priya Shah");
  await capture(page, "20-search-student");

  await page.getByLabel("Search students").fill("");
  await page.getByLabel("Filter students by course").selectOption("course-1");
  await expect(page.locator("tbody tr")).toHaveCount(2);
  await expect(page.locator("tbody")).not.toContainText("Priya Shah");
  await capture(page, "21-filter-students-by-course");

  await page.getByLabel("Filter students by course").selectOption("");
  await page.getByRole("button", { name: "Delete Amit Kumar", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("Amit Kumar");
  await capture(page, "22-delete-student-confirmation");
  await page.getByRole("button", { name: "Delete record" }).click();
  await expect(page.getByRole("status")).toContainText("Student deleted successfully");
  await expect(page.locator("tbody tr")).toHaveCount(2);
  await capture(page, "23-student-deleted");
  await page.reload();
  await expect(page.locator("tbody")).not.toContainText("Amit Kumar");
});

test("course add, search, filter, details and deletion evidence", async ({ page }) => {
  await page.goto("/courses");
  await page.getByRole("button", { name: "Add course", exact: true }).click();
  await page.getByLabel("Course code").fill("CSE504");
  await page.getByLabel("Course name").fill("Software Engineering");
  await page.getByLabel("Description").fill("Software design, development lifecycle, and quality assurance.");
  await capture(page, "24-add-course-filled-form");
  await page.getByRole("button", { name: "Save course" }).click();
  await expect(page.getByRole("heading", { name: "Software Engineering", exact: true })).toBeVisible();
  await expect(page.getByRole("status")).toContainText("Course saved successfully");
  await capture(page, "25-course-added");
  await page.reload();
  await expect(page.locator(".course-card")).toHaveCount(4);

  await page.getByLabel("Search courses").fill("Database");
  await expect(page.locator(".course-card")).toHaveCount(1);
  await expect(page.locator(".course-card")).toContainText("Database Management System");
  await capture(page, "26-search-course");

  await page.getByLabel("Search courses").fill("");
  await page.getByLabel("Filter courses by status").selectOption("Inactive");
  await expect(page.locator(".course-card")).toHaveCount(1);
  await expect(page.locator(".course-card")).toContainText("Computer Networks");
  await capture(page, "27-filter-course");

  await page.getByLabel("Filter courses by status").selectOption("");
  await page.getByRole("link", { name: "Advanced Web Technology", exact: true }).click();
  await expect(page).toHaveURL(/courses\/course-1$/);
  await expect(page.locator("tbody tr")).toHaveCount(2);
  await capture(page, "28-view-course-details");

  await page.goto("/courses");
  await page.getByRole("button", { name: "Delete CSE504", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("Software Engineering");
  await capture(page, "29-delete-course-confirmation");
  await page.getByRole("button", { name: "Delete record" }).click();
  await expect(page.getByRole("status")).toContainText("Course deleted successfully");
  await expect(page.locator(".course-card")).toHaveCount(3);
  await capture(page, "30-course-deleted");
  await page.reload();
  await expect(page.locator(".course-card")).not.toContainText(["Software Engineering"]);

  await page.getByRole("button", { name: "Delete CSE501", exact: true }).click();
  await page.getByRole("button", { name: "Delete record" }).click();
  await expect(page.getByRole("alert")).toContainText("Cannot delete this course");
  await capture(page, "31-assigned-course-delete-protection");
});

test("attendance warning and detained status evidence", async ({ page }) => {
  await page.goto("/students/student-2");
  await expect(page.locator(".big-number")).toContainText("69");
  await expect(page.locator(".badge.warning")).toHaveCount(2);
  await capture(page, "32-attendance-warning");

  await page.goto("/students/student-3");
  await expect(page.locator(".big-number")).toContainText("52");
  await expect(page.locator(".badge.detained")).toHaveCount(2);
  await capture(page, "33-attendance-detained");
});
