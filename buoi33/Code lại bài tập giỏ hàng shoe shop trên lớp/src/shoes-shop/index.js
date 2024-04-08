import React, { Component } from "react";
import ListShoes from "./list-shoes";
import CartModal from "./cart-modal";
import InfoModal from "./info-modal";
import data from "./data.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: data,
      productDetail: null,
      listCart: [],
    };
  }

  findIndexProduct = (id) =>
    this.state.listCart.findIndex((shoes) => id === shoes.id);

  // lấy thông tin sản phẩm
  handleRenderDetailProduct = (shoes) => {
    this.setState({
      productDetail: shoes,
    });
  };

  // thêm sản phẩm vào giỏ hàng
  handleAddProductToCart = (shoes) => {
    const shoesCart = {
      id: shoes.id,
      name: shoes.name,
      image: shoes.image,
      price: shoes.price,
      qty: 1,
    };

    const listCartClone = [...this.state.listCart];
    const index = this.findIndexProduct(shoesCart.id);
    if (index !== -1) {
      listCartClone[index].qty += 1;
    } else {
      listCartClone.push(shoesCart);
    }

    this.setState({
      listCart: listCartClone,
    });
  };

  // xóa sản phẩm từ giỏ hàng
  handleDeleteProductCart = (id) => {
    const listCartFilter = this.state.listCart.filter(
      (shoes) => shoes.id !== id
    );
    this.setState({
      listCart: listCartFilter,
    });
  };

  // update số lượng khi bấm + hoặc -
  handleUpdateQtyCart = (id, isPlus) => {
    const listCartClone = [...this.state.listCart];
    const index = this.findIndexProduct(id);
    if (index !== -1) {
      if (isPlus) {
        listCartClone[index].qty += 1;
      } else {
        if (listCartClone[index].qty > 1) {
          listCartClone[index].qty -= 1;
        } else {
          listCartClone.splice(index, 1);
        }
      }
    }

    this.setState({
      listCart: listCartClone,
    });
  };

  // update tổng số lượng sản phẩm của giỏ hàng
  totalQty = () => {
    return this.state.listCart.reduce(
      (total, shoes) => (total += shoes.qty),
      0
    );
  };

  render() {
    const { listProducts, productDetail, listCart } = this.state;
    return (
      <>
        <div className="title">
          <h1>Shoes Shop</h1>
          <div className="container-fluid">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.totalQty()})
            </button>
          </div>
        </div>

        <ListShoes
          listShoes={listProducts}
          getShoesDetail={this.handleRenderDetailProduct}
          addShoesToCart={this.handleAddProductToCart}
        />
        <InfoModal shoesDetail={productDetail} />
        <CartModal
          listCart={listCart}
          deleteShoesCart={this.handleDeleteProductCart}
          updateQtyCart={this.handleUpdateQtyCart}
        />
      </>
    );
  }
}
