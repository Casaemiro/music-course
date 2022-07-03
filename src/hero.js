import './hero.css'
const Hero = () => {
    return (
        <div className="hero-section">
            <div className='overl'>
                <div className="large-hero-text">
                    <span className='colorgame'>E</span><span className='colorgame'>v</span><span className='colorgame'>e</span><span className='colorgame'>n</span><span className='colorgame'>t</span> <span className='colorgame'>t</span><span className='colorgame'>i</span><span className='colorgame'>c</span><span className='colorgame'>k</span><span className='colorgame'>e</span><span className='colorgame'>t</span><span className='colorgame'>i</span><span className='colorgame'>n</span><span className='colorgame'>g</span> <br></br><span className='colorgame'>d</span><span className='colorgame'>o</span><span className='colorgame'>n</span><span className='colorgame'>e</span> <span className='colorgame'>r</span><span className='colorgame'>i</span><span className='colorgame'>g</span><span className='colorgame'>h</span><span className='colorgame'>t</span>
                </div>
                <div className="hero-2">
                    Creating awesome events and selling tickets <br />online just got a whole lot easier.
                </div>
                <button className="button-section" id="howto">Setup Event</button>
            </div>
        </div>
    );
}

export default Hero;