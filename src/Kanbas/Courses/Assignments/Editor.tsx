import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
    return (
        <div className="container mt-4" id="wd-assignments-editor">
            <h4 className="mb-4">Assignment Name</h4>
            <input className="form-control mb-3" id="wd-name" value="A1 - ENV + HTML" />
        
            <label htmlFor="wd-description">Assignment Description</label>
            <textarea className="form-control mb-4" id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
            </textarea>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points">Points</label>
                    <input className="form-control" id="wd-points" value={100} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-group">Assignment Group</label>
                    <select className="form-control" id="wd-group">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    <select className="form-control" id="wd-display-grade-as">
                        <option selected value="Percentage">Percentage</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                    <select className="form-control" id="wd-submission-type">
                        <option selected value="Online">Online</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <label>Online Entry Options:</label><br />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-website-url" />
                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                    <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-assign-to">Assign To</label>
                    <input className="form-control" type="text" id="wd-assign-to" value="Everyone" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-due-date">Due Date</label>
                    <input className="form-control" type="date" id="wd-due-date" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-available-from">Available From</label>
                    <input className="form-control" type="date" id="wd-available-from" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-available-until">Until</label>
                    <input className="form-control" type="date" id="wd-available-until" />
                </div>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2" id="wd-cancel" type="button">Cancel</button>
                <button className="btn btn-danger" id="wd-save" type="button">Save</button>
            </div>
        </div>
    );
}
