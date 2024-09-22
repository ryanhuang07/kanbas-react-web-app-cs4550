import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/100/Home">
                        <img src="/images/shower.jpg" width={200} />
                        <div>
                            <h5>
                                CS100 Shower
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intro to Shower
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/150/Home">
                        <img src="/images/hygiene.jpg" width={200} />
                        <div>
                            <h5>
                                CS150 Hygiene
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Advanced Hygiene
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/200/Home">
                        <img src="/images/socializing.jpg" width={200} />
                        <div>
                            <h5>
                                CS200 Socializing
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Conversation
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/210/Home">
                        <img src="/images/love.jpg" width={200} />
                        <div>
                            <h5>
                                CS210 Socializing 2
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Pursuing Love Interests (Advanced)
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/300/Home">
                        <img src="/images/sleep.jpg" width={200} />
                        <div>
                            <h5>
                                CS300 Sleep Schedules
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Waking up Before 12PM
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/400/Home">
                        <img src="/images/pretentious.jpg" width={200} />
                        <div>
                            <h5>
                                CS400 Being Pretentious
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Insufferability
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
