import * as ActionType from "./constants";

export const actSearch = (keyword) => {
  return {
    type: ActionType.SEARCH_STUDENT,
    payload: keyword,
  };
};

export const actSubmitStudent = (student) => {
  return {
    type: ActionType.SUBMIT_STUDENT,
    payload: student,
  };
};

export const actDeleteStudent = (maSV) => {
  return {
    type: ActionType.DELETE_STUDENT,
    payload: maSV,
  };
};

export const actEditStudent = (student) => {
  return {
    type: ActionType.EDIT_STUDENT,
    payload: student,
  };
};
