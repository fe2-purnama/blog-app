import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      color: "red",
    };
    const { buttonColor } = this.props;
    return (
      <div>
        <button
          className="thisButton"
          style={{ color: this.props.buttonColor, backgroundColor: "blue" }}
        >
          Get Mor
        </button>
      </div>
    );
  }
}

export default Button;
