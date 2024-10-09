import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Fall 2024<br />
                                        Year: 2024<br />
                                        Section: 001
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/100/Home">
                                <img src="/images/shower.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS100 Shower
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intro to Shower
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Spring 2024<br />
                                        Year: 2024<br />
                                        Section: 002
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/150/Home">
                                <img src="/images/hygiene.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS150 Hygiene
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Advanced Hygiene
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Summer 2024<br />
                                        Year: 2024<br />
                                        Section: 003
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/200/Home">
                                <img src="/images/socializing.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS200 Socializing
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fundamentals of Conversation
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Fall 2023<br />
                                        Year: 2023<br />
                                        Section: 004
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/210/Home">
                                <img src="/images/love.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS210 Socializing 2
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Pursuing Love Interests (Advanced)
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Winter 2023<br />
                                        Year: 2023<br />
                                        Section: 005
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/300/Home">
                                <img src="/images/sleep.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS300 Sleep Schedules
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Waking up Before 12PM
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Spring 2023<br />
                                        Year: 2023<br />
                                        Section: 006
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/400/Home">
                                <img src="/images/pretentious.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS400 Being Pretentious
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fundamentals of Insufferability
                                    </p>
                                    <p className="wd-dashboard-course-meta">
                                        Term: Summer 2023<br />
                                        Year: 2023<br />
                                        Section: 007
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
