import React, { Component } from "react";
import { actSearch } from "./../store/actions";
import { connect } from "react-redux";

class Search extends Component {
  handleKeyWord = (event) => {
    const keyword = event.target.value;
    this.props.search(keyword);
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="form-control mb-3 w-50"
          placeholder="Nhập từ khóa tìm kiếm"
          onChange={this.handleKeyWord}
        />
       
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyword) => {
      dispatch(actSearch(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
