import { Component, PureComponent } from "react";

class PureComponent1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      typeOfMethod: [
        { text: "Increment", value: 1 },
        { text: "Decrement", value: 1 },
        { text: "Reset", value: 0 },
      ],
    };
  }
  // this is for used in multiple requirement case and when we don't pass any arguments.
  //   handleIncrement = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  //   handleDecrement = () => {
  //     this.setState({
  //       count: this.state.count - 1,
  //     });
  //   };
  //   handleReset = () => {
  //     this.setState({
  //       count: 0,
  //     });
  //   };

  handleStateChange = (type = "reset", value = 0) => {
    this.setState({
      count:
        type === "Increment"
          ? this.state.count + value
          : type === "Decrement"
          ? this.state.count - value
          : value,
    });
  };
  
  render() {
    return (
      <>
        <h2>Parent {this.state.count}</h2>
        {/* <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button> */}

        {/* <Button text="Increment" value={1} onClick={this.handleStateChange} />
        <Button text="Decrement" value={1} onClick={this.handleStateChange} />
        <Button text="Reset" value={0} onClick={this.handleStateChange} /> */}

        {this.state.typeOfMethod.map((ele) => (
          <Button
            text={ele.text}
            value={ele.value}
            onClick={this.handleStateChange}
            key={ele.text}
          />
        ))}

        {/* <button onClick={()=>this.handleStateChange("Increment",1)}>Increment</button>
        <button onClick={()=>this.handleStateChange("Decrement",1)}>Decrement</button>
        <button onClick={()=>this.handleStateChange("Reset",0)}>Reset</button> */}
        <Child1 />
        <Child2 />
      </>
    );
  }
}
export default PureComponent1;
class Button extends PureComponent {
  render() {
    return (
      <>
        <button
          onClick={() => this.props.onClick(this.props.text, this.props.value)}
        >
          {this.props.text}
        </button>
      </>
    );
  }
}

class Child1 extends PureComponent {
  render() {
    console.log("Child1 Rendering");
    return (
      <>
        <h2>Child1</h2>
      </>
    );
  }
}
class Child2 extends PureComponent {
  render() {
    console.log("Child2 Rendering");
    return (
      <>
        <h2>Child2</h2>
      </>
    );
  }
}
