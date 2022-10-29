import './Dashboard.css'
import create from '../../Assets/create.svg'
import audience from '../../Assets/audience.svg'
import campaign from '../../Assets/campaign.svg'
import automation from '../../Assets/automation.svg'
import search from '../../Assets/search.svg'
import downArrow from '../../Assets/dashboard-down.svg'

const miniList = [
    {id: 0, img1: create, text: 'Create', img2: ''}, {id:1, img1: audience, text: 'Audience', img2: downArrow},{id:2, img1: campaign, text: 'Campaigns', img2: downArrow},{id:3, img1: automation, text: 'Automations', img2: downArrow},{id:4, img1: search, text: 'Search', img2: ''}
]
const Dashboard = () => {
  return (
    <div>
        <ul>
           { miniList.map(item => (
                <li key={item.id}><span><img src={item.img1} />{item.text}</span><span><img src={item.img2} /></span></li> 
            ))}
        </ul>
    </div>
  )
}

export default Dashboard