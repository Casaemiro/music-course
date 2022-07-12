import Navbar from "./components/Navbar.";
import About from "./components/About";
import Course from "./components/CourseMusic";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/course">
            <Course />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
