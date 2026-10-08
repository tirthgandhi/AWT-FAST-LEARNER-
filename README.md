
# 🎓 College Course & Student Management System

A responsive **College Course & Student Management System** developed using **React.js**. This project is part of the **Advanced Web Technology (AWT)** practical assignment for Fast Learners at **GSFC University**.

The application is designed to manage student records, courses, attendance status, and academic information through a simple and interactive dashboard.

## 📌 Project Overview

The College Course & Student Management System is a React-based web application that helps organize student and course information in one place.

Users can add, edit, delete, search, and filter student records, manage courses, view student details, and monitor attendance eligibility.

The project demonstrates important React concepts such as reusable components, React Router, props, state management, conditional rendering, event handling, and performance optimization.

## ✨ Key Features

### 📊 1. Dashboard
- Display total students
- Display total courses
- Display active courses
- Calculate average attendance
- Display recently added students
- Show statistics using reusable React components

### 👨‍🎓 2. Student Management
- Add new students
- Edit student information
- Delete student records
- Search students
- Filter students by course
- Display student records in a table
- View individual student details

**Student Information:**
- Student Name
- Enrollment Number
- Email Address
- Course
- Semester
- Gender
- Attendance Percentage

### 📚 3. Course Management
- Add new courses
- Delete existing courses
- Search courses
- Filter courses
- View course details
- Display available courses

### 📋 4. Student Details
- View individual student information
- Display enrolled course
- View semester and attendance
- Navigate using dynamic routes

### ⚠️ 5. Attendance Management

The system displays attendance status using conditional rendering.

| Attendance | Status |
|------------|--------|
| 75% or above | ✅ Eligible |
| 60% to below 75% | ⚠️ Warning |
| Below 60% | ❌ Detained |

### ⚡ 6. Performance Optimization
- Use `React.memo()` for reusable components
- Use `useMemo()` for optimized calculations
- Reduce unnecessary component rendering
- Improve filtering and searching performance

### 🎨 7. Responsive User Interface
- Responsive layout
- Navigation bar
- Dashboard cards
- Student and course tables
- Interactive forms
- Action buttons
- Alerts and status indicators

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend development |
| JavaScript (ES6+) | Application logic |
| JSX | UI development |
| React Router | Page navigation |
| HTML5 | Page structure |
| CSS3 / SCSS | Styling |
| Vite | Development and build tool |

## 📂 Project Structure

```text
college-management-system/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentForm.jsx
│   │   ├── CourseCard.jsx
│   │   └── DashboardCard.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Students.jsx
│   │   ├── StudentDetails.jsx
│   │   ├── Courses.jsx
│   │   └── CourseDetails.jsx
│   │
│   ├── styles/
│   │   └── style.scss
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔗 Application Routes

The application uses React Router for navigation.

| Route | Description |
|-------|-------------|
| `/dashboard` | Dashboard overview |
| `/students` | Student management |
| `/students/:id` | Individual student details |
| `/courses` | Course management |
| `/courses/:id` | Individual course details |

## 🚀 Installation and Setup

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- VS Code (recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/college-management-system.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Open the Project

```bash
cd college-management-system
```

### Step 3: Install Dependencies

```bash
npm install
```

If React Router and Sass are not already installed, run:

```bash
npm install react-router-dom
npm install -D sass
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open in Browser

Open the local URL displayed in your terminal, typically:

```text
http://localhost:5173/
```

## 🧩 React Concepts Implemented

This project demonstrates the following React concepts:

1. **Components** – Creating reusable UI elements.
2. **JSX** – Writing HTML-like syntax inside JavaScript.
3. **Props** – Passing data between components.
4. **State** – Managing application data.
5. **Events** – Handling button clicks and form submissions.
6. **Forms** – Collecting and validating user input.
7. **Arrays** – Managing students and courses.
8. **Lists** – Displaying records dynamically.
9. **Conditional Rendering** – Displaying attendance status.
10. **React Router** – Navigating between pages.
11. **React.memo()** – Avoiding unnecessary component rendering.
12. **useMemo()** – Optimizing calculations and filtering.

## 🎯 Project Objectives

- Develop a React-based college management application.
- Understand reusable component architecture.
- Implement student and course management functionality.
- Apply React Router for navigation.
- Use forms, events, props, and arrays.
- Implement conditional rendering for attendance.
- Improve performance using React memoization.
- Create a responsive and user-friendly interface.

## 🔮 Future Enhancements

The following features can be considered for future development:

- Backend API integration
- Database connectivity
- Authentication and authorization
- Faculty management
- Attendance reports
- Student performance analytics

These are optional future improvements and are not part of the current assignment requirements.

## 📚 Academic Information

| Field | Details |
|-------|---------|
| University | GSFC University |
| School | School of Information Communication & Technology |
| Department | Computer Science and Engineering |
| Semester | 5 |
| Subject | Advanced Web Technology (AWT) |
| Assignment Category | Fast Learner |
| Project | College Course & Student Management System |

## 📄 License

This project is developed for educational and academic purposes.

---

**Developed as part of the Advanced Web Technology Practical Assignment at GSFC University.**
