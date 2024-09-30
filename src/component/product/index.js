import React from "react";
import ProductForm from "./form";
import { BOOKS } from "../../constant/books";
import Card from "../card";
import Navbar from "../navbar";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(data) {
    this.setState({ value: data });
  }
  render() {
    const filteredData = BOOKS.filter((item) => {
      if (item.name.toLowerCase().includes(this.state.value.toLowerCase())) {
        return item;
      }
    });
    return (
      <>
        <Navbar />
        <div className="product-container">
          <h1>Product</h1>
          <ProductForm
            value={this.state.value}
            onInputChange={this.handleInputChange}
          />
          <br />
          <div className="products">
            {this.state.value.length && filteredData.length > 0
              ? filteredData.map((data) => {
                  return (
                    <Card
                      key={data.id}
                      name={data.name}
                      writer={data.writer}
                      description={data.description}
                      image={data.imgUrl}
                    />
                  );
                })
              : BOOKS.map((data) => {
                  return (
                    <Card
                      key={data.id}
                      name={data.name}
                      writer={data.writer}
                      description={data.description}
                      image={data.imgUrl}
                    />
                  );
                })}
          </div>
        </div>
      </>
    );
  }
}
export default Product;
