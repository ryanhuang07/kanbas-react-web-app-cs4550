import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUserInCourse = async (userId: any, courseId: any) => {
    const { data } = await axios.post(`${ENROLLMENTS_API}/enroll`, { userId, courseId });
    return data;
};

export const unenrollUserFromCourse = async (userId: any, courseId: any) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/unenroll`, { data: { userId, courseId } });
    return response.data;
};

export const fetchEnrollments = async () => {
    return await axios.get(ENROLLMENTS_API);
};
