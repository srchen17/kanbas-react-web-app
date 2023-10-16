import 'bootstrap/dist/css/bootstrap.min.css';
import './mini-course-navigation.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import { FaGlasses } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import db from '../../Database';
import Home from './index.js';

import {AiFillHome} from 'react-icons/ai';
import {PiCirclesThree} from 'react-icons/pi';
import {BsFillPlugFill} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import {BsFillRocketTakeoffFill} from 'react-icons/bs';
import {BsFillPeopleFill} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
import {MdAnnouncement} from 'react-icons/md';
import {AiOutlineFile} from 'react-icons/ai';
import {BsFillClipboardCheckFill} from 'react-icons/bs';
import {FiTarget} from 'react-icons/fi';
import {BsFillGearFill} from 'react-icons/bs';





function MiniCourseNav() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();

    const navlinks = [
        {
          icon: <><span className="wd-icon"><AiFillHome/></span></>,
          name: "Home",
        },
        {
            icon: <><span className="wd-icon"><PiCirclesThree/></span></>,
            name: "Modules",
        },
        {
            icon: <><span className="wd-icon"><BsFillPlugFill/></span></>,
            name: "Piazza",
        },
        {
            icon: <><span className="wd-icon"><BsFillPlugFill/></span></>,
            name: "Zoom",
        },
        {
            icon: <><span className="wd-icon"><BiEdit/></span></>,
            name: "Assignments",
        },
        {
            icon: <><span className="wd-icon"><BsFillRocketTakeoffFill/></span></>,
            name: "Quizzes",
        },
        {
            icon: <><span className="wd-icon"><BiEdit/></span></>,
            name: "Grades",
        },
        {
            icon: <><span className="wd-icon"><BsFillPeopleFill/></span></>,
            name: "People",
        },
        {
            icon: <><span className="wd-icon"><BsFillPlugFill/></span></>,
            name: "Panopto",
        }, 
        {
            icon: <><span className="wd-icon"><AiOutlineMessage/></span></>,
            name: "Discussions",
          }, 
          {
            icon: <><span className="wd-icon"><MdAnnouncement/></span></>,
            name: "Announcements",
          }, 
          {
            icon: <><span className="wd-icon"><AiOutlineFile/></span></>,
            name: "Pages",
          }, 
          {
            icon: <><span className="wd-icon"><AiOutlineFile/></span></>,
            name: "Files",
          }, 
          {
            icon: <><span className="wd-icon"><BsFillClipboardCheckFill/></span></>,
            name: "Rubrics",
          }, 
          {
            icon: <><span className="wd-icon"><FiTarget/></span></>,
            name: "Outcomes",
          }, 
          {
            icon: <><span className="wd-icon"><AiFillHome/></span></>,
            name: "Collaborations",
          }, 
          {
            icon: <><span className="wd-icon"><AiOutlineFile/></span></>,
            name: "Syllabus",
          }, 
          {
            icon: <><span className="wd-icon"><BsFillGearFill/></span></>,
            name: "Settings",
          }, 

      ];

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes",
        "Grades", "People", "Panopto", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Sylabus", "Settings"];

    return (
        <div>
            <div className="d-xs-block d-sm-none">
                <div className="flex-row-cotainer">
                    <div className="wd-simple-nav">
                        <ul className="list-group">
                            {/* {navlinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={`/Kanbas/Courses/${courseId}/${link}`}
                                    className={`${pathname.includes(link) && "selected"}`}>
                                    <li className={`list-group-item ${pathname.includes(link) && "selected"}`}>
                                        <span>
                                            <i className="fa-solid fa-house"></i>
                                        </span>
                                        {link}
                                    </li>
                                </Link>
                            ))} */}
                    {navlinks.map((link, index) => (
                                <Link 
                                    key={index}
                                    to={`/Kanbas/Courses/${courseId}/${link.name}`}
                                    className={`${pathname.includes(link.name) && "selected"}`}
                                >
                                    <li className={`list-group-item ${pathname.includes(link) && "selected"}`}>
                                        <span>
                                        {link.icon}
                                        </span>
                                        {link.name}
                                    </li>
                                </Link>           
                    ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-xs-none d-sm-block">
                <Home />
            </div>
        </div>



    )
}

export default MiniCourseNav;