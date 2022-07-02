import About from './About';
import './App.css';
import Contactus from './Contactus';
import Hero from './hero';
import Howto from './Howto';
import Navbar from './Navbar.';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Howto />
     <About />
     <Contactus />
    </div>
  );
}

export default App;
