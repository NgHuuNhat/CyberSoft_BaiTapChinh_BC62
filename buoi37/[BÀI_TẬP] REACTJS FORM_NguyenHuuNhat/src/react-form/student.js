import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteStudent, actEditStudent } from "../store/actions";

class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <>
        <tr>
          <td>{student.maSV}</td>
          <td>{student.name}</td>
          <td>{student.phone}</td>
          <td>{student.email}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.editStudent(student);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteStudent(student.maSV);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (maSV) => {
      dispatch(actDeleteStudent(maSV));
    },

    editStudent: (student) => {
      dispatch(actEditStudent(student));
    },
  };
};

export default connect(null, mapDispatchToProps)(Student);
