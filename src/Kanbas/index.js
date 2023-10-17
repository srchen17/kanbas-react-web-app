
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './style/index.css'; 
import { useLocation } from "react-router-dom";
 

function Kanbas() {
  const { pathname } = useLocation();
    return (
      <div className="d-flex wd-div">
        <div className={`${pathname.includes("Home") && "d-none d-sm-block"}`}>
            <KanbasNavigation />
        </div>
        <div className="wd-div">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
                <Route path="Courses" element={<Navigate to="RS101"/>} />

            </Routes>
        </div>
      </div>
    );
  }
  export default Kanbas;