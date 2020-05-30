import React, { Component } from "react";

class Counter extends Component {
  //Props is the data passed into the component
  //State is the local data private to the component.
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 18,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags</p>;
    return (
      // This is how you iterate through a list, inline.
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server.
    }
  }
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  //   constructor() {
  //called when Counter object is created.
  // super();
  //     //this call returns a function with the current object binded to it. Thus, you can reference the object with a 'this' call within.
  //     //sort of inefficent because you need to call bind to all functions.
  //     //Alternative is creating a arrow function. handleIncrement = () =>
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    // obj.method(); <-- returns obj "this is defined as object"
    // function(); <-- does not define "this"
    // So, in this function, 'this' is undefined, unless we make it into a arrow function.
    this.setState({ value: this.state.value + 1 }); //React does not automatically update the DOM without the setState function
  };

  render() {
    console.log("Counter - Rendered");

    //this.props is a object of this object's css properties.
    // console.log("props", this.props);

    //   This is JSX. Javascript XML that is returned and converted into javascript that your browser can understand.
    return (
      // <ReactFragment></ReactFragment> Implement ReactFragment if you do not want to use a div.
      <div>
        {/* Props Hold all information on the current object. (attributes) This is */}
        {/* children tags that are passed in from other classes. */}
        {/* {this.props.children} */}
        {/* <h4> {this.props.id} </h4> */}

        {/* Rendering a random image */}
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <button
          onClick={() => this.props.onDecrement(this.props.counter, false)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>

        {/* Rendering with a function that defines the css class and function that defines the content displayed. */}
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
        {/* You can also render with a style attribute that is defined above. */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* Styles can also be defined inline */}
        {/* <span style={{ fontSize: 100 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span> */}

        <button
          //   onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter, true)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* Conditional rendering: */}
        {/* {this.state.tags.length == 0 && "Please create a new tag!"} Returns only if (true) */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value == 0 ? "warning" : "primary";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    // const { value: count } = this.state; //Stores this.state count inside a const object, count
    // return count === 0 ? "Zero" : count;
    // const { value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    // return this.state.count == 0 ? "Zero" : this.state.count;
  };
}

//Defining and then exporting the class
export default Counter;
