import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderProList = () => {
    return this.props.proList.map((item, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product
            handleBuy={this.props.handleBuy}
            handleSelectPro={this.props.handleSelectPro}
            item={item}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderProList()}</div>
      </div>
    );
  }
}
