import { FaRegBell, FaHome, FaChartBar, FaCloudUploadAlt, FaFileImport, FaBullhorn, FaCheck } from 'react-icons/fa';

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="p-3 mx-3">
      <h2>Course Status</h2>

      <div className="d-grid gap-2">
        <div className="d-flex">
          <button className="btn btn-secondary w-50 me-2 d-inline-flex align-items-center justify-content-center">
            Unpublish
          </button>
          <button className="btn btn-success w-50 d-inline-flex align-items-center justify-content-center">
            Publish
          </button>
        </div>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaFileImport className="me-2" />
          Import Existing Content
        </button>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaCloudUploadAlt className="me-2" />
          Import from Commons
        </button>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaHome className="me-2" />
          Choose Home Page
        </button>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaChartBar className="me-2" />
          View Course Stream
        </button>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaBullhorn className="me-2" />
          New Announcement
        </button>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaChartBar className="me-2" />
          New Analytics
        </button>

        <button className="btn btn-secondary d-inline-flex align-items-center">
          <FaRegBell className="me-2" />
          View Course Notifications
        </button>
      </div>
    </div>
  );
}
