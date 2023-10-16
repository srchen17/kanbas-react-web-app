import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes",
"Grades", "People", "Panopto", "Discussions", "Announcements", "Pages", 
"Files", "Rubrics", "Outcomes", "Collaborations", "Sylabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (

    <div className={`wd-account-nav ${pathname.includes("Home") && "d-none d-sm-block"}`}>
        <div className="list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "selected"}`}>
            {link}
            </Link>
        ))}
        </div>
    </div>

  );
}


export default CourseNavigation;