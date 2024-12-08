import React, { Component } from "react";

class Heading extends Component {
  render() {
    const { text, level } = this.props;
    const Tag = `h${level || 1}`;

    return <Tag>{text}</Tag>;
  }
}

export default Heading;
