import './About.css'
import aboutimg1 from './images/DSC_2185.JPG'
import aboutimg2 from './images/DSC_2630.JPG'

const About = () => {
    return (
        <>
            <div className="aboutus-section" id="aboutus">

                <img src={aboutimg1} alt="" style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", height: "320px", marginBottom: "0px" }} className="about-image" />

                <div className="about-text">
                    <div className="about-head">
                        About Us
                    </div>
                    <p>
                        Ewald music academy is an institution for effectively training musicians and sound engineers in the fields of music and thearther arts as a whole. By training musicians and technicians, we provide a solution to sustainable developement goals (poverty, unemployment). We are base in Buea
                    </p>
                </div>
            </div>
            <div className="aboutus-section">

                <div className="about-text" style={{ textAlign: "right" }}>
                    <div className="about-head">
                        How we Operate
                    </div>
                    <p>
                        For the past 5 years, we have been running a 3 months intensive onsite training once every year after which there is a graduation and certification event. We also added this online platform to enable our students have access to the right learning material and also  provide a way for us to work effeciently with our students out of town
                    </p>
                </div>
                <img src={aboutimg2} alt="" style={{ borderTopRightRadius: "3px", borderBottomRightRadius: "3px", height: "320px", marginBottom: "0px" }} className="about-image" />
            </div></>
    );
}

export default About;