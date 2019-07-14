import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import About from "./Pages/Containers/About/About";
import Contact from "./Pages/Containers/Contact/Contact";
import Home from "./Pages/Containers/Home/Home";
import Navbar from "./Navbar/Navbar";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div class="bg-image" />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
