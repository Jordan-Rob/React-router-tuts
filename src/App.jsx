import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
