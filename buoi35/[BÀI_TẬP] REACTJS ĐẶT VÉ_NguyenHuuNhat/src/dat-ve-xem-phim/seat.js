import React, { Component } from "react";
import { connect } from "react-redux";
import { actChonGhe } from "../store/actions";

class Seat extends Component {
  renderSeat = () => {
    const { row } = this.props;
    if (row.hang !== "") {
      return row.danhSachGhe.map((seat) => {
        if (seat.daDat) {
          return (
            <td key={seat.soGhe}>
              <button className="gheDuocChon">{seat.soGhe}</button>
            </td>
          );
        } else {
          const indexGheChon = this.props.gheDaChon.findIndex(
            (ghe) => ghe.soGhe === seat.soGhe
          );
          if (indexGheChon !== -1) {
            return (
              <td key={seat.soGhe}>
                <button
                  className="gheDangChon"
                  onClick={() => {
                    this.props.chonGhe(seat);
                  }}
                >
                  {seat.soGhe}
                </button>
              </td>
            );
          } else {
            return (
              <td key={seat.soGhe}>
                <button
                  className="ghe"
                  onClick={() => {
                    this.props.chonGhe(seat);
                  }}
                >
                  {seat.soGhe}
                </button>
              </td>
            );
          }
        }
      });
    } else {
      return row.danhSachGhe.map((seat) => {
        return (
          <td key={seat.soGhe}>
            <div className="rowNumber"> {seat.soGhe}</div>
          </td>
        );
      });
    }
  };

  render() {
    return <>{this.renderSeat()}</>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (seat) => {
      dispatch(actChonGhe(seat));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    gheDaChon: state.seatReducer.gheDaChon,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
