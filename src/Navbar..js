import './Navbar.css'

const Navbar = () => {
    return (
        <div className="top-nav">
            <div className="nav-left">
                <div className="logo-area">Tick<span style={{color:"red"}}>et</span>er</div>

            </div>
            <form className="top-nav-area">
                <input name="search" type="text" placeholder="search event..." className="search-form" />
                <button>SEARCH</button>
            </form>
            <div className="nav-right">
            <a href="/">create Event</a>
            <a href="/">about</a>
            <a href="/">contact us</a>
            <a href="/">help</a>
            </div>
        </div>
    );
}

export default Navbar;