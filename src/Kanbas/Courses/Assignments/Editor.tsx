import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments)
    const foundAssignment = assignments.find((assignment: any) => assignment._id === aid && assignment.course === cid);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const [assignment, setAssignment] = useState({
        title: foundAssignment?.title || "New Assignment",
        description: foundAssignment?.description || "New Assignment Description",
        points: foundAssignment?.points || "",
        dueDate: foundAssignment?.dueDate || "",
        availableFrom: foundAssignment?.availableFrom || "",
        availableUntil: foundAssignment?.availableUntil || "",
    });

    const handleSave = () => {
        if (foundAssignment) {
            dispatch(updateAssignment({ ...assignment, _id: aid, course: cid }));
            console.log("found " + cid + ' ' + aid);
        } else {
            dispatch(addAssignment({ ...assignment, _id: aid, course: cid }));
            console.log(cid + ' ' + aid);
        }
        
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container mt-4" id="wd-assignments-editor">
            <h4 className="mb-4">{foundAssignment ? "Edit Assignment" : "New Assignment"}</h4>

            <input className="form-control mb-3" id="wd-name" 
                value={assignment.title} 
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />

            <label htmlFor="wd-description">Assignment Description</label>
            <textarea className="form-control mb-4" id="wd-description" 
                value={assignment.description}
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points">Points</label>
                    <input className="form-control" id="wd-points"
                        value={assignment.points}
                        onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-due-date">Due Date</label>
                    <input className="form-control" type="datetime-local" id="wd-due-date"
                        value={assignment.dueDate}
                        onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-available-from">Available From</label>
                    <input className="form-control" type="datetime-local" id="wd-available-from"
                        value={assignment.availableFrom}
                        onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-available-until">Available Until</label>
                    <input className="form-control" type="datetime-local" id="wd-available-until"
                        value={assignment.availableUntil}
                        onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button onClick={handleCancel} className="btn btn-secondary me-2" id="wd-cancel">Cancel</button>
                {isFaculty && (<button onClick={handleSave} className="btn btn-danger" id="wd-save">Save</button>)}
            </div>
        </div>
    );
}
