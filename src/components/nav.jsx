import React, { Component } from "react";

// Stateless Functional Component
// Just returns a React element without any function. Useful for stateless and simple components.
// Shortcut is sfc
// Use destruction to get rid of props.
// Cannot use lifestyle hooks. Only works in Class components.
const Nav = ({ totalCounters }) => {
  // console.log("Nav - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// Class Component
// Shortcut is cc
// class Nav extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default Nav;
