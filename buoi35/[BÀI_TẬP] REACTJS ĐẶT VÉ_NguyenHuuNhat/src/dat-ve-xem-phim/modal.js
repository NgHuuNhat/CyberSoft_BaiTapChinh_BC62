import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    return (
      <div className="modal fade" id="modalThongBao" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông Báo</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.gheDaDat.length > 0 ? "Đặt vé thành công." : "Vui lòng chọn ghế ngồi." }</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Quay lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gheDaDat: state.seatReducer.gheDaDat,
  };
};

export default connect(mapStateToProps, null)(Modal);
