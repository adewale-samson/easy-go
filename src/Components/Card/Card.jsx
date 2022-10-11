import './Card.css'
import unchecked from '../../Assets/uncheck.svg'
import checked from '../../Assets/check.svg'
const Card = ({heading, paragraph, amount, contact, clickMe}) => {
  // const trialClick = (item) => console.log(item)
  
  return (
    <article className='card-container'>
        <div className="card-heading-check">
            <h3 className="card-h3">{heading}</h3>
            {/* <img src={unchecked} alt="" className='dot'/> */}
            <img src={checked} alt="" className='dot' onClick={clickMe}/>
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