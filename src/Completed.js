import React, { Component } from "react";
import propTypes from "prop-types";

class Completed extends Component {
  constructor(props) {
    super();
    this.state = {
      completed: props.completed
    };
    console.log(props);
  }

  /* componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.completed !== prevProps.completed) {
   this.setState({
  completed: this.props.completed
   });
  }
  }

  */

  render() {
    return (
      <ul>
        {this.state.completed.map((list, index) => (
          <li className="list-group-item list-group-item-success" key={index}>
            {" "}
            `Task: {list.name} was completed by ${list.webmaster} on ticket{" "}
            {list.ticketId}`
          </li>
        ))}
      </ul>
    );
  }
}

//      Completed.propTypes={
// test:propTypes.string.isRequired

export default Completed;
