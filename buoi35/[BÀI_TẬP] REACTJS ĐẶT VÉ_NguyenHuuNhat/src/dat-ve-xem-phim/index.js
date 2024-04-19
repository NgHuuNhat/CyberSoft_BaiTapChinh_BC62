import React, { Component } from "react";
import ListSeats from "./listSeats";
import DatVe from "./datVe";
import Modal from "./modal";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>ĐẶT VÉ XEM PHIM</h1>
          <div className="row">
            <div className="col-md-8">
              <ListSeats />
            </div>
            <div className="col-md-4 datVe">
              <h2>Thông Tin Đặt Vé</h2>
              <div className="seatInfo">
                <div className="gheDuocChon"></div>
                <span>Ghế Đã Đặt</span>
              </div>
              <div className="seatInfo">
                <div className="gheDangChon"></div>
                <span>Ghế Đang Chọn</span>
              </div>
              <div className="seatInfo">
                <div className="gheTrong"></div>
                <span>Ghế Trống</span>
              </div>
              <DatVe/>
            </div>
          </div>
        </div>
        <Modal/>
      </div>
    );
  }
}

export default Home;
