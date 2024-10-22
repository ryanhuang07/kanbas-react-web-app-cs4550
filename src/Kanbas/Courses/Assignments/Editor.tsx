import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const foundAssignment = db.assignments.find((assignment) => assignment._id === aid && assignment.course === cid);

    return (
        <div className="container mt-4" id="wd-assignments-editor">
            <h4 className="mb-4">{foundAssignment?.title}</h4>
            <input className="form-control mb-3" id="wd-name" defaultValue={foundAssignment?.title} />

            <label htmlFor="wd-description">Assignment Description</label>
            <textarea className="form-control mb-4" id="wd-description" defaultValue={foundAssignment?.description}></textarea>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points">Points</label>
                    <input className="form-control" id="wd-points" defaultValue={foundAssignment?.points} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-group">Assignment Group</label>
                    <select className="form-control" id="wd-group" defaultValue={foundAssignment?.group}>
                        <option value="Assignments">Assignments</option>
                        <option value="Quizzes">Quizzes</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    <select className="form-control" id="wd-display-grade-as" defaultValue={foundAssignment?.displayGradeAs}>
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                    <select className="form-control" id="wd-submission-type" defaultValue={foundAssignment?.submissionType}>
                        <option value="Online">Online</option>
                        <option value="Paper">Paper</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <label>Online Entry Options:</label><br />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-text-entry"
                        defaultChecked={foundAssignment?.onlineEntryOptions?.textEntry || false} />
                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-website-url"
                        defaultChecked={foundAssignment?.onlineEntryOptions?.websiteUrl || false} />
                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-media-recordings"
                        defaultChecked={foundAssignment?.onlineEntryOptions?.mediaRecordings || false} />
                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-student-annotation"
                        defaultChecked={foundAssignment?.onlineEntryOptions?.studentAnnotation || false} />
                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-file-upload"
                        defaultChecked={foundAssignment?.onlineEntryOptions?.fileUpload || false} />
                    <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-assign-to">Assign To</label>
                    <input className="form-control" type="text" id="wd-assign-to" defaultValue="Everyone" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-due-date">Due Date</label>
                    <input className="form-control" type="datetime-local" id="wd-due-date"
                        defaultValue={foundAssignment?.dueDate.toLocaleString().slice(0, 16)} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-available-from">Available From</label>
                    <input className="form-control" type="datetime-local" id="wd-available-from"
                        defaultValue={foundAssignment?.availableFrom.toLocaleString().slice(0, 16)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-available-until">Until</label>
                    <input className="form-control" type="datetime-local" id="wd-available-until"
                        defaultValue={foundAssignment?.availableUntil.toLocaleString().slice(0, 16)} />
                </div>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2" id="wd-cancel">Cancel</Link>
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger" id="wd-save">Save</Link>
            </div>
        </div>
    );
}
