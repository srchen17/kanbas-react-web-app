import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import PublishAll from "./PublishAll";
import { useSelector, useDispatch } from "react-redux";
import {
addModule,
deleteModule,
updateModule,
setModule,
} from "./modulesReducer";
import {Link} from "react-router-dom";


import './index.css';

function ModuleList({ courses }) {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const course = courses.find((course) => course._id === courseId);


  return (
    
    <div className="wd-home">
      <h3>{course.name}</h3>
      <hr/>
      <div className="d-flex flex-column">
        <div className="row">
          <div className="p-1 float-end wd-button-bar d-none d-sm-block">
            <div className="p-1 float-end">
              <button type="button" className="btn btn-secondary">
                <BsThreeDotsVertical/>
              </button>
            </div>
            <div className="p-1 float-end">
              <button type="button" className="btn btn-danger float-end">
                <AiOutlinePlus size={15}/>
                 Module</button>
            </div>
            <div className="p-1 float-end">
              <PublishAll/>
            </div>
            <div className="p-1 float-end">
              <button type="button" className="btn btn-secondary">View Progress</button>
            </div>
            <div className="p-1 float-end">
              <button type="button" className="btn btn-secondary">Collapse All</button>
            </div>
          </div>
          <div className="d-none d-sm-block">
            <hr />
          </div>
        </div>
        <div className="row">
        
          <ul className="list-group">
            <div className="p-3">
            <Link className="text-light" to={`/Kanbas/Courses/${courseId}/Modules/ModuleEditor`}>
              <button className="btn-add m-3">
                  <AiOutlinePlus/> Add
              </button>
              </Link>
            </div>
            {
              modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                  <ul>
                     <li key={index} className="list-group-item list-group-item-secondary">
                    <h5>{module.name}</h5>
                    <p>{module.description}</p>
                    <Link className="text-dark " to={`/Kanbas/Courses/${courseId}/Modules/ModuleEditor`}>
                    <button class="btn btn-primary"
                          onClick={() => dispatch(setModule(module))}>  
                        Edit
                      </button>
                      </Link>
                      <button class="btn btn-primary text-dark"
                        onClick={() => dispatch(deleteModule(module._id))}>    
                       Delete
                      </button>
                  </li>
                  </ul>
                ))
            }
          </ul>
        </div>
      </div>

    </div>

  );
}
export default ModuleList;