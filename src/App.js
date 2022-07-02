// import Navbar from './Navbar'; // iinclude header file here
// import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar />  // include navabar here */}
        <div className="content">
          <Switch>

            <Route exact path="/">
             {/* main page */}
            </Route>
           
            <Route path='*'>
              {/* include 404 page here */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
