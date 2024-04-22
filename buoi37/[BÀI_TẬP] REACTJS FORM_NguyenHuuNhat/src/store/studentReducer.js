import * as ActionType from "./constants";

const initialState = {
  listStudents: [],
  keyword: "",
  editStudent: null,
  filterStudentEdit: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SUBMIT_STUDENT: {
      const listStudentsClone = [...state.listStudents];
      const newStudent = action.payload;
      const index = listStudentsClone.findIndex(
        (student) => student.maSV === newStudent.maSV
      );
      if (index !== -1) {
        listStudentsClone[index] = newStudent;
      } else {
        listStudentsClone.push(newStudent);
      }

      state.listStudents = listStudentsClone;
      return { ...state };
    }

    case ActionType.DELETE_STUDENT: {
      const { listStudents } = state;
      const studentFilter = listStudents.filter((student) => {
        return student.maSV !== action.payload;
      });
      state.listStudents = studentFilter;

      return { ...state };
    }

    case ActionType.EDIT_STUDENT: {
      state.editStudent = action.payload;
      const listStudentsClone = [...state.listStudents];
      if (state.editStudent) {
        state.filterStudentEdit = listStudentsClone.filter(
          (student) => student.maSV !== action.payload.maSV
        );
      }

      return { ...state };
    }

    case ActionType.SEARCH_STUDENT: {
      state.keyword = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default studentReducer;
