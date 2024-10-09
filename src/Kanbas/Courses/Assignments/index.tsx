import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                        <FaSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search..."
                    />
                    <div>
                        <button id="wd-add-assignment-group" className="btn btn-light me-2">+ Group</button>
                        <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
                    </div>
                </div>
            </div>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3" style={{ float: 'right' }} />
                                <div className="ms-3 flex-grow-1">
                                    <a className="wd-assignment-link text-decoration-none fs-5"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A1 - ENV + HTML
                                    </a>
                                    <p className="mb-0 text-muted">
                                        Multiple Modules | <b>Not available until</b> Sept 32 at 12:00AM | <b>Due</b> Dec 32 at 11:59PM | 100 pts
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <LessonControlButtons />
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3" style={{ float: 'right' }} />
                                <div className="ms-3 flex-grow-1">
                                    <a className="wd-assignment-link text-decoration-none fs-5"
                                        href="#/Kanbas/Courses/1234/Assignments/124">
                                        A2 - CSS + BOOTSTRAP
                                    </a>
                                    <p className="mb-0 text-muted">
                                        Multiple Modules | <b>Not available until</b> Sept 32 at 12:00AM | <b>Due</b> Dec 32 at 11:59PM | 100 pts
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <LessonControlButtons />
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3" style={{ float: 'right' }} />
                                <div className="ms-3 flex-grow-1">
                                    <a className="wd-assignment-link text-decoration-none fs-5"
                                        href="#/Kanbas/Courses/1234/Assignments/125">
                                        A3 - JAVASCRIPT + REACT
                                    </a>
                                    <p className="mb-0 text-muted">
                                        Multiple Modules | <b>Not available until</b> Sept 32 at 12:00AM | <b>Due</b> Dec 32 at 11:59PM | 100 pts
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <LessonControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
