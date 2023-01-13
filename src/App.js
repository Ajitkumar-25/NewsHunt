import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setprogress=(progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={4} color="#f11946" progress={this.state.progress} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setprogress={this.setprogress }
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setprogress={this.setprogress }
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setprogress={this.setprogress }
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setprogress={this.setprogress }
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setprogress={this.setprogress }
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="science"
              element={
                <News setprogress={this.setprogress }
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setprogress={this.setprogress }
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setprogress={this.setprogress }
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
