import './Navbar.css'
import logo from './images/logo.png'

const Navbar = () => {
    const displaySearch = () => {
        document.querySelector('.hero-section').style.display = "none"
        document.querySelector('.howto-section').style.paddingTop = "5%"
        document.querySelector('.events').style.display = "flex"
        // document.querySelector('.events').style.margin = "0px auto"
        console.log("wow")
    }
    return (
        <div className="top-nav">
            <div className="nav-left">
                <div className="logo-area">
                    {/* <a href="/" style={{textDecoration:"none",color:"black"}}></a> */}
                </div>
                <img src={logo} alt="" style={{ width: "60px" }} />
            </div>
            <form className="top-nav-area">
                <input name="search" type="text" placeholder="search course..." className="search-form" style={{ paddingLeft: "2%", color: "#121B15" }} />

            </form><button onClick={displaySearch} onSubmit={displaySearch} className="search-button">SEARCH</button>
            <div className="nav-right">
                <a href="/">Getting started</a>
                <a href="#aboutus">About</a>
                <a href="#contactus">Contact us</a>
                <a href="#howto">Help</a>
            </div>
        </div>
    );
}

export default Navbar;