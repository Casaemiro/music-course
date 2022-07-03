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
                Based in buea Cameroon, with clients amd team members all over the globe, we are all 
about helping event organizers create, issue, track tickets and manage payments of their 
events tickets. We also help individuals easily get tickets to their favorite events online 
from the confort of their home.
                </p>
            </div>
        </div>
        <div className="aboutus-section">
            
            <div className="about-text" style={{textAlign:"right"}}>
                <div className="about-head">
                    How we Operate
                </div>
                <p>
                With 3 years of experience in helping both event organizers create, issue, track tickets 
and handle payments, as well as 
help individuals easily get tickets to their favorite events, conferences, seminars, festivals,
etc. 
We’ve grown, build productive teams and made the most of the available resources to 
better serve our clients.
                </p>
            </div>
            <img src="https://media.istockphoto.com/photos/high-angle-view-close-up-asian-woman-using-mobile-app-cinema-movie-picture-id1324465035?b=1&k=20&m=1324465035&s=170667a&w=0&h=FsfpHKvaNR05oit_Q96jO-0biZzt5Hzq4GitrCTqzMg=" alt="" style={{borderTopRightRadius:"3px",borderBottomRightRadius:"3px", height:"50%",marginBottom:"0px"}} className="about-image"/>
        </div></>
     );
}
 
export default About;