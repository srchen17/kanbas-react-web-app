import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaGlasses } from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import{AiOutlineCaretDown} from 'react-icons/ai';
import MiniKanbasNav from "./Home/MiniKanbasNav";
import { Link } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai';
import MiniCourseNav from "./Home/MiniCourseNav";
import ModuleEditor from "./Modules/ModuleEditor/ModuleEditor";
import { useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './courses.css';


function Courses( ) {
  const { courseId } = useParams();
  // const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();


  const API_BASE = process.env.REACT_APP_API_BASE;
  // const API_BASE = "https://kanbas-node-server-app-t0u9.onrender.com/"
  const URL = "https://kanbas-node-server-app-a6-75ig.onrender.com/api/courses";

  // const URL = `${API_BASE}/courses`;
  // const URL = "https://kanbas-node-server-app-t0u9.onrender.com/api/courses"

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="wd-courses">
      <nav className={`wd-breadcrumb ${pathname.includes("Home") && "d-none d-sm-block"}`}
        aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <span className="wd-icon p-3">
              <AiOutlineMenu size={30} />
            </span>
            <a href="#">
              <i className="fa-solid fa-bars text-danger wd-menu"></i>
            </a>
            <a href="#">{course.number} {course.name}</a>
          </li>
          <li className="breadcrumb-item active text-dark" aria-current="page">
            <Routes>
              <Route path="Home" element={"Home"} />
              <Route path="Modules" element={"Modules"} />
              <Route path="Assignments" element={"Assignments"} />
              <Route path="Assignments/:assignmentId" element={
                "Assignments  >  Assignment Editor"} />
              <Route path="Grades" element={"Grades"} />
            </Routes>
          </li>
          <div className="flex-grow-1">
          </div>
          <span className="wd-icon wd-margin-tl">
            <button className="btn btn-secondary">
              <FaGlasses className="p-1" size={25} /> Student View
            </button>
          </span>
        </ol>
      </nav>
      
      <Routes>
        <Route path="Home" element={
          <div className="wd-simple-header d-flex justify-content-between d-xs-block d-sm-none">
            <div className="d-flex justify-content-between p-4">
           
            <a href="white-kanbas-navigation.html">
              <Link to={`/Kanbas/Courses/${courseId}/Home/MiniKanbasNav`}>
                <FaBars size={28}/>
              </Link>
            </a>
            </div>
            <div class="d-flex p-3">
            <Link to={`/Kanbas/Courses/${courseId}/Home`}>
            <a href="">{course.number} {course.name}
                <br />
                Modules
              </a>
            </Link>
              
            </div>
        
            <div className="d-flex justify-content-between p-4">
              <div className="wd-margin-right">
              <FaGlasses/>
              </div>
              <a href="mini-course-navigation.html">
              <Link to={`/Kanbas/Courses/${courseId}/Home/MiniCourseNav`}>
                <AiOutlineCaretDown/>
              </Link>
              </a>
            </div>
          </div>
        } />
        <Route path="Home/MiniCourseNav" element={
          <div className="wd-simple-header d-flex justify-content-between d-xs-block d-sm-none">
            <div className="d-flex justify-content-between p-4">
            <a href="white-kanbas-navigation.html">
              <Link to={`/Kanbas/Courses/${courseId}/Home/MiniKanbasNav`}>
                <FaBars size={28}/>
              </Link>
            </a>
            </div>
            <div class="d-flex p-3">
              <Link to={`/Kanbas/Courses/${courseId}/Home`}>
              <a href="">{course.number} {course.name}
                  <br />
                  Modules
                </a>
              </Link>
            </div>
            <div className="d-flex justify-content-between p-4">
              <div className="wd-margin-right">
              <FaGlasses/>
              </div>
              <a href="mini-course-navigation.html">
              <Link to={`/Kanbas/Courses/${courseId}/Home`}>
                <AiOutlineClose/>
              </Link>
              </a>
            </div>
          </div>
        } />
      </Routes>
      
      <div className={`${pathname.includes("Home") && "d-none d-sm-block"}`}>
        <hr />
      </div>
     

      <div className="d-flex flex-row">
        <CourseNavigation />
        <div className="p-4 d-flex flex-grow-1">
          <div
            className="overflow-y-scroll bottom-0 end-0 d-flex flex-grow-1"
            style={{
              left: "320px",
              top: "50px",
            }}
          >
           
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Home/MiniKanbasNav" element={<MiniKanbasNav/>} />
              <Route path="Home/MiniCourseNav" element={<MiniCourseNav/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Modules/ModuleEditor" element={<ModuleEditor/>} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Courses;

