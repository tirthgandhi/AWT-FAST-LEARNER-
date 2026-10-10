
<div align="center">

# 🎓 CampusOS

### College Course & Student Management System

**A Modern Academic Management Experience, Built with React**

An interactive, responsive, and user-friendly web application designed to simplify student records, course management, and attendance tracking.

<br/>

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-20232A?style=for-the-badge&logo=vite&logoColor=FFC107)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-20232A?style=for-the-badge&logo=css&logoColor=FF8C00)

<br/>

![Project](https://img.shields.io/badge/Project-CampusOS-FF8C00?style=flat-square)
![Category](https://img.shields.io/badge/Category-Education-blue?style=flat-square)
![Frontend](https://img.shields.io/badge/Architecture-Frontend--Only-success?style=flat-square)
![Storage](https://img.shields.io/badge/Storage-LocalStorage-yellow?style=flat-square)

<br/>

**Advanced Web Technology | Fast Learner Assignment**

**GSFC University · Computer Science & Engineering · Semester 5**

<br/>

[Overview](#-project-overview) •
[Features](#-key-features) •
[Tech Stack](#-technology-stack) •
[Installation](#-getting-started) •
[Screenshots](#-application-screenshots) •
[Testing](#-testing--quality-assurance)

</div>

---

## 📸 Project Preview

<div align="center">

<img src="college-management-system/screenshots/01-dashboard.png" alt="CampusOS Dashboard" width="100%"/>

<br/>

**Modern Academic Dashboard — Black & Orange Liquid Glass UI**

</div>

---

## 📖 Project Overview

**CampusOS** is a modern college course and student management application developed using React.js, JavaScript, Vite, and CSS3.

The application provides a centralized academic workspace where users can manage student information, organize courses, monitor attendance eligibility, and view academic statistics through an intuitive dashboard.

The main objective is to demonstrate modern React development concepts through a practical, fully interactive Single Page Application (SPA).

### 🎯 Project Objectives

- Develop a complete React-based academic management interface.
- Implement student and course CRUD functionality.
- Design reusable and maintainable React components.
- Implement client-side form validation.
- Demonstrate React Hooks and component communication.
- Create an interactive academic dashboard.
- Preserve application data using browser localStorage.
- Provide a responsive interface across devices.
- Implement client-side routing and dynamic detail pages.
- Apply a consistent black-and-orange liquid glass design.

### 💡 What Makes CampusOS Different?

| Feature | Description |
|:---|:---|
| 🎨 Modern UI | Black and orange liquid-glass design |
| ⚛️ React Architecture | Reusable functional components and React Hooks |
| 📊 Live Dashboard | Automatically calculated academic statistics |
| 🎓 Student Management | Complete CRUD operations and searchable records |
| 📚 Course Management | Course creation, modification, and enrollment information |
| 🚦 Attendance Tracking | Automatic attendance eligibility classification |
| 💾 Browser Persistence | Data preserved between page refreshes |
| 📱 Responsive Layout | Adaptive desktop, tablet, and mobile interface |
| 🧩 Modular Code | Organized components, pages, utilities, and styles |
| 🔒 Data Validation | Field validation and duplicate prevention |

---

## ✨ Key Features

### 📊 01 — Interactive Dashboard

The dashboard provides an overview of important academic information.

**Dashboard includes:**

- Total registered students
- Total available courses
- Active courses
- Average student attendance
- Five recently added students
- Dynamic statistics based on current records

All dashboard statistics are calculated from application data.

### 🎓 02 — Student Management

Manage student records through an interactive student directory.

| Functionality | Description |
|:---|:---|
| Add Student | Register students through a validated form |
| View Students | Display all registered student records |
| Edit Student | Update student information |
| Delete Student | Remove students after confirmation |
| Search Student | Search by name, enrollment number, or email |
| Filter Students | Filter records by course |
| Student Details | View individual student profiles |
| Attendance Status | Display attendance classification |

**Validation features:**

- Required-field validation
- Valid email format
- Unique enrollment numbers
- Case-insensitive duplicate detection
- Semester selection from 1 to 8
- Attendance percentage between 0 and 100
- Valid course selection

### 📚 03 — Course Management

A centralized interface for managing academic courses.

**Supported functionality:**

- Add new courses
- Edit existing courses
- View course details
- Search courses
- Filter courses by status
- View course enrollment information
- Delete courses without assigned students
- Prevent deletion of courses with assigned students
- Validate unique course codes

### 🚦 04 — Attendance Eligibility System

CampusOS automatically evaluates student attendance.

| Attendance Percentage | Status | Indicator |
|:---:|:---:|:---:|
| 75% – 100% | Eligible | 🟢 Green |
| 60% – Below 75% | Warning | 🟡 Amber |
| 0% – Below 60% | Detained | 🔴 Red |
| Invalid Value | Invalid | 🔴 Red |

Attendance calculations are handled through the shared `getAttendanceStatus()` utility.

**Important boundaries:**

- Exactly 75% = Eligible
- Exactly 60% = Warning
- Below 60% = Detained

### 💾 05 — Persistent Data Management

The application uses the browser's localStorage API.

**Advantages:**

- Student records remain after refreshing the page.
- Course records remain between browser sessions.
- No external database is required.
- No backend server is required.
- Records update immediately after changes.

Storage failures are handled with visible warning messages.

### 📱 06 — Responsive User Interface

CampusOS adapts to multiple screen sizes.

**Responsive features:**

- Desktop sidebar navigation
- Mobile navigation drawer
- Responsive dashboard cards
- Scrollable tables
- Adaptive forms
- Mobile-friendly dialogs
- Keyboard-accessible interactions
- Visible focus indicators
- Reduced-motion support

---

## 🎨 UI/UX Design System

CampusOS follows a modern **Dark Liquid Glass Design System**.

The visual interface combines a dark background, orange accents, transparent panels, and subtle visual effects.

### Color Palette

| Color | Usage | Reference |
|:---|:---|:---|
| ⚫ Black | Primary application background | Dark theme |
| 🟠 Orange | Primary accent and interactive elements | Brand accent |
| ⚪ White | Main text and information | High contrast |
| 🔘 Dark Gray | Secondary panels and surfaces | Supporting surfaces |
| 🟢 Green | Eligible and success indicators | Positive status |
| 🟡 Amber | Attendance warnings | Warning status |
| 🔴 Red | Errors and detained status | Negative status |

### Design Characteristics

- Glassmorphism-inspired components
- Semi-transparent surfaces
- Subtle background grid
- Rounded cards and dialogs
- Smooth hover interactions
- Consistent spacing and typography
- Modern iconography
- Responsive navigation
- Accessible forms and controls

The interface is created using custom CSS without Tailwind CSS, Bootstrap, or another UI framework.

---

## 🛠 Technology Stack

<div align="center">

### Core Technologies

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)

</div>

### Frontend Technologies

| Technology | Version / Type | Purpose |
|:---|:---|:---|
| React.js | 19 | Component-based user interface |
| React DOM | 19 | Rendering React components |
| Vite | 8 | Development server and build tool |
| JavaScript | ES6+ | Application logic and event handling |
| JSX | React Syntax | UI component structure |
| HTML5 | Standard | Semantic page structure |
| CSS3 | Standard | Styling, animations, and responsive layouts |
| React Router DOM | 7 | Single Page Application routing |
| Lucide React | Icon Library | Modern interface icons |

### React Concepts Implemented

| Concept | Implementation |
|:---|:---|
| Functional Components | Reusable application components |
| JSX | Declarative component layouts |
| Props | Component data and callback communication |
| useState | State management and controlled forms |
| useEffect | Storage synchronization and component effects |
| useMemo | Optimized filtering and statistics |
| useRef | References used by dialogs |
| useId | Accessible component identifiers |
| React.memo | Avoiding unnecessary component renders |
| Event Handling | User interactions and form submissions |
| Conditional Rendering | Dynamic UI states |
| Array Methods | Filtering, searching, and calculations |

### Development Tools

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square)
![Oxlint](https://img.shields.io/badge/Oxlint-Code_Quality-orange?style=flat-square)

| Tool | Purpose |
|:---|:---|
| Node.js | JavaScript development environment |
| npm | Dependency and package management |
| Git | Version control |
| GitHub | Source code hosting |
| Playwright | Browser automation and testing |
| Node.js Test Runner | Unit testing |
| Oxlint | JavaScript and React code analysis |

---

## 🏗 Application Architecture

CampusOS uses a frontend-only Single Page Application architecture.

```text
                 ┌──────────────────────┐
                 │       CampusOS       │
                 │    React Frontend    │
                 └──────────┬───────────┘
                            │
                 ┌──────────▼───────────┐
                 │     React Router     │
                 └──────────┬───────────┘
                            │
           ┌────────────────┼────────────────┐
           │                │                │
     ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
     │ Dashboard │    │ Students  │    │  Courses  │
     └─────┬─────┘    └─────┬─────┘    └─────┬─────┘
           │                │                │
           └────────────────┼────────────────┘
                            │
                 ┌──────────▼───────────┐
                 │   React State &      │
                 │   Business Logic     │
                 └──────────┬───────────┘
                            │
                 ┌──────────▼───────────┐
                 │  Browser localStorage│
                 └──────────────────────┘
```

### Architecture Highlights

**Frontend Layer**

React components handle application screens, forms, navigation, and user interactions.

**Application Logic**

JavaScript utilities manage validation, attendance calculations, searches, and data transformations.

**Data Storage Layer**

Browser localStorage stores student and course records.

**Routing Layer**

React Router provides navigation and dynamic detail routes without requiring full page reloads.

> **Note:** CampusOS is a frontend-only academic application. It does not use a backend API, authentication system, or external database.

---

## 📂 Project Folder Structure

The project follows a modular React application structure.

```text
AWT-FAST-LEARNER-/
│
├── README.md
├── TESTING.md
│
└── college-management-system/
    │
    ├── public/
    │   └── favicon.svg
    │
    ├── screenshots/
    │   ├── 01-dashboard.png
    │   ├── 02-students.png
    │   ├── 03-student-details.png
    │   ├── 04-courses.png
    │   ├── 05-course-details.png
    │   └── ... 13 additional screenshots
    │
    ├── src/
    │   │
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── DashboardCard.jsx
    │   │   ├── StudentCard.jsx
    │   │   ├── StudentForm.jsx
    │   │   ├── StudentTable.jsx
    │   │   ├── CourseCard.jsx
    │   │   ├── CourseForm.jsx
    │   │   ├── AttendanceBadge.jsx
    │   │   ├── GlassPanel.jsx
    │   │   ├── Modal.jsx
    │   │   └── ConfirmDialog.jsx
    │   │
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── Students.jsx
    │   │   ├── StudentDetails.jsx
    │   │   ├── Courses.jsx
    │   │   └── CourseDetails.jsx
    │   │
    │   ├── data/
    │   │   └── seedData.js
    │   │
    │   ├── utils/
    │   │   ├── attendance.js
    │   │   └── storage.js
    │   │
    │   ├── styles/
    │   │   ├── variables.css
    │   │   ├── global.css
    │   │   ├── glass.css
    │   │   └── responsive.css
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── tests/
    │   ├── app.spec.js
    │   └── unit.test.js
    │
    ├── .gitignore
    ├── .oxlintrc.json
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.js
    ├── vite.config.js
    └── README.md
```

### Folder Responsibilities

| Directory / File | Responsibility |
|:---|:---|
| `components/` | Shared React UI components |
| `pages/` | Main application screens |
| `data/` | Initial demonstration records |
| `utils/` | Shared business logic and storage utilities |
| `styles/` | Global styles and responsive design |
| `tests/` | Unit and browser tests |
| `screenshots/` | Application screenshots |
| `App.jsx` | Main application composition |
| `main.jsx` | React application entry point |
| `vite.config.js` | Vite configuration |
| `package.json` | Dependencies and npm scripts |
| `package-lock.json` | Locked dependency versions |

---

## 🚀 Getting Started

Follow these steps to run CampusOS locally.

### Prerequisites

Ensure that the following tools are installed:

- Node.js **22.12 or later**
- npm
- Git
- A modern web browser

### Step 1 — Clone the Repository

```bash
git clone https://github.com/tirthgandhi/AWT-FAST-LEARNER-.git
```

### Step 2 — Navigate to the Project

```bash
cd AWT-FAST-LEARNER-/college-management-system
```

### Step 3 — Install Dependencies

```bash
npm install
```

This installs the required packages from `package.json`.

### Step 4 — Start the Development Server

```bash
npm run dev
```

### Step 5 — Open the Application

Open the development URL displayed in your terminal.

Usually:

```text
http://localhost:5173/
```

The application should now be accessible in your browser.

---

## ⚙️ Available Commands

| Command | Description |
|:---|:---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Generate a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run source code checks |
| `npm run test:unit` | Execute unit tests |
| `npm test` | Run Playwright browser tests |

### Production Build

```bash
npm run build
```

Production-ready files are generated in the `dist/` directory.

```bash
npm run preview
```

This allows you to preview the production build locally.

For deployment, the hosting provider must support an SPA fallback to `index.html` for direct access to dynamic routes.

---

## 🧭 Application Routes

CampusOS uses React Router DOM for client-side navigation.

| Route | Description |
|:---|:---|
| `/` | Redirect to dashboard |
| `/dashboard` | Main academic dashboard |
| `/students` | Student management |
| `/students/:id` | Individual student profile |
| `/courses` | Course management |
| `/courses/:id` | Individual course information |

**Additional routing behavior:**

- Unknown URLs redirect to the dashboard.
- Unknown student IDs display a Record Not Found state.
- Unknown course IDs display a Record Not Found state.
- Missing-record screens provide return navigation.

---

## 🗃 Data Storage & Persistence

CampusOS uses the browser's built-in localStorage API.

### Storage Keys

| Storage Key | Description |
|:---|:---|
| `college_students` | Stores student records |
| `college_courses` | Stores course records |

### Persistence Behavior

- Records are saved locally in the browser.
- Saved data remains after refreshing the application.
- New records use `crypto.randomUUID()`.
- Editing a record preserves its existing ID.
- Valid empty arrays remain empty after refresh.
- Sample data is used when a storage key is missing or unreadable.
- Storage errors display warning messages.
- Invalid storage content is preserved for recovery instead of being automatically overwritten.

### Limitations

Because CampusOS uses localStorage:

- Data is stored on the current browser and site origin.
- Records do not synchronize between devices.
- Clearing browser storage can remove saved records.
- There is no centralized database.
- There is no user authentication.

This storage approach is suitable for demonstrating frontend concepts in an academic project.

---

## 🧪 Testing & Quality Assurance

CampusOS includes automated tests to help verify application functionality.

### Testing Technologies

| Technology | Testing Purpose |
|:---|:---|
| Playwright | End-to-end browser workflows |
| Node.js Test Runner | Unit tests |
| Oxlint | Source code quality |
| Vite | Production build verification |

### Test Coverage

**Student Management**

- Student creation
- Student editing
- Student deletion
- Deletion cancellation
- Duplicate enrollment validation
- Email validation
- Attendance validation
- Search and filtering

**Course Management**

- Course creation
- Course modification
- Course deletion
- Assigned-course deletion protection
- Detail-page navigation

**Application Behavior**

- localStorage persistence
- Refresh behavior
- Empty record collections
- Invalid application routes
- Malformed storage handling
- Denied storage behavior
- Responsive navigation
- Mobile and tablet layout overflow

### Run Unit Tests

```bash
npm run test:unit
```

### Install Playwright Browser

```bash
npx playwright install chromium
```

### Run Browser Tests

```bash
npm test
```

### Run Code Quality Checks

```bash
npm run lint
```

### Verify Production Build

```bash
npm run build
```

### Verification Summary

| Verification | Recorded Result |
|:---|:---|
| Dependency installation | Successful |
| Development server startup | Successful |
| Production build | Successful |
| Unit tests | 2 Passed |
| Playwright browser workflows | 8 Passed |
| Browser screenshot captures | 33 Generated |
| Browser coverage | Chromium |

These results describe the recorded implementation checks. Other browser engines have not been tested.

See [TESTING.md](TESTING.md) for additional verification details.

---

## 🖼 Application Screenshots

CampusOS includes **33 browser screenshots** demonstrating application pages, forms, and responsive layouts.

### 01 — Academic Dashboard

<div align="center">

<img src="college-management-system/screenshots/01-dashboard.png" width="95%" alt="Academic Dashboard"/>

*Academic overview with dynamic student and course statistics*

</div>

### 02 — Student Management

| Student Directory | Student Details |
|:---:|:---:|
| <img src="college-management-system/screenshots/02-students.png" width="100%" alt="Student Directory"/> | <img src="college-management-system/screenshots/03-student-details.png" width="100%" alt="Student Details"/> |

### 03 — Course Management

| Course Directory | Course Details |
|:---:|:---:|
| <img src="college-management-system/screenshots/04-courses.png" width="100%" alt="Course Directory"/> | <img src="college-management-system/screenshots/05-course-details.png" width="100%" alt="Course Details"/> |

### 04 — Student Forms

| Add Student | Edit Student |
|:---:|:---:|
| <img src="college-management-system/screenshots/06-add-student.png" width="100%" alt="Add Student"/> | <img src="college-management-system/screenshots/07-edit-student.png" width="100%" alt="Edit Student"/> |

### 05 — Course Forms

| Add Course | Edit Course |
|:---:|:---:|
| <img src="college-management-system/screenshots/08-add-course.png" width="100%" alt="Add Course"/> | <img src="college-management-system/screenshots/09-edit-course.png" width="100%" alt="Edit Course"/> |

### 06 — Record Not Found

<div align="center">

<img src="college-management-system/screenshots/10-record-not-found.png" width="85%" alt="Record Not Found"/>

*Graceful handling of unavailable records*

</div>

### 07 — Mobile Experience

| Dashboard | Students | Courses |
|:---:|:---:|:---:|
| <img src="college-management-system/screenshots/11-mobile-dashboard.png" width="100%" alt="Mobile Dashboard"/> | <img src="college-management-system/screenshots/12-mobile-students.png" width="100%" alt="Mobile Students"/> | <img src="college-management-system/screenshots/13-mobile-courses.png" width="100%" alt="Mobile Courses"/> |

### 08 — Mobile Detail Pages

| Student Profile | Course Details |
|:---:|:---:|
| <img src="college-management-system/screenshots/14-mobile-student-details.png" width="100%" alt="Mobile Student Profile"/> | <img src="college-management-system/screenshots/15-mobile-course-details.png" width="100%" alt="Mobile Course Details"/> |

### 09 — Responsive Navigation & Forms

| Mobile Navigation | Mobile Form |
|:---:|:---:|
| <img src="college-management-system/screenshots/16-mobile-navigation.png" width="100%" alt="Mobile Navigation"/> | <img src="college-management-system/screenshots/17-mobile-form.png" width="100%" alt="Mobile Form"/> |

### 10 — Tablet Dashboard

<div align="center">

<img src="college-management-system/screenshots/18-tablet-dashboard.png" width="85%" alt="Tablet Dashboard"/>

*Responsive dashboard layout for tablet-sized screens*

</div>

<div align="center">

**[📁 Explore All Application Screenshots](college-management-system/screenshots/)**

</div>

---

### Requested feature demonstrations

These screenshots show the controls in use and the resulting records. Deletions and course creation were performed in isolated test-browser storage, without changing personal browser data.

| Requirement | Screenshot evidence |
| :--- | :--- |
| Display students | [Student directory](college-management-system/screenshots/19-display-students.png) |
| Delete student | [Confirmation](college-management-system/screenshots/22-delete-student-confirmation.png) · [Successful deletion](college-management-system/screenshots/23-student-deleted.png) |
| Search student | [Search for Priya](college-management-system/screenshots/20-search-student.png) |
| Filter by course | [Advanced Web Technology students](college-management-system/screenshots/21-filter-students-by-course.png) |
| Add course | [Completed form](college-management-system/screenshots/24-add-course-filled-form.png) · [New course in catalog](college-management-system/screenshots/25-course-added.png) |
| Delete course | [Confirmation](college-management-system/screenshots/29-delete-course-confirmation.png) · [Successful deletion](college-management-system/screenshots/30-course-deleted.png) · [Assigned-course protection](college-management-system/screenshots/31-assigned-course-delete-protection.png) |
| Search course | [Database search result](college-management-system/screenshots/26-search-course.png) |
| Filter course | [Inactive courses](college-management-system/screenshots/27-filter-course.png) |
| View course details | [Course and enrolled students](college-management-system/screenshots/28-view-course-details.png) |
| Attendance warning | [69% — Warning](college-management-system/screenshots/32-attendance-warning.png) · [52% — Detained](college-management-system/screenshots/33-attendance-detained.png) |

#### Student operations

| Display students | Search student |
| :---: | :---: |
| ![Student directory](college-management-system/screenshots/19-display-students.png) | ![Search student](college-management-system/screenshots/20-search-student.png) |

| Filter by course | Delete confirmation |
| :---: | :---: |
| ![Filter students by course](college-management-system/screenshots/21-filter-students-by-course.png) | ![Delete student confirmation](college-management-system/screenshots/22-delete-student-confirmation.png) |

![Student successfully deleted](college-management-system/screenshots/23-student-deleted.png)

#### Course operations

| Add course form | Course added |
| :---: | :---: |
| ![Filled add course form](college-management-system/screenshots/24-add-course-filled-form.png) | ![Course added](college-management-system/screenshots/25-course-added.png) |

| Search course | Filter inactive courses |
| :---: | :---: |
| ![Search course](college-management-system/screenshots/26-search-course.png) | ![Filter course](college-management-system/screenshots/27-filter-course.png) |

| Course details | Delete confirmation |
| :---: | :---: |
| ![Course details](college-management-system/screenshots/28-view-course-details.png) | ![Delete course confirmation](college-management-system/screenshots/29-delete-course-confirmation.png) |

| Course deleted | Assigned course protected |
| :---: | :---: |
| ![Course deleted](college-management-system/screenshots/30-course-deleted.png) | ![Assigned course deletion blocked](college-management-system/screenshots/31-assigned-course-delete-protection.png) |

#### Attendance warnings

| Warning — attendance 69% | Detained — attendance 52% |
| :---: | :---: |
| ![Attendance warning](college-management-system/screenshots/32-attendance-warning.png) | ![Attendance detained](college-management-system/screenshots/33-attendance-detained.png) |

---

## 📘 Academic Concepts Demonstrated

This project demonstrates important concepts from Advanced Web Technology.

| Concept | Practical Implementation |
|:---|:---|
| Single Page Application | React Router navigation |
| React Functional Components | Modular component architecture |
| Props | Parent-to-child data communication |
| State Management | React useState |
| Lifecycle Effects | React useEffect |
| Memoization | useMemo and React.memo |
| Form Handling | Controlled forms |
| Validation | Student and course validation |
| Conditional Rendering | Dynamic badges, dialogs, and empty states |
| Lists & Keys | Dynamic student and course collections |
| CRUD Operations | Record creation, reading, updating, and deletion |
| Browser Storage | localStorage persistence |
| Responsive Design | CSS Grid, Flexbox, and media queries |
| Event Handling | Search, filters, buttons, and forms |
| Client-Side Routing | React Router DOM |
| Unit Testing | Node.js Test Runner |
| End-to-End Testing | Playwright |

---

## 🎓 Academic Information

| Field | Details |
|:---|:---|
| **Project Name** | CampusOS |
| **Project Type** | React Single Page Application |
| **University** | GSFC University |
| **Department** | Computer Science & Engineering |
| **Semester** | 5 |
| **Subject** | Advanced Web Technology |
| **Assignment Category** | Fast Learner |
| **Project Topic** | College Course & Student Management System |
| **Frontend** | React.js, JavaScript, HTML5, CSS3 |
| **Build Tool** | Vite |
| **Data Storage** | Browser localStorage |
| **Version Control** | Git & GitHub |

---

## 🔗 Repository

<div align="center">

### Explore the Source Code

**GitHub Repository**

[![GitHub Repository](https://img.shields.io/badge/View%20on%20GitHub-CampusOS-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tirthgandhi/AWT-FAST-LEARNER-)

**Repository Owner**

[![GitHub Profile](https://img.shields.io/badge/GitHub-tirthgandhi-FF8C00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tirthgandhi)

</div>

---

<div align="center">

### 🎓 CampusOS

**A Smarter Way to Organize Academic Information**

Built with React.js, powered by JavaScript, and designed with a modern liquid-glass interface.

**Developed as part of the Advanced Web Technology Fast Learner Assignment**

**GSFC University | Computer Science & Engineering**

<br/>

[⬆ Back to Top](#-campusos)

<br/>

**React · Vite · JavaScript · CSS3 · localStorage**

</div>
