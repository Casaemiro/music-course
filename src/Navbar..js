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
                {/* <div className="logo-area">
                    <a href="/" style={{textDecoration:"none",color:"black"}}></a>
                </div> */}
                <img src={logo} alt="" className="lgo"/>
            </div>
            <form className="top-nav-area">
                <input name="search" type="text" placeholder="search course..." className="search-form" style={{ paddingLeft: "2%", color: "#121B15" }} />

            </form><button onClick={displaySearch} onSubmit={displaySearch} className="search-button">SEARCH</button>
            <div className="nav-right">
                <a href="/"><i className="fa-solid fa-magnifying-glass newSearch" style={{paddingRight:"2%"}}></i></a>
                <a href="#howto">Sponsor</a>

                <select className='evt'>
                    <option>Events</option>
                    <option>Holiday music Camps</option>
                    <option>Yearly music session(3mo)</option>
                    <option>Sound engineering training</option>
                    <option>Music workshops</option>
                    <option>Master class</option>
                </select>

                <a href="/">Courses</a>
                <a href="#aboutus">About</a>
                <a href="#contactus">Contact us</a>
                <a href="#howto">Help</a>
            </div>
            <div className='mobileMenu'>
            <a href="/"><i className="fa-solid fa-magnifying-glass newSearch" style={{paddingRight:"2%"}}></i></a>
                <a href="#howto" onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Sponsor</a>

                <select className='evt'>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Events</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Holiday music Camps</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Yearly music session(3mo)</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Sound engineering training</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Music workshops</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Master class</option>
                </select>

                <a href="/" onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Getting started</a>
                <a href="#aboutus" onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>About</a>
                <a href="#contactus" onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Contact us</a>
                <a href="#howto" onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Help</a>
            </div>
            <div className='menuIcon' onClick={()=>{document.querySelector('.mobileMenu').style.display="flex"}}><i className="fa-solid fa-bars" ></i></div>
        </div>
    );
}

export default Navbar;