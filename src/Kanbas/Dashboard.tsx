import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as db from "./Database";
import { useSelector, useDispatch } from "react-redux";
import { toggleEnrollment } from "./enrollmentReducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const state = useSelector((state: any) => state);
    // console.log(state);
    const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
    const isFaculty = currentUser?.role === "FACULTY";
    const isStudent = currentUser?.role === "STUDENT";
    const [showAllCourses, setShowAllCourses] = useState(false);
    const isEnrolled = (courseId: any) =>
        enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId);
    const dispatch = useDispatch();
    const handleEnrollmentToggle = (courseId: any) => {
        dispatch(toggleEnrollment({ user: currentUser._id, course: courseId }));
    };
    const navigate = useNavigate();
    const handleCourseNavigation = (courseId: any) => {
        if (isEnrolled(courseId)) {
            navigate(`/Kanbas/Courses/${courseId}/Home`);
        } else {
            alert("Not enrolled in this course");
        }
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {isFaculty && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end" onClick={addNewCourse}>Add</button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse}>Update</button>
                    </h5>
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </>
            )}

            {isStudent && (
                <button
                    className="btn btn-primary float-end"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    Enrollments
                </button>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {courses
                        .filter(course => showAllCourses || isEnrolled(course._id))
                        .map(course => (
                            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div
                                    className="card rounded-3 overflow-hidden wd-dashboard-course-link text-decoration-none text-dark"
                                    onClick={() => handleCourseNavigation(course._id)}
                                >
                                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                        <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>{course.description}</p>
                                        <button className="btn btn-primary">Go</button>
                                        {isFaculty && (
                                            <>
                                                <button
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                        {isStudent && (
                                            <button
                                                className={`btn ${isEnrolled(course._id) ? "btn-danger" : "btn-success"} ms-2 float-end`}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleEnrollmentToggle(course._id);
                                                }}
                                            >
                                                {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useSelector } from "react-redux";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    const isFaculty = currentUser?.role === "FACULTY";
    const isStudent = currentUser?.role === "STUDENT";

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {isFaculty && (<>
                <h5>New Course
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} > Add </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5><br />
                <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <hr />
            </>)}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <img src="/images/reactjs.jpg" width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name} </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>
                                            <button className="btn btn-primary"> Go </button>
                                            {isFaculty && (<button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button>)}
                                            {isFaculty && (<button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button>)}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
} */