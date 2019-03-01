import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super();

    this.state = {
      selectedOption: false,
      ticket: "",
      isEditing: false,
      editText: props.name,
      ticketId: "",
      styleState: false
    };

    //webmasters select menu

    this.options = [
      { name: "Assign Webmaster" },
      { name: "Adam Lopez" },
      { name: "Carlos Fonseca" },
      { name: "Dean Richards" },
      { name: "Fran Navarro" },
      { name: "Adam Lopez" },
      { name: "George Barbu" },
      { name: "Joseph Victory" },
      { name: "Kevin A.Morillo" },
      { name: "Lee Cockcroft" },
      { name: "Lee Fendley" },
      { name: "Marian Stroiu" },
      { name: "Robin Whitting" },
      { name: "Ross Fleming" },
      { name: "Wojchiech Gefert" }
    ];
  }

  handleOptionChange = event => {
    //event change
    this.setState({
      selectedOption: event.target.value
    });
  };

  handleCompleted = (selectedOption, ticketId) => {
    //onsubmit complete button
    this.props.myoptions(this.state.selectedOption, this.state.ticket);
    this.setState({
      styleState: !this.state.styleState
    });
  };

  edit = (isEditing, newText) => {
    this.setState({
      isEditing: !this.state.isEditing
    });

    this.props.editNewText(this.state.isEditing, this.state.editText);
  };

  changeEdit = e => {
    this.setState({
      editText: e.target.value
    });
  };

  ticketIdChange = e => {
    this.setState({
      ticket: e.target.value
    });
  };

  render() {
    //input edit
    let textTrue;

    if (this.state.isEditing) {
      textTrue = (
        <input
          type="text"
          defaultValue={this.props.name}
          onChange={this.changeEdit}
          className="uppercase"
        />
      );
    }
    if (this.state.styleState) {
      return <span className="menu navigation-menu" />;
    }

    return (
      <li index={this.props.indexToChange} data-name={this.props.index}>
        <span className="li-text">
          {" "}
          {this.props.name} {textTrue}
        </span>
        <div className="btn-group">
          <button className="btn-style btn btn-info" onClick={this.edit}>
            {" "}
            {this.state.isEditing ? "save" : "edit"}{" "}
          </button>
          <button
            className={this.props.liRemove ? "btn btn-danger" : "test"}
            onClick={this.props.remove}
          >
            Remove{" "}
          </button>
        </div>

        <select className="select" onChange={this.handleOptionChange}>
          {this.options.map((options, index) => (
            <option key={index} value={options.name}>
              {options.name}
            </option>
          ))}
        </select>

        <label> Ticket Number &nbsp; </label>

        <input
          type="text"
          defaultValue={this.state.ticketId}
          onChange={this.ticketIdChange}
          onMouseLeave={this.mouseLeave}
        />

        <button onClick={this.handleCompleted}> Task Completed </button>

        <hr />
      </li>
    );
  }
}

export default List;
