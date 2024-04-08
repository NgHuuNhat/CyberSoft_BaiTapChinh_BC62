import React, { Component } from "react";

export default class Shoes extends Component {
  render() {
    const { shoes } = this.props;
    return (
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={shoes.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <h5>${shoes.price}</h5>
            <div className="btnShoes">
              <button
                className="btn btn-info"
                data-toggle="modal"
                data-target="#modelInfo"
                onClick={() => {
                  this.props.getShoesDetail(shoes);
                }}
              >
                Chi tiết
              </button>
              <button className="btn btn-success btnAddToCart"
              onClick={()=>{this.props.addShoesToCart(shoes)}}>
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
