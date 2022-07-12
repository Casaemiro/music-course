import Contactus from "../components/Contactus";
import Hero from "../components/hero";
import Howto from "../components/Howto";
import Navbar from "../components/Navbar.";

const HomePage = () => {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Howto />
            <Contactus />
        </>
     );
}
 
export default HomePage;