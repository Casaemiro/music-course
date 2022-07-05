import './Howto.css'
const Howto = () => {
    return ( 
        <div className="howto-section">
            <div className="howto-section-header">Admission into Ewald music academy</div>
            <div className="howto-steps">
                <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 1</span>Click on Setup Event button or create event link on the navigation menu 
            </div>
            <div className="howto-steps">
            <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 2</span>Fill out the form which pops up and click submit 
            </div>
            <div className="howto-steps">
            <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 3</span>Share for you followers to subscribe for tickets 
            </div>
            
        </div>
     );
}
 
export default Howto;