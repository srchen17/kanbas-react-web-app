
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './style/index.css'; 
import { useLocation } from "react-router-dom";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import {Provider} from "react-redux";
import DashboardEditor from "./Dashboard/DashboardEditor/dashboard-edit";


function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState(
      {
          name: "New Course", number: "New Number",
          startDate: "2023-09-10", endDate: "2023-12-15"
      }
  );

  const updateCourse = () => {
    setCourses(
        courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        })
    );
};

const addNewCourse = () => {
    setCourses([...courses,
    {
        ...course,
        _id: new Date().getTime().toString()
    }]);
};

const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
}

  const { pathname } = useLocation();
    return (
      <Provider store={store}>
      <div className="d-flex wd-div">
        <div className={`${pathname.includes("Home") && "d-none d-sm-block"}`}>
            <KanbasNavigation />
        </div>
        <div className="wd-div">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                  <Route
                  path="Dashboard/DashboardEditor"
                  element={<DashboardEditor 
                  courses = {courses}
                  course = {course}
                  setCourse = {setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                      />}
                  />
                <Route path="Dashboard" element={<Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />} />
                <Route path="Courses/:courseId/*" element={<Courses 
                  courses={courses}/>} />
                <Route path="Courses" element={<Navigate to={courses[0]._id}/>} />
            </Routes>
        </div>
      </div>
      </Provider>
    );
  }
  export default Kanbas;