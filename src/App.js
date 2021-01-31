import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/dashboard";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Home from './components/layout/Home';
import About from './components/layout/About';
import What from './components/layout/What';
import history from './components/history';
import Create from './components/layout/Create';
import Donate from './components/layout/Donate';
import EditDonors from './components/layout/Index.donor';
import EditCreate from './components/layout/Index.create';
import Contact from './components/layout/Contact';
import Events from './components/layout/Event';
import Stories from './components/layout/Stories';

import Blogs from './components/layout/Blog';








if (localStorage.jwtToken) {

  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {

    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Jumbotron className="jum jumbotron">
        <Provider store={store}>

          <h2 className="header"> Welcome To Kidney Donation
      </h2>
          <Router history={history} className="mem">
            <div className="App">
              <Button size="lg" className="custom-btn-toolbar">

                <Link to="/home">
                  <Button>Home</Button>
                </Link>
                <Link to="/about">
                  <Button>About</Button>
                </Link>
                <Button>Emergency Service</Button>
                <Link to="/what">
                  <Button>What We Do</Button>
                </Link>
                <Link to = "/contact">
                <Button>Contact Us</Button>
                </Link>
              <Link to ='/register'> 
            <Button>Register</Button>
            </Link>
            <Link to ='/events'> 
            <Button>Events</Button>
            </Link>
            <Link to ='/stories'> 
            <Button>Stories</Button>
            </Link>
            <Link to ='/blogs'> 
            <Button>Blogs</Button>
            </Link>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/what" component={What} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/stories" component={Stories} />
              <Route exact path="/blogs" component={Blogs} />




              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/create" component={Create} />
                <PrivateRoute exact path="/donor" component={Donate} />
                <PrivateRoute exact path="/index-donor" component={EditDonors} />
                <PrivateRoute exact path="/index-create" component={EditCreate} />



              </Switch>
              </Button>
            </div>
          </Router>

        </Provider>
      </Jumbotron>
    );
  }
}
export default App;