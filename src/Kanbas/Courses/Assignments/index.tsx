import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments)
    const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    {isFaculty && (<div>
                        <button id="wd-add-assignment-group" className="btn btn-light me-2">+ Group</button>
                        <button id="wd-add-assignment" className="btn btn-danger"
                            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}>+ Assignment</button>
                    </div>)}
                </div>
            </div>

            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        {/* <ModuleControlButtons /> */}
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {filteredAssignments.map((assignment: any) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center flex-grow-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <div className="ms-3 flex-grow-1">
                                        <a className="wd-assignment-link text-decoration-none fs-5"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                        <p className="mb-0 text-muted">
                                            <b>Date Available:</b> {new Date(assignment.availableFrom).toLocaleString()} |
                                            <b>Due:</b> {new Date(assignment.dueDate).toLocaleString()} |
                                            <b>Points:</b> {assignment.points}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <AssignmentControlButtons
                                        assignmentId={assignment._id}
                                        deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
