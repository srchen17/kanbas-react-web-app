import ModuleList from "../Modules/ModuleList";
import './index.css';

import {FaFileImport} from 'react-icons/fa';
import {HiArrowCircleRight} from 'react-icons/hi';
import {BiTargetLock} from 'react-icons/bi';
import {BsFillBarChartLineFill} from 'react-icons/bs';
import {GrAnnounce} from 'react-icons/gr';
import {BsBell} from 'react-icons/bs';
import {BiSolidBarChartAlt2} from 'react-icons/bi';
import {PiNumberCircleFiveFill} from 'react-icons/pi';
import {AiOutlineClose} from 'react-icons/ai';

function Home () {

  const URL = "https://kanbas-node-server-app-a6-75ig.onrender.com/api/courses"

    return (
    <div className="p-2 d-flex flex-row flex-grow-1">
        <div className="d-flex col d-flex flex-grow-1">
            <ModuleList />
        </div>
        <div className="wd-home-sidebar d-none d-lg-block">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                                <FaFileImport/> Import Existing Content</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                            <HiArrowCircleRight/> Import From Commons</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                            <BiTargetLock/> Choose Home Page</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                            <BsFillBarChartLineFill/> View Course Stream</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                            <GrAnnounce/> New Announcement</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                            <BiSolidBarChartAlt2/> New Analytics</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-secondary">
                            <BsBell/> View Course Notifications</button>
                        </li>
                    </ul>
                    <div className="row">
                            <h6>To Do</h6>
                    </div>
                    <hr/>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col wd-narrow-div">
                                <PiNumberCircleFiveFill className="text-danger" size={20}/>
                                </div>
                                <div className="col">
                                    <a href="#">Grade A1 - ENV + HTML</a>
                                    <p>100 points - Sep 18 at 11:59pm</p>
                                </div>
                                <div className="col wd-narrow-div">
                                    <AiOutlineClose size={10}/>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col wd-narrow-div">
                                    <PiNumberCircleFiveFill className="text-danger" size={20}/>                                </div>
                                <div className="col">
                                    <a href="#">Grade A2 - CSS + BOOTSTRAP</a>
                                    <p>100 points - Oct 2 at 11:59pm</p>
                                </div>
                                <div className="col wd-narrow-div">
                                    <AiOutlineClose size={10}/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Home; 