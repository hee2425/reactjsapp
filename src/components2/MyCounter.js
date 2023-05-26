import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "class 컴포넌트 이용 Counter임" };
  }
  handleClick = (event) => {
    var btnContent = event.target.innerHTML;
    if (btnContent === "증가") {
      this.setState({ count: this.state.count + 1, message: btnContent });
    } else {
      this.setState({ count: this.state.count - 1, message: btnContent });
    }
  };
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <h2>message:{this.state.message}</h2>
        <Button variant="primary" onClick={this.handleClick}>
          증가
        </Button>
        <Button variant="danger" onClick={this.handleClick}>
          감소
        </Button>
        <Button
          variant="success"
          onClick={(e) => {
            this.setState({
              count: this.state.count + 1,
              message: e.target.innerHTML,
            });
          }}
        >
          증가
        </Button>
        <Button
          variant="warning"
          onClick={(e) => {
            this.setState({
              count: this.state.count - 1,
              message: e.target.innerHTML,
            });
          }}
        >
          감소
        </Button>
      </div>
    );
  }
}

export default MyCounter;
