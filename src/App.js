import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    // this.state = this.props.something;
    // this.setState ERROR -> can only be called if the component is in the DOM.
  }
  componentDidMount() {
    // Perfect place to make AJAX calls to the server.
    console.log("App - Mounted");
  }

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrementDecrement = (counter, increment) => {
    // //create a deep copy of the object
    // const thecounter = { ...counter }; //DeepCopy.
    // thecounter.value++;

    // //create a shallow copy of the counters object.
    // const { counters } = this.state; //ShallowCopy. Equal to const counters = this.state.counters;

    // //grab the index and set the new counter to the correct index of the counter list.
    // const index = counters.indexOf(counter);
    // counters[index] = thecounter;
    // this.setState({ counters });

    //create deep copy of the array
    const counters = [...this.state.counters];
    // //find the index of the passed in counter
    const index = counters.indexOf(counter);
    //creating a deep copy in place of the counter object within the counters array.
    counters[index] = { ...counter };
    if (increment) counters[index].value++;
    else counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    console.log("Counters Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Nav
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrementDecrement={this.handleIncrementDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
