import React from "react";
import Calculator from "./calculator/calculator.jsx";

class App extends React.Component {
  state = {
    value: "",
  };
  handleChange = (btnValue) => {
    console.log("Clicked", btnValue);
    this.setState({
      value: btnValue,
    });
    if (btnValue === "=") {
      this.setState({
        value: eval(this.state.value),
      });
    } else if (btnValue === "C") {
      this.setState({
        value: this.state.value.slice(0, -1),
      });
    } else {
      this.setState({
        value: this.state.value + btnValue,
      });
    }
  };
  render() {
    return (
      <div className="mainDiv">
        <div>{this.state.value}</div>
        <Calculator accessFunction={this.handleChange} />
      </div>
    );
  }
}
export default App;
