import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item border border-0 ${isActive("/Kanbas/Account/Signin") ? "active" : "text-danger"}`}>
        Signin
      </Link>
      <Link to="/Kanbas/Account/Signup"
        id="wd-account-signup-link"
        className={`list-group-item border border-0 ${isActive("/Kanbas/Account/Signup") ? "active" : "text-danger"}`}>
        Signup
      </Link>
      <Link to="/Kanbas/Account/Profile"
        id="wd-account-profile-link"
        className={`list-group-item border border-0 ${isActive("/Kanbas/Account/Profile") ? "active" : "text-danger"}`}>
        Profile
      </Link>
    </div>
  );
}
