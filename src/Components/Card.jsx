import './Card.css'
const Card = ({heading, paragraph, amount, contact}) => {
  return (
    <article className='card-container'>
        <div className="card-heading-check">
            <h3 className="card-h3">{heading}</h3>
            <span className="dot"></span>
        </div>
        <p className="card-para">{paragraph}</p>
        <p className="pay-para">You’ll pay</p>
        <h4 className="pay-amount"><span className='dollar'>$</span>{amount}</h4>
        <p className="month">a month</p>
        <p className="contacts">{contact}</p>
    </article>
  )
}

export default Card