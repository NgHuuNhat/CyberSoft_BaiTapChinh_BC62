import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmitStudent, actEditStudent } from "../store/actions";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        maSV: "",
        name: "",
        phone: "",
        email: "",
      },

      errors: {
        maSV: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  }

  handleOnChange = (event) => {
    const { students, editStudent, filterStudentEdit } = this.props;
    const { name, value, pattern } = event.target;
    const valuesClone = { ...this.state.values, [name]: value };
    let errorsClone = { ...this.state.errors };
    if (!value.trim()) {
      // kiểm tra rỗng
      errorsClone[name] = "(*) Vui lòng nhập thông tin";
    } else {
      if (pattern) {
        // kiểm tra regex
        const regex = new RegExp(pattern);
        const valid = regex.test(value);
        if (!valid) {
          switch (name) {
            case "maSV":
              errorsClone[name] = "(*) Mã SV phải là số";
              break;
            case "name":
              errorsClone[name] = "(*) Họ tên phải là chữ";
              break;
            case "phone":
              errorsClone[name] = "(*) Số điện thoại không đúng định dạng";
              break;
            case "email":
              errorsClone[name] = "(*) Email không đúng định dạng";
              break;
            default:
              break;
          }
        } else if (!editStudent) {
          // kiểm tra thông tin bị trùng hay không
          const indexMaSV = students.findIndex(
            (student) => student.maSV === valuesClone.maSV
          );
          const indexPhone = students.findIndex(
            (student) => student.phone === valuesClone.phone
          );
          const indexEmail = students.findIndex(
            (student) => student.email === valuesClone.email
          );
          if (indexMaSV !== -1) {
            errorsClone.maSV = "(*) Mã SV đã tồn tại";
            errorsClone.email = "";
            errorsClone.phone = "";
            if (indexPhone !== -1) {
              errorsClone.phone = "(*) Số điện thoại đã tổn tại";
            }
            if (indexEmail !== -1) {
              errorsClone.email = "(*) Email đã tổn tại";
            }
          } else if (indexPhone !== -1) {
            errorsClone.maSV = "";
            errorsClone.email = "";
            errorsClone.phone = "(*) Số điện thoại đã tổn tại";
            if (indexMaSV !== -1) {
              errorsClone.maSV = "(*) Mã SV đã tồn tại";
            }
            if (indexEmail !== -1) {
              errorsClone.email = "(*) Email đã tổn tại";
            }
          } else if (indexEmail !== -1) {
            errorsClone.maSV = "";
            errorsClone.phone = "";
            errorsClone.email = "(*) Email đã tổn tại";
            if (indexPhone !== -1) {
              errorsClone.phone = "(*) Số điện thoại đã tổn tại";
            }
            if (indexMaSV !== -1) {
              errorsClone.maSV = "(*) Mã SV đã tồn tại";
            }
          } else {
            errorsClone[name] = "";
          }
        } else if (editStudent) {
          // kiểm tra thông tin chỉnh sửa có bị trùng với các SV khác hay không
          const indexPhone = filterStudentEdit.findIndex(
            (student) => student.phone === valuesClone.phone
          );
          const indexEmail = filterStudentEdit.findIndex(
            (student) => student.email === valuesClone.email
          );
          if (indexPhone !== -1) {
            errorsClone.phone = "(*) Số điện thoại đã tổn tại";
            errorsClone.email = "";
            if (indexEmail !== -1) {
              errorsClone.email = "(*) Email đã tổn tại";
            }
          } else if (indexEmail !== -1) {
            errorsClone.email = "(*) Email đã tổn tại";
            errorsClone.phone = "";
            if (indexPhone !== -1) {
              errorsClone.phone = "(*) Số điện thoại đã tổn tại";
            }
          } else {
            errorsClone[name] = "";
          }
        }
      } else {
        errorsClone[name] = "";
      }
    }
    this.setState({
      values: valuesClone,
      errors: errorsClone,
    });
  };

  handleSubmit = (event) => {
    const { values, errors } = this.state;
    event.preventDefault();
    let isValid = true;
    Object.values(this.state.errors).forEach((item) => {
      if (item) {
        isValid &= false;
      }
    });

    // kiểm tra thông tin đã được nhập chưa
    const valuesClone = {...values}
    const errorsClone = {...errors}
    for (const key in valuesClone) {
      const value = valuesClone[key];
      if (!value.trim()) {
        isValid &= false;
        for (const keyError in errorsClone){
          if(keyError === key){
            errorsClone[keyError] = "(*) Vui lòng nhập thông tin"
          }
        }
        this.setState({
          values: valuesClone,
          errors: errorsClone,
        })
      }
    }

    if (isValid) {
      this.props.submitStudent(this.state.values);
      this.props.resetStudentEdit();
      this.setState({
        values: {
          maSV: "",
          name: "",
          phone: "",
          email: "",
        },
      });
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { editStudent } = nextProps;
    if (editStudent) {
      this.setState({
        values: {
          maSV: editStudent.maSV,
          name: editStudent.name,
          phone: editStudent.phone,
          email: editStudent.email,
        },
      });
    } else {
      this.setState({
        values: {
          maSV: "",
          name: "",
          phone: "",
          email: "",
        },
      });
    }
  };

  render() {
    const { values, errors } = this.state;
    return (
      <div className="container py-5">
        <form onSubmit={this.handleSubmit}>
          <h3 className="formTitle text-white bg-dark">Thông tin sinh viên</h3>
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="inputMaSV">Mã SV</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMaSV"
                  placeholder="123..."
                  name="maSV"
                  disabled={this.props.editStudent}
                  value={values.maSV}
                  pattern="^[0-9]+$"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnChange}
                />
                <span className="text text-danger">{errors.maSV}</span>
                <label htmlFor="inputPhone">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhone"
                  placeholder="0901234567"
                  name="phone"
                  value={values.phone}
                  pattern="^(03|05|07|08|09)\d{8}$"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnChange}
                />
                <span className="text text-danger">{errors.phone}</span>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputName">Họ tên</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Nguyen Van A"
                name="name"
                value={values.name}
                pattern="^[a-zA-ZÀ-Ỹà-ỹĂăÂâÁáẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệÍíỈỉĨĩỊịÓóỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợÚúỨứỪừỬửỮữỰựÝýỲỳỶỷỸỹ ]+$"
                onChange={this.handleOnChange}
                onBlur={this.handleOnChange}
              />
              <span className="text text-danger">{errors.name}</span>
              <label htmlFor="inputEmail">Email</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="example@gmail.com"
                name="email"
                value={values.email}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                onChange={this.handleOnChange}
                onBlur={this.handleOnChange}
              />
              <span className="text text-danger">{errors.email}</span>
            </div>
          </div>
          <button id="btnSubmit" type="submit" className="btn btn-success">
            {this.props.editStudent ? "Cập nhật" : "Thêm sinh viên"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editStudent: state.studentReducer.editStudent,
    students: state.studentReducer.listStudents,
    filterStudentEdit: state.studentReducer.filterStudentEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitStudent: (student) => {
      dispatch(actSubmitStudent(student));
    },
    resetStudentEdit: () => {
      dispatch(actEditStudent(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
