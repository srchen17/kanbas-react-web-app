import React from "react";
import { Link } from "react-router-dom";

import './index.css';


function DashboardEditor
    ({ courses, course, setCourse, addNewCourse,
        updateCourse }) {

    return (
        <div>
            <div className="d-flex flex-column wd-dashboard-edit m-5">
                <h3>Course Editor</h3>
                <hr />
                <label>Course Name</label>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <br />
                <label>Course Number</label>
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <br />
                <label>Start Date</label>
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <br />
                <label>End Date</label>
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <hr />
                <div className="">
                    <div className="float-end">
                        <Link className="text-light" to={`/Kanbas/Dashboard`}>
                            <button className="btn btn-danger" onClick={addNewCourse} >
                                Add
                            </button>
                        </Link>
                    </div>
                    <div className="float-end">
                        <Link className="text-light" to={`/Kanbas/Dashboard`}>
                            <button className="btn btn-danger" onClick={
                                    updateCourse}
                                 >
                                Update
                            </button>
                        </Link>
                    </div>
                    <div className="float-end">
                        <Link className="text-dark" to={`/Kanbas/Dashboard`}>
                            <button className="btn btn-secondary">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}
export default DashboardEditor;