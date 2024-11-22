// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
// const initialState = {
//   assignments: [],
// };
// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     setAssignment: (state, action) => {
//       state.assignments = action.payload;
//     },
//     removeAssignment: (state, action) => {
//       state.assignments = state.assignments.filter(
//         (assignment) => assignment._id !== action.payload
//       );
//     },
//     // addAssignment: (state, { payload: assignment }) => {
//     //   const newAssignment: any = {
//     //     _id: 'A' + new Date().getTime().toString(),
//     //     title: assignment.title,
//     //     course: assignment.course,
//     //     availableFrom: assignment.availableFrom,
//     //     availableUntil: assignment.availableUntil,
//     //     dueDate: assignment.dueDate,
//     //     points: assignment.points,
//     //     description: assignment.description,
//     //     group: assignment.group,
//     //     displayGradeAs: assignment.displayGradeAs,
//     //     submissionType: assignment.submissionType,
//     //     onlineEntryOptions: assignment.onlineEntryOptions,
//     //     assignTo: assignment.assignTo,
//     //   };
//     //   state.assignments = [...state.assignments, newAssignment] as any;
//     // },
//     addAssignment: (state, action) => {
//       state.assignments.push(action.payload);
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a: any) => a._id !== assignmentId);
//     },
//     // updateAssignment: (state, { payload: assignment }) => {
//     //   state.assignments = state.assignments.map((a: any) =>
//     //     a._id === assignment._id ? assignment : a
//     //   ) as any;
//     // },
//     updateAssignment: (state, action) => {
//       const index = state.assignments.findIndex(
//         (assignment) => assignment._id === action.payload._id
//       );
//       if (index >= 0) {
//         state.assignments[index] = action.payload;
//       }
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       ) as any;
//     },

//   },
// });
// export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment } =
//   assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableDate: assignment.availableDate,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
