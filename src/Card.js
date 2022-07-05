import './Card.css'

const Card = ({ evtName }) => {
    const paymentEvents = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="card">
            <div className="event-name">{evtName}</div>
            <div><span className='lead'>Date</span>: 20th May</div>
            <div><span className='lead'>Venue</span>: Chariot Hotel</div>
            <div><span className='lead'>Time</span>: 4pm</div>
            <select onChange={paymentEvents}>
                <option>Gate Fee</option>
                <option>regular 2,000FCFA</option>
                <option>VIP 10,000FCFA</option>
            </select>
        </div>
    );
}

export default Card;