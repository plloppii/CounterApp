import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    // Use object destructering to clean up code and get rid of this.props
    const { onReset, counters, onDelete, onIncrementDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          {" "}
          Reset
        </button>
        {/* For loop in JSX */}
        {counters.map((counter) => (
          <Counter
            //These attributes are all props sent to the child component.
            //Props are readonly.
            key={counter.id}
            // id={counter.id}
            // value={counter.value}
            counter={counter}
            selected={true}
            onDelete={onDelete}
            onDecrement={onIncrementDecrement}
            onIncrement={onIncrementDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
