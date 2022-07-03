import './Card.css'

const Card = () => {
    return ( 
        <div className="card">
            <div className="event-name">Worship Exodus</div>
            <div><span className='lead'>Date</span>: 20th May</div>
            <div><span className='lead'>Venue</span>: Chariot Hotel</div>
            <div><span className='lead'>Time</span>: 4pm</div>
        </div>
     );
}
 
export default Card;