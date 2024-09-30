import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Container">
        <img src={this.props.image} alt="Picture" width={200} height={300} />
        <h3>{this.props.name}</h3>
        <p>{this.props.writer}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
