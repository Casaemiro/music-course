import Navbar from "./Navbar.";
import Hero from "./hero";
import Howto from "./Howto";
import About from "./About";
import Contactus from "./Contactus";
import Event from "./Event";
import Course from "./CourseMusic";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Event />
     <Hero />
     <Course/>
     <Howto />
     <About />
     <Contactus />
     <Footer />
    </div>
  );
}

export default App;
