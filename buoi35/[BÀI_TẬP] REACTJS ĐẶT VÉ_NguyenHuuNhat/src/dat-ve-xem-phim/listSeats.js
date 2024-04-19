import React, { Component } from "react";
import Seat from "./seat";
import { connect } from "react-redux";

class ListSeats extends Component {
  renderRowSeat = () => {
    const { rowSeats } = this.props;
    return rowSeats.map((row) => {
      return (       
          <tr key={row.hang}>
            <td className="firstChar">{row.hang}</td>
            <Seat row={row} />
          </tr>
      );
    });
  };

  render() {
    return (
      <>
        <h3>Màn Hình</h3>
        <div className="screen"></div>
        <table className="tableGhe">
          <tbody>{this.renderRowSeat()}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rowSeats: state.seatReducer.listSeats,
  };
};

export default connect(mapStateToProps, null)(ListSeats);
