import React, { Component } from 'react'

export default class InfoModal extends Component {
  render() {
    const {shoesDetail} = this.props;
    return (
        <div
        className="modal fade"
        id="modelInfo"
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
              <h5 className="modal-title">Thông tin sản phẩm</h5>
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
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={shoesDetail?.image} alt='' width={300}/>
                    </div>
                    <div className='col-md-7'>
                        <table className='table tableDetail'>
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <th>Mã</th>
                                    <td>{shoesDetail?.id}</td>
                                </tr>
                                <tr>
                                    <th>Tên</th>
                                    <td>{shoesDetail?.name}</td>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <td>${shoesDetail?.price}</td>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <td>{shoesDetail?.description}</td>
                                </tr>
                                <tr>
                                    <th>Số lượng</th>
                                    <td>{shoesDetail?.quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
