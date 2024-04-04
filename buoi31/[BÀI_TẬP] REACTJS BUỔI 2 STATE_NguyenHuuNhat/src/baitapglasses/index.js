import React, { Component } from "react";
import data from "./data.json";

export default class BaiTapGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGlasses: data,
      glassURL: "",
      glassName: "",
      glassDesc: "",
    };
  }

  renderListGlasses = () => {
    return this.state.listGlasses.map((item) => {
      return (
        <div key={item.id} className="col-md-4">
          <button
            onClick={() => {
              this.changeGlass(item.id);
            }}
          >
            <img src={item.url} width={120} alt="" />
          </button>
        </div>
      );
    });
  };

  changeGlass = (id) => {
    this.state.listGlasses.forEach((item) => {
      if (id === item.id) {
        this.setState({
          glassURL: item.url,
          glassName: item.name,
          glassDesc: item.desc,
        });
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row py-5 showAll">
          <div className="col-md-6">
            <img className="model" src="./glassesImage/model.jpg" alt="" />
            <img className="glass" src={this.state.glassURL} alt="" />
          </div>
          <div className="col-md-6">
            <div className="row listGlasses">{this.renderListGlasses()}</div>
            <div className="glassInfo">
              <h2>{this.state.glassName}</h2>
              <p>{this.state.glassDesc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
