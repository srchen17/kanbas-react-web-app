import 'bootstrap/dist/css/bootstrap.min.css';
import './mini-kanbas-navigation.css';
import Home from './index.js';
import { useLocation, Link, useParams } from 'react-router-dom';

import { MdAccountCircle } from 'react-icons/md';
import { TfiDashboard } from 'react-icons/tfi';
import { BiSolidBook } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import { FiInbox } from 'react-icons/fi';
import { AiOutlineHistory } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { TfiAngleRight } from 'react-icons/tfi';


function MiniKanbasNav() {
    const { courseId } = useParams();

    return (
        <div>
            <div className="wd-mini-kanbas-nav d-xs-block d-sm-none">
                <div className="w-100">
                    <span className="float-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Home`}>
                    <AiOutlineClose className="text-secondary" size={25}/>
                     </Link>
                    </span>
                </div>
                <div className="row">
                    <ul className="list-group">
                        <Link
                            key={0}
                            to={`/Kanbas/Dashboard`}
                        >
                            <li className="list-group-item">
                                <span className="wd-icon">
                                    <TfiDashboard size={40} />
                                </span>
                                <span className="wd-option">
                                    Dashboard
                                </span>
                            </li>
                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Account`}
                        >
                            <li className="list-group-item list-group-item-secondary">
                                <div className="d-flex flex-col align-items-center justify-content-between">
                                    <span className="wd-icon text-secondary">
                                        <div className="d-flex flex-col align-items-center">
                                            <MdAccountCircle size={40} />
                                            <span className="wd-option">
                                    Account
                                </span>
                                        </div>
                                    </span>
                                    <div className="w-20">
                                    </div>
                                    <span className="">
                                        <TfiAngleRight />
                                    </span>
                                </div>
                            </li>


                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Courses`}
                        >


                            <li className="list-group-item selected list-group-item-secondary">
                                <div className="d-flex flex-col align-items-center justify-content-between">
                                    <span className="wd-icon">
                                        <div className="d-flex flex-col align-items-center">
                                            <BiSolidBook size={40} />
                                            <span className="wd-option">
                                    Courses
                                </span>
                                        </div>
                                    </span>
                                    <div className="w-20">
                                    </div>
                                    <span className="">
                                        <TfiAngleRight />
                                    </span>
                                </div>
                            </li>

                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Calendar`}
                        >
                            <li className="list-group-item">
                                <span className="fa-stack fa-1x ">
                                    <span className="wd-icon">
                                        <BsCalendarCheck size={40} />
                                    </span>
                                </span>
                                <span className="wd-option">
                                    Calendar
                                </span>
                            </li>

                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Inbox`}
                        >

                            <li className="list-group-item">
                                <span className="fa-stack fa-1x ">
                                    <span className="wd-icon">
                                        <FiInbox size={40} />
                                    </span>
                                </span>
                                <span className="wd-option">
                                    Inbox
                                </span>
                            </li>


                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Studio`}
                        >


                            <li className="list-group-item">
                                <span className="fa-stack fa-1x">
                                    <span className="wd-icon">
                                        <MdOndemandVideo size={40} />
                                    </span>
                                </span>
                                <span className="wd-option">
                                    Studio
                                </span>
                            </li>

                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Commons`}
                        >
                            <li className="list-group-item">
                                <span className="fa-stack fa-1x ">
                                    <span className="wd-icon">
                                        <HiOutlineArrowRightOnRectangle size={40} />
                                    </span>
                                </span>
                                <span className="wd-option">
                                    Commons
                                </span>
                            </li>

                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/History`}
                        >
                            <li className="list-group-item  list-group-item-secondary">

                                <div className="d-flex flex-col align-items-center justify-content-between">
                                    <span className="wd-icon">
                                        <div className="d-flex flex-col align-items-center">
                                            <AiOutlineHistory size={40} />
                                            <span className="wd-option">
                                    History
                                </span>
                                        </div>
                                    </span>
                                    <div className="w-20">
                                    </div>
                                    <span className="">
                                        <TfiAngleRight />
                                    </span>
                                </div>
                            </li>
                        </Link>
                        <Link
                            key={0}
                            to={`/Kanbas/Help`}
                        >
                            <li className="list-group-item list-group-item-secondary">
                                <div className="d-flex flex-col align-items-center justify-content-between">
                                    <span className="wd-icon">
                                        <div className="d-flex flex-col align-items-center">
                                            <BiHelpCircle size={40} />
                                            <span className="wd-option">
                                    Help
                                </span>
                                        </div>
                                    </span>
                                    <div className="w-20">
                                    </div>
                                    <span className="">
                                        <TfiAngleRight />
                                    </span>
                                </div>
                            </li>
                        </Link>
                    </ul>
                    <div className="wd-mini-kanbas-nav-bg"></div>
                </div>
            </div>
            <div className="d-none d-sm-block">
                <Home />
            </div>
        </div>
    )
}
export default MiniKanbasNav;