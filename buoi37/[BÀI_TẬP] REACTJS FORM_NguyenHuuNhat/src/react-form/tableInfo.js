import React, { Component } from "react";
import Student from "./student";
import { connect } from "react-redux";

class TableInfo extends Component {
    renderStudents = () => {
        const {students, keyword} = this.props;

        const studentsFilter = students.filter((student)=>{
            return student.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
        return studentsFilter.map((student)=> <Student key={student.maSV} student={student}/>)
    }

  render() {
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderStudents()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.studentReducer.listStudents,
    keyword: state.studentReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(TableInfo);
