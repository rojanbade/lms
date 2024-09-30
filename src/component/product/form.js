import React from "react";
class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Search
            <input
              type="text"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default ProductForm;
