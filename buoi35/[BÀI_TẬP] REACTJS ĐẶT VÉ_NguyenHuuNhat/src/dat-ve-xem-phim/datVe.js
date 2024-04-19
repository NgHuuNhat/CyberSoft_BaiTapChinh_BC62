import React, { Component } from "react";
import { connect } from "react-redux";
import { actDatVe } from "./../store/actions";

class DatVe extends Component {
  renderGheDaChon = () => {
    const { gheDaChon, gheDaDat } = this.props;
    return (gheDaChon.length > 0 ? gheDaChon : gheDaDat).map((ghe) => {
      return (
        <tr key={ghe.soGhe}>
          <td>{ghe.soGhe}</td>
          <td>{ghe.gia.toLocaleString()}</td>
        </tr>
      );
    });
  };

  total = () => {
    const { gheDaChon, gheDaDat } = this.props;
    return (gheDaChon.length > 0 ? gheDaChon : gheDaDat).reduce(
      (total, ghe) => (total += ghe.gia),
      0
    );
  };

  render() {
    return (
      <>
        <table className="table table-bordered table-dark table-striped tableVe">
          <thead>
            <tr>
              <th>Số Ghế</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>{this.renderGheDaChon()}</tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td>{this.total().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>

        <button
          data-toggle="modal"
          data-target="#modalThongBao"
          className="btn btn-success"
          onClick={() => {
            this.props.datVe(this.props.gheDaChon);
          }}
        >
          Đặt Vé
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gheDaChon: state.seatReducer.gheDaChon,
    gheDaDat: state.seatReducer.gheDaDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datVe: (ghe) => {
      dispatch(actDatVe(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatVe);
