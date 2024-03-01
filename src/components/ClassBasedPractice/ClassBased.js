const { Component } = require("react");

export class CounterComp extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
      </>
    );
  }
}
