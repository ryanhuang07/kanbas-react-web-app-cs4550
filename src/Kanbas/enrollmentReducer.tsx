import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from './Database';

const initialState = {
    enrollments: enrollments,
}
const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        toggleEnrollment: (state, { payload: { user, course } }) => {
            const existingEnrollment = state.enrollments.find(
                (e: any) => e.user === user && e.course === course
            );

            if (existingEnrollment) {
                state.enrollments = state.enrollments.filter(
                    (e: any) => e._id !== existingEnrollment._id
                );
                console.log("meow");
            } else {
                const newEnrollment = {
                    _id: new Date().getTime().toString(),
                    user: user,
                    course: course,
                };
                state.enrollments = [...state.enrollments, newEnrollment];
                console.log("woof");
            }
        },
    }
});

export const { toggleEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
