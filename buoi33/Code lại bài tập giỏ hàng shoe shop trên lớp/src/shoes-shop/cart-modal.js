import React, { Component } from 'react'

export default class CartModal extends Component {
    handleRenderCart = () => {
        const {listCart} = this.props;
        return listCart.map((shoes) => {
            return (
                <tr key={shoes.id}>
                <td>{shoes.id}</td>
                <td>{shoes.name}</td>
                <td>
                  <img src={shoes.image} width={50} alt="" />
                </td>
                <td>
                  <button className='btnUpdateQty'
                   onClick={()=>{this.props.updateQtyCart(shoes.id, false)}}
                  >
                    -
                  </button>
                  {shoes.qty}
                  <button className='btnUpdateQty'
                   onClick={()=>{this.props.updateQtyCart(shoes.id, true)}}
                  >
                    +
                  </button>
                </td>
                <td>${shoes.price}</td>
                <td>${shoes.qty * shoes.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={()=>{this.props.deleteShoesCart(shoes.id)}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
        })
    }

  render() {
    return (
        <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                    {this.handleRenderCart()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

