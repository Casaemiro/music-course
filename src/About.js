import './About.css'

const About = () => {
    return ( 
        <>
        <div className="aboutus-section" id="aboutus">
            
            <img src="https://media.istockphoto.com/photos/high-angle-view-close-up-asian-woman-using-mobile-app-cinema-movie-picture-id1324465035?b=1&k=20&m=1324465035&s=170667a&w=0&h=FsfpHKvaNR05oit_Q96jO-0biZzt5Hzq4GitrCTqzMg=" alt="" style={{borderTopLeftRadius:"3px",borderBottomLeftRadius:"3px", height:"50%",marginBottom:"0px"}} className="about-image"/>
            
            <div className="about-text">
                <div className="about-head">
                    About Us
                </div>
                <p>
                Our platform is totally free for you to use! Pass your ticketing fees onto your buyers and put that money right back into your event. We waive all fees for free events and have extra low fees for tickets priced $5 and below.
                </p>
            </div>
        </div>
        <div className="aboutus-section">
            
            <div className="about-text" style={{textAlign:"right"}}>
                <div className="about-head">
                    How we Operate
                </div>
                <p>
                Our platform is totally free for you to use! Pass your ticketing fees onto your buyers and put that money right back into your event. We waive all fees for free events and have extra low fees for tickets priced $5 and below.
                </p>
            </div>
            <img src="https://media.istockphoto.com/photos/high-angle-view-close-up-asian-woman-using-mobile-app-cinema-movie-picture-id1324465035?b=1&k=20&m=1324465035&s=170667a&w=0&h=FsfpHKvaNR05oit_Q96jO-0biZzt5Hzq4GitrCTqzMg=" alt="" style={{borderTopRightRadius:"3px",borderBottomRightRadius:"3px", height:"50%",marginBottom:"0px"}} className="about-image"/>
        </div></>
     );
}
 
export default About;