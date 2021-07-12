import React from "react";

import "./App.css";
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      btn: 0,
    };
  }

  storeUser = (e) => {
    e.preventDefault();
    this.setState({
      user: e.target.elements.name.value,
      btn: 1,
    });
  };
  render() {
    return (
      <div>
        <h4>Enter your name</h4>
        <form onSubmit={this.storeUser}>
          <label>
            <input type="text" name="name" id="name"></input>
          </label>
          <button type="submit">Submit</button>
        </form>
        {this.state.btn === 1 ? (
          <div>
            <Link to="/general/:js" className="btn-primary">
              JavaScript
            </Link>
            <Link to="/general/:nodejs" className="btn-primary">
              NodeJS
            </Link>
            <Link to="/contribute" className="btn-primary">
              <button>Contribute</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Home;
