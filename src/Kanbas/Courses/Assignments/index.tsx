export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <br />
                    <p>
                    Multiple Modules | <b>Not available until</b> Sept 32 at 12:00AM | <b>Due</b> Dec 32 at 11:59PM | 100 pts
                    </p>
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/124">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    <p>
                    Multiple Modules | <b>Not available until</b> Sept 32 at 12:00AM | <b>Due</b> Dec 32 at 11:59PM | 100 pts
                    </p>
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/125">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <br />
                    <p>
                    Multiple Modules | <b>Not available until</b> Sept 32 at 12:00AM | <b>Due</b> Dec 32 at 11:59PM | 100 pts
                    </p>
                </li>
            </ul>
        </div>
    );
}
