import 'bootstrap/dist/css/bootstrap.min.css';
import './style/kanbas-navigation.css'; 
import { Link, useLocation } from "react-router-dom";

import {MdAccountCircle} from 'react-icons/md';
import {TfiDashboard} from 'react-icons/tfi';
import {BiSolidBook} from 'react-icons/bi';
import {BsCalendarCheck} from 'react-icons/bs';
import {FiInbox} from 'react-icons/fi';
import {AiOutlineHistory} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md';
import {HiOutlineArrowRightOnRectangle} from 'react-icons/hi2';
import {BiHelpCircle} from 'react-icons/bi';



function KanbasNavigation () {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];
    const { pathname } = useLocation(); 

    const navlinks = [
        {
          icon: <><span className="wd-icon text-secondary"><MdAccountCircle size={40}/></span></>,
          name: "Account",
        },
        {
          icon: <><span className="wd-icon"><TfiDashboard size={40}/></span></>,
          name: "Dashboard",
        },
        {
          icon: <><span className="wd-icon"><BiSolidBook size={40}/></span></>,
          name: "Courses",
        },
        {
          icon: <><span className="wd-icon"><BsCalendarCheck size={40}/></span></>,
          name: "Calendar",
        },
        {
          icon: <><span className="wd-icon"><FiInbox size={40}/></span></>,
          name: "Inbox",
        },
        {
          icon: <><span className="wd-icon"><AiOutlineHistory size={40}/></span></>,
          name: "History",
        },
        {
          icon: <><span className="wd-icon"><MdOndemandVideo size={40}/></span></>,
          name: "Studio",
        },
        {
          icon: <><span className="wd-icon"><HiOutlineArrowRightOnRectangle size={40}/></span></>,
          name: "Commons",
        },
        {
          icon: <><span className="wd-icon"><BiHelpCircle size={40}/></span></>,
          name: "Help",
        }, 
      ];

    return (
            <div className="wd-kanbas-nav">
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src="../../images/neu-motto-icon.png"
                        height="50px"/>
                    </li>
                    {navlinks.map((link, index) => (
                            <li className=
                            {`list-group-item ${pathname.includes(link.name) && "selected"}`}
                            > 
                                <Link 
                                    key={index}
                                    to={`/Kanbas/${link.name}`}
                                >
                                    <div>
                                        {link.icon}
                                        <br/>
                                        {link.name}
                                    </div>
                                </Link>           
                            </li>
                    ))}
                </ul>
                <div className="wd-kanbas-nav-bg"></div>
            </div>
    )
}

export default KanbasNavigation;