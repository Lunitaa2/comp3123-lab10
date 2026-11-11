import React, { Component } from "react";

export default class Student extends Component {
  regularProperty = "regular property, this does not hook into react lifecycle phases";

  constructor(props) {
    super(props);

    this.state = {
      studentId: props.studentId || "101477171",
      firstName: "Luna",
    };

    this.showMessage = this.showMessage.bind(this);
  }

  showMessage() {
    alert("Welcome " + this.state.firstName);
  }

  incrementEventHandler = () => {
    this.regularProperty = "Updated: " + this.regularProperty;
    console.log(this.regularProperty);
    this.setState((prevState) => ({
      studentId: Number(prevState.studentId) + 1,
    }));
  };

  eventHandlerPrinter = (event) => {
    console.log(event);
    console.log(event.target.name + ": " + event.target.value);
  };

  readName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  render() {
    return (
      <section className="student-container">
        <h2>Student Component</h2>
        <p>
          <strong>regularProperty:</strong> {this.regularProperty}
        </p>
        <p>
          <strong>studentId:</strong> {this.state.studentId}
        </p>
        <p>
          <strong>State: </strong>
          {JSON.stringify({
            studentId: this.state.studentId,
            firstName: this.state.firstName,
          })}
        </p>

        <div className="input-group">
          <input
            name="firstname"
            placeholder="Enter first name"
            value={this.state.firstName}
            onChange={this.readName}
          />
          <button
            name="buttonEvent"
            value="event"
            onClick={(event) => this.eventHandlerPrinter(event)}
          >
            show event
          </button>
          <button onClick={this.showMessage}>
            Click to show message
          </button>
        </div>
      </section>
    );
  }

  componentDidMount() {
    console.log("component just mounted");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("component will update to this new state:", newState);
    return true;
  }
}
