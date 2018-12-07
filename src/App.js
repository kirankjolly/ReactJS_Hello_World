import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormComponent from './Components/FormComponent/FormComponent';
import ListComponent from './Components/ListComponent/ListComponent';
import DetailsComponent from './Components/DetailsComponent/DetailsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ListPage">List Page</Link>
              </li>
            </ul>
            <Route exact path="/" component={FormComponent} />
            <Route path="/ListPage" component={ListComponent} />
            <Route path="/details" component={DetailsComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
