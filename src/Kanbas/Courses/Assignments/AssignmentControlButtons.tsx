import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons(
    { assignmentId, deleteAssignment }:
        { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {

    const handleDeleteClick = () => {
        if (window.confirm("Are you sure you want to delete this assignment?")) {
            deleteAssignment(assignmentId);
        }
    };
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div className="float-end">
            <GreenCheckmark />
            {isFaculty && (<FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />)}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
