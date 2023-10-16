import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import PublishAll from "./PublishAll";

import './index.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="wd-home">
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
              {/* <div className="dropdown">
                <a className="btn dropdown-toggle btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <AiOutlineCheckCircle className="text-success" size={15}/>  Publish All
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Publish All</a></li>
                </ul>
              </div> */}
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
            {
              modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                  <ul>
                     <li key={index} className="list-group-item list-group-item-secondary">
                    <h5>{module.name}</h5>
                    <p>{module.description}</p>
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