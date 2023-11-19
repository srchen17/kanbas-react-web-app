import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "../modulesReducer";
import * as client from '../client';

import './index.css';

function ModuleEditor() {
    const { courseId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        client.findModulesForCourse(courseId)
        .then((modules) =>
            dispatch(setModules(modules))
        );
    }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  //const course = courses.find((course) => course._id === courseId);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  
    return (
        <div className="flex-grow-1">
            <div className="d-flex flex-column wd-module-edit m-5">
                <h3>Module Editor</h3>
                <hr />
                <label>Module Name</label>
                <input value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <br />
                <label>Module Description</label>
                <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
                <hr />
                <div className="">
                    <div className="float-end">
                        <Link className="text-light" to={`/Kanbas/Courses/${courseId}/Modules`}>
                            <button className="btn btn-danger" onClick={handleAddModule} >
                                Add
                            </button>
                        </Link>
                    </div>
                    <div className="float-end">
                        <Link className="text-light" to={`/Kanbas/Courses/${courseId}/Modules`}>
                            <button className="btn btn-danger" onClick={handleUpdateModule} >
                                Update
                            </button>
                        </Link>
                    </div>
                    <div className="float-end">
                        <Link className="text-dark" to={`/Kanbas/Courses/${courseId}/Modules`}>
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
export default ModuleEditor;