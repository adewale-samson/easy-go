import './Offer.css'

const Offer = ({img, heading, text}) => {
  return (
    <div className='offer-container'>
        <img src={img} alt="" className='offer-image'/>
        <h4 className='offer-heading'>{heading}</h4>
        <p className='offer-paragraph'>{text}</p>
    </div>
  )
}

export default Offer