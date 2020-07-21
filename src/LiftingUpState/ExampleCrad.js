import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Card from "./Card";
export default class ExampleCrad extends Component {
  state = {
    proList: data,
    proSelected: null,
    cardList: [],
  };

  handleDelete = (card) => {
    /**
     * 1/ tìm vị trí
     * 2/ cắt ra khoải mãng
     * 3/ setState
     */
    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((item) => item.maSP == card.maSP);
    if (index >= 0) {
      cardListUpdate.splice(index, 1);
      this.setState({
        cardList: cardListUpdate,
      });
    }
  };

  handleBuy = (card) => {
    // tạo cardList mới
    let cardLitsUpdate = [...this.state.cardList];

    // tìm vị của phần tử trong mãng
    let index = cardLitsUpdate.findIndex((item) => item.maSP === card.maSP);
    console.log(index);

    if (index >= 0) {
      // tìm thấy
      cardLitsUpdate[index].soLuong += 1;
    } else {
      // không tìm thấy
      card.soLuong = 1;
      console.log(card);
      cardLitsUpdate = [...cardLitsUpdate, card];
    }

    // setState
    this.setState({
      cardList: cardLitsUpdate,
    });
  };

  handleSelectPro = (pro) => {
    this.setState({
      proSelected: pro,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <Card
              handleDelete={this.handleDelete}
              cardList={this.state.cardList}
            />
            <ProductList
              handleSelectPro={this.handleSelectPro}
              proList={this.state.proList}
              handleBuy={this.handleBuy}
            />

            {this.state.proSelected ? (
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="img-fluid"
                    src={this.state.proSelected.hinhAnh}
                    alt="sdada"
                  />
                </div>
                <div className="col-sm-7">
                  <h3>Thông số kỹ thuật</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Màn hình</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>Hệ điều hành</td>
                        <td>iOS 12</td>
                      </tr>
                      <tr>
                        <td>Camera trước</td>
                        <td>7 MP</td>
                      </tr>
                      <tr>
                        <td>Camera sau</td>
                        <td>Chính 12 MP &amp; Phụ 12 MP</td>
                      </tr>
                      <tr>
                        <td>RAM</td>
                        <td>4 GB</td>
                      </tr>
                      <tr>
                        <td>ROM</td>
                        <td>64 GB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
