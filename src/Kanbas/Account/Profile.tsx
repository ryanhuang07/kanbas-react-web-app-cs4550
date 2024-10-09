import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: '400px' }}>
      <h3>Profile</h3>

      <input
        id="wd-username"
        value="alice"
        placeholder="Username"
        className="form-control mb-2"
      />

      <input
        id="wd-password"
        value="123"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
      />

      <input
        id="wd-firstname"
        value="Alice"
        placeholder="First Name"
        className="form-control mb-2"
      />

      <input
        id="wd-lastname"
        value="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"
      />

      <input
        id="wd-dob"
        value="2000-01-01"
        type="date"
        className="form-control mb-2"
      />

      <input
        id="wd-email"
        value="alice@wonderland.com"
        type="email"
        className="form-control mb-2"
      />

      <select
        id="wd-role"
        className="form-control mb-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link to="/Kanbas/Account/Signin">
        <button className="btn btn-danger w-100">Signout</button>
      </Link>
    </div>
  );
}
