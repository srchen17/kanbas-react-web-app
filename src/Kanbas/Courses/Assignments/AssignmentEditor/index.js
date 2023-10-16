import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";

import './index.css';

import {AiFillCheckCircle} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="d-flex flex-column wd-assignment-edit">
            <div className="d-flex row">
                <div className="p-1 float-end wd-button-bar">
                    <div className="p-1 float-end h-100">
                        <button type="button" className="btn btn-secondary">
                            <BsThreeDotsVertical/>
                        </button>
                    </div>
                    <div className="p-1 float-end col wd-no-left h-100">
                        <h6 className="text-success p-2">
                            <AiFillCheckCircle size={17}/> Published</h6>
                    </div>
                </div>
            </div>
            <div className="row">
            <hr/>
                <div>
                    <label for="text-fields-name">Assignment Name</label>
                    <br/>
                    <input className="form-control" type="text" id="text-fields-name" value={assignment.title}/>
                    <br/>
                </div>
                <hr/>
                <div className="row">
                    <div className="p-1 wd-button-bar contaner">
                        <div className="p-1 float-end">
                            <button onClick={handleSave} className="w-10 float-end btn btn-danger">Save</button>
                        </div>
                        <div className="p-1 float-end">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                            <button className="w-10 float-end btn btn-secondary">Cancel</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
   
        </div>
    );
}
export default AssignmentEditor;