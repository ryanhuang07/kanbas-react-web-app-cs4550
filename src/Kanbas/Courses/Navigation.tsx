import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const isActive = (link: string) => location.pathname === `/Kanbas/Courses/${cid}/${link}`;
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${isActive(link) ? "active" : "text-danger"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
