import './DashboardComponent.css'
import create from '../../Assets/create.svg'
import audience from '../../Assets/audience.svg'
import campaign from '../../Assets/campaign.svg'
import automation from '../../Assets/automation.svg'
import search from '../../Assets/search.svg'
import downArrow from '../../Assets/dashboard-down.svg'
import logo from '../../Assets/send-logo.svg'
import frame from '../../Assets/frame.svg'
import newuser from '../../Assets/newuser.svg'

const DashboardComponent = () => {
    const miniList = [
        {id: 0, img1: logo, text: '', img2: frame},{id: 1, img1: create, text: 'Create', img2: ''}, {id:2, img1: audience, text: 'Audience', img2: downArrow},{id:3, img1: campaign, text: 'Campaigns', img2: downArrow},{id:4, img1: automation, text: 'Automations', img2: downArrow},{id:5, img1: search, text: 'Search', img2: ''}
    ]
  return (
    <div className='dash-component-container'>
         <ul className='dash-list-container'>
           { miniList.map(item => (
                <li key={item.id} className='dash-list-item'><div className='dash-sub-list-item'><div className='list-image1'><img src={item.img1} /></div><div>{item.text}</div></div><div><img src={item.img2} /></div></li> 
            ))}
        </ul>
        <p className='dash-component-para'>Upgrade</p>
        <div className='newuser-flex'>
            <div className='new-user-logo'><img src={newuser} alt="new user logo" /></div>
            <div>
                <div className='dash-component-username'>NewUser1</div>
                <div className='dash-component-user-status'>New User</div>
            </div>
        </div>
    </div>
  )
}

export default DashboardComponent