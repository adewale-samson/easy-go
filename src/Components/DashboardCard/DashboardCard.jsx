import Button from '../Button/Button'
import './DashboardCard.css'


const DashboardCard = ({img, background, btnText, text, heading}) => {
  return (
    <div className='dash-card-container'>
        <div className='dash-card-div1' style={{backgroundColor: background}}>
            
        </div>
        <div className='dash-card-div2'>
            <h3 className='dash-card-heading'>{heading}</h3>
            <p className='dash-card-para'>{text}</p>
            <Button style={{width: '135px', height: '46px'}} text={btnText} />
        </div>
        <div className='dash-card-img'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default DashboardCard