import './Contactus.css'
const Contactus = () => {
    return ( 
        <div className="contact-section" id="contactus">
            <div className="contact-header">
                Contact Us
            </div>
            <div className="contact-text">
                <input type="text" name="name" style={{padding:"1%",marginBottom:"2%", height:"2.5rem"}} placeholder="Name..."/>
                <input type="text" name="name" style={{padding:"1%",marginBottom:"2%", height:"2.5rem"}} placeholder="Email..."/>
                <input type="text" name="name" style={{padding:"1%",marginBottom:"2%", height:"2.5rem"}} placeholder="Subject..."/>
                <textarea style={{padding:"1%", height:"30vh"}} placeholder="Enter your comment here..."></textarea>
                <button style={{
                    marginTop:"2%",height:"40px"
                }}>SEND</button>
            </div>
        </div>
     );
}
 
export default Contactus;