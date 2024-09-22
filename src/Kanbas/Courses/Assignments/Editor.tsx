export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group"> Assignment Group </label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as"> Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                        </select>
                        <br />
                        <br />
                        <label>Online Entry Options:</label><br />

                        <input type="checkbox" name="check-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to"> Assign </label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label><br />
                        <input type="text" id="wd-assign-to" value="Everyone"></input><br />
                        <br />
                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date" id="wd-due-date"></input><br />
                        <label htmlFor="wd-available-from">Available from</label><br />
                        <input type="date" id="wd-available-from"></input><br />
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input type="date" id="wd-available-until"></input>
                    </td>
                </tr>
            </table>
            <hr/>
            <div style={{textAlign: 'right'}}>
                <button id="wd-cancel" type="button">Cancel</button><button id="wd-save" type="button">Save</button>
            </div>
        </div>
    );
}
