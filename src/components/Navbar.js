import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
            {/* <img src="/C:/Users/AJIT/Desktop/REACT/newshunt/src/components/newspaper-icon-news-dark-background-116857369.svg" width="30" height="30" class="d-inline-block align-top" alt="wfrvfdve"/> */}
              NewsHunt
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link active" to="/about">About</Link> </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/business">
                    Business
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/entertainment">
                    Entertainment
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/general">
                    General
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/health">
                    Health
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/science">
                    Science
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sports">
                    Sports
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/technology">
                    Technology
                  </Link>{" "}
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
