import { React } from "react";
import { Link } from "react-router-dom";

import { FaRegEdit } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';


function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {
    return (
        <div className="wd-div p-4">
           
            <div>
                <h1 className="wd-light-font">Dashboard</h1>
                <hr />
                <div className="wd-dashboard">
                    <a href="http://localhost:3000/#/Kanbas/signin">
                        <h2>Sign In</h2>
                    </a>
                    <a href="http://localhost:3000/#/Kanbas/signup">
                        <h2>Sign Up</h2>
                    </a>
                    <h3>Published Courses (24)</h3>
                    <hr />
                    <Link className="text-light" to={`/Kanbas/Dashboard/DashboardEditor`}>
                        <button className="btn btn-primary"  >
                            <AiOutlinePlus /> Add
                        </button>
                    </Link>
                    <div className="flex-wrap">
                        <div className="flex-wrap d-flex flex-row ml-auto">
                            {courses.map((course) => (
                                <div className="col">
                                    <div className="card course-card">
                                        <img className="card-img-top" src="../../images/steel-blue.png" alt="Card image cap" />
                                        <div className="card-img-overlay text-light">
                                            <div className="float-end">
                                                <BsThreeDotsVertical size={25} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                                <div>
                                                    <h5 className="card-title">{course.number} {course.name}</h5>
                                                    <h6 className="card-text">{course.number}</h6>
                                                    <p className="card-text tiny-text">Semester: {course.startDate} to {course.endDate}</p>
                                                    <button className="btn btn-light"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}>
                                                        <Link to={`/Kanbas/Dashboard/DashboardEditor`}>
                                                            <FaRegEdit /> Edit
                                                        </Link>
                                                    </button>
                                                    <button className="btn btn-light"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(course._id);
                                                        }}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Dashboard;