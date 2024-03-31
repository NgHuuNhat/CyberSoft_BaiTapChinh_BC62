import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="banner">
        <h2>A warm welcome!</h2>
        <p>
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="btn btn-primary">Call to action</button>
      </div>
    );
  }
}
