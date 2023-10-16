import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { AiFillCheckCircle } from 'react-icons/ai';

import './index.css';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="flex-grow-1">
            <div className="wd-flex-row-container">
                <div className="w-100 wd-mr-30px">
                    <div className="wd-flex-row-container w-100">
                        <div className="wd-home col">
                            <div className="row">
                                <div className="p-1 float-end wd-button-bar">
                                    <div className="p-1 float-start w-25">
                                        <input className="form-control" type="text" placeholder="Search for Assignments" aria-label="default input example" />
                                    </div>
                                    <div className="p-1 float-end">
                                        <button type="button" className="btn btn-secondary">
                                            <BsThreeDotsVertical />
                                        </button>
                                    </div>
                                    <div className="p-1 float-end">
                                        <button type="button" className="btn btn-danger float-end">
                                            <AiOutlinePlus />                                            Assignment</button>
                                    </div>
                                    <div className="p-1 float-end">
                                        <button type="button" className="btn btn-secondary float-end">
                                            <AiOutlinePlus />
                                            Group</button>
                                    </div>
                                </div>
                                <div className="d-none d-md-block">
                                    <hr />
                                </div>
                            </div>
                            <div className="row wd-assignments">
                                <ul className="list-group">
                                    <li className="d-flex justify-content-between list-group-item list-group-item-secondary">
                                        <div className="d-flex align-items-center">
                                            <PiDotsSixVerticalBold size={30} />
                                            <AiFillCaretDown/>
                                            <h5 className="float-start p-2">Assignments</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className= "rounded percentage m-2">40% of total</div>
                                            <AiOutlinePlus className="m-2" size={20}/>
                                            <BsThreeDotsVertical className="m-2" size={20}/>
                                        </div>
                                    </li>
                                    {courseAssignments.map((assignment) => (
                                        <Link
                                            key={assignment._id}
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        >
                                            <li className="list-group-item">
                                                <div className="d-flex flex-row">
                                                    <div className="d-flex flex-row">
                                                        <button className="btn btn-light float-start">
                                                            <PiDotsSixVerticalBold size={30} />
                                                        </button>
                                                        <button className="btn btn-light float-start">
                                                            <FiEdit className="text-success" />
                                                        </button>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <a href="edit.html">
                                                            <h5> {assignment.title}</h5></a>
                                                        <p>Week 0 - SETUP - Week starting on Monday September 5th</p>
                                                        <p> Due Sep 18, 2022 at 11:59pm | 100 pts</p>
                                                    </div>
                                                    <div className="d-flex flex-grow-1">
                                                        <div className="d-flex flex-grow-1"></div>
                                                        <button className="btn btn-light float-end">
                                                            <AiFillCheckCircle className="text-success" size={25}/>
                                                        </button>
                                                        <button className="btn btn-light float-end">
                                                            <BsThreeDotsVertical className="float-end" size={25}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assignments;