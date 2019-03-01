import React, { Component } from "react";
import Form from "./Form";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      isEditing: false,
      text: "",
      items: [],
      completed: [],
      webmasters: [],
      newText: "",
      styleState: false,
      liRemove: false,
      index: 0,
      displayNone: "block"
    };

    this.submit = this.submit.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  //submit todo list
  submit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        {
          name: this.state.text,
          index: this.state.index,
          remove: this.state.liRemove,
          display: this.state.displayNone
        }
      ],
      text: ""
    }));
  };

  //remove item from the todo list

  remove = (item, indexToChange) => {
    const confirmDelete = window.confirm(
      "Are you sure you wish to delete this item?"
    );
    if (confirmDelete) {
      this.setState({
        items: this.state.items.filter(name => name !== item)
      });
    }
  };

  //
  eventHandler = e => {
    this.setState({
      text: e.target.value
    });
  };

  // select webmaster and ticketId insert in to completed array
  myoptions = (item, selectedOption, ticket) => {
    this.setState({
      completed: [
        {
          name: item.name,
          webmaster: selectedOption,
          ticketId: ticket
        },
        ...this.state.completed
      ]
    });
  };

  //edit todo item

  editNewText = (indexToChange, item, isEditing, newText) => {
    if (isEditing === true) {
      this.setState({
        items: this.state.items.map((item, index) => {
          if (indexToChange === index) {
            return {
              ...item,
              name: newText
            };
          }
          return item;
        })
      });
    }
  };

  render() {
    if (this.state.styleState) {
      return <span className="menu navigation-menu" />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <Form
            submit={this.submit}
            myValue={this.state.text}
            eventHandler={this.eventHandler}
          />
          <h4 className="incompleted-title"> Incompleted Tasks </h4>
          <ul>
            {this.state.items.map &&
              this.state.items.map((item, index) => (
                <List
                  key={index}
                  name={item.name}
                  remove={() => this.remove(item, index)}
                  myoptions={(selectedOption, ticket, newEditText) =>
                    this.myoptions(item, selectedOption, ticket, newEditText)
                  }
                  indexToChange={item.index}
                  liRemove={this.state.liRemove}
                  isEditing={this.isEditing}
                  editNewText={(isEditing, newText) =>
                    this.editNewText(index, item, isEditing, newText)
                  }
                  displayNone={this.state.displayNone}
                />
              ))}
          </ul>
        </header>

        <div className="completed">
          <h2>completed</h2>
          <ul>
            {this.state.completed.map((completed, index) => (
              <li class="completedList">
                {" "}
                Task: <strong>{completed.name} </strong> was completed by
                <strong> {completed.webmaster} </strong>by ticket
                <strong> {completed.ticketId}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
