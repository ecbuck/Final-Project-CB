import React from "react";
import "./Navbar.css";
import MyForm from "./MyForm";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-nav">
        <div className="col-sm-3 sidenav">
          <h4>Coding is the new knitting</h4>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">Articles</a>
            </li>
            <li>
              <a href="#section3">Tips</a>
            </li>
            <li>
              <a href="#section3">Typo or hypo?</a>
            </li>
          </ul>
          <br />
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Blog.."
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
          <MyForm />
        </div>
      </div>
    );
  }
}

export default Navbar;
