import React, { Component } from 'react';
import Shoes from './shoes';

export default class ListShoes extends Component {
    handleRenderListShoes = () => {
        const {listShoes, getShoesDetail, addShoesToCart} = this.props;
        return listShoes.map((shoes) => {
            return (
                <Shoes key={shoes.id} shoes={shoes} getShoesDetail={getShoesDetail} addShoesToCart={addShoesToCart}/>
            )
        })
    }

  render() {
    return (
      <div className='container'>
        <div className='row listShoes'>
            {this.handleRenderListShoes()}
        </div>
      </div>
    )
  }
}
