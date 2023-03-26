import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickBtn = () => {
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickBtn}>카운트 올리기!</button>
      </>
    );
  } // render()는 react 기능
}
