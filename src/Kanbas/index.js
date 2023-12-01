
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './style/index.css'; 
import { useLocation } from "react-router-dom";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import {Provider} from "react-redux";
import DashboardEditor from "./Dashboard/DashboardEditor/dashboard-edit";
import axios from "axios";
import Signin from "../users/signin";
import Account from "../users/account.js"
import UserTable from "../users/table.js";
import Signup from "../users/signup.js";
 <Route path="/account/:id" element={<Account />} />

// dotenv




function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL = `${API_BASE}/courses`;
  //const URL = "https://kanbas-node-server-app-t0u9.onrender.com/api/courses"
  console.log(process.env.REACT_APP_API_BASE);

  // const URL = "http://localhost:4000.com/api/courses"
  const URL = "https://kanbas-node-server-app-a6-75ig.onrender.com/api/courses";
  const findAllCourses = async () => {
  const response = await axios.get(URL);
  setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState(
      {
          name: "New Course", number: "New Number",
          startDate: "2023-09-10", endDate: "2023-12-15"
      }
  );
  

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses(currentCourses => [response.data, ...currentCourses]);
    setCourse({ name: "" });
    };

    const deleteCourse = async (courseId) => {
      const response = await axios.delete(
        `${URL}/${courseId}`
      );
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
      const response = await axios.put(
        `${URL}/${course._id}`,
        course
      );
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
      setCourse({ name: "" });
    };
  


  useEffect(() => {
    findAllCourses();
  }, []);




//   const updateCourse = () => {
//     setCourses(
//         courses.map((c) => {
//             if (c._id === course._id) {
//                 return course;
//             } else {
//                 return c;
//             }
//         })
//     );
// };

// const addNewCourse = () => {
//     setCourses([...courses,
//     {
//         ...course,
//         _id: new Date().getTime().toString()
//     }]);
// };

// const deleteCourse = (courseId) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
// }


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
                {/* <Route path="Account" element={<h1>Account</h1>} /> */}
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
                <Route path="Courses" element={<Navigate to="RS102"/>} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account/:id" element={<Account />} />
                <Route path="/admin/users" element={<UserTable />} />
            </Routes>
        </div>
      </div>
      </Provider>
    );
  }
  export default Kanbas;