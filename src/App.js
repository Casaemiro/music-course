import Navbar from "./components/Navbar.";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./Pages/Home";
import CourseListPage from "./Pages/CourseList";
import BasicMusicTheory from "./Pages/BasicMusicTheory";
import Contactus from "./components/Contactus";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/courselist">
            <CourseListPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/basicmusiccourse">
            <BasicMusicTheory />
          </Route>
        </Switch>
        <Contactus />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
