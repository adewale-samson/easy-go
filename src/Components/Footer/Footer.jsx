import './Footer.css'
import courier from '../../Assets/courier.svg'

const ListComponent = () => {
  return (
    <div className='footer-container'>
        <ul className='footer-ul'>
          <li className='item-bold'><a href="./">Products</a></li>
          <li className='foot-list-item'><a href="./">Why Send easy?</a></li>
          <li className='foot-list-item'><a href="./">Product Updates</a></li>
          <li className='foot-list-item'><a href="./">Email Marketing</a></li>
          <li className='foot-list-item'><a href="./">Websites</a></li>
          <li className='foot-list-item'><a href="./">Transactional Email</a></li>
          <li className='foot-list-item'><a href="./">How we compare</a></li>
          <li className='foot-list-item'><a href="./">Security</a></li>
          <li className='foot-list-item'><a href="./">Status</a></li>
          <li className='foot-list-item'><a href="./">Mobile App</a></li>
        </ul>
        <ul className='footer-ul'>
          <li className='item-bold'><a href="./">Resources</a></li>
          <li className='foot-list-item'><a href="./">Guide and tutorials</a></li>
          <li className='foot-list-item'><a href="./">Marketing Tips</a></li>
          <li className='foot-list-item'><a href="./">Free Marketing Tools</a></li>
          <li className='foot-list-item'><a href="./">Marketing Glossary</a></li>
          <li className='foot-list-item'><a href="./">Browse by Topic</a></li>
          <li className='foot-list-item'><a href="./">Intergrations Directory</a></li>
        </ul>
        <ul className='footer-ul'>
          <li className='item-bold'><a href="./">Community</a></li>
          <li className='foot-list-item'><a href="./">Agencies and Freelancers</a></li>
          <li className='foot-list-item'><a href="./">Developers</a></li>
          <li className='foot-list-item'><a href="./">Events</a></li>
        </ul>
        <ul className='footer-ul'>
          <li className='item-bold'><a href="./">Company</a></li>
          <li className='foot-list-item'><a href="./">Our Story</a></li>
          <li className='foot-list-item'><a href="./">Newsroom</a></li>
          <li className='foot-list-item'><a href="./">Annual Report</a></li>
          <li className='foot-list-item'><a href="./">Careers</a></li>
          <li className='foot-list-item'><a href="./">Accessibility</a></li>
        </ul>
        <ul className='footer-ul'>
          <li className='item-bold'><a href="./">Help</a></li>
          <li className='foot-list-item'><a href="./">Contact Us</a></li>
          <li className='foot-list-item'><a href="./">Hire an Expert</a></li>
        </ul>
        <div className='last-div'>
        <ul className='footer-ul footer-margin'>
          <li className='item-bold'><a href="./">Send easy</a></li>
          <li className='foot-list-item'><a href="./">Films, podcasts, and original series that celebrate the entrepreneurial spirit.</a></li>
          <li className='foot-list-item'><a href="./">Check it out <span className='arrow'>→</span></a></li>
        </ul>
        <ul className='footer-ul'>
          <li className='item-bold'><a href="./"><img src={courier} alt='' className='courier'/>Courier</a></li>
          <li className='foot-list-item'><a href="./">Expert insights, industry trends, and insipiring stories that help you live and work on your own terms.</a></li>
          <li className='foot-list-item'><a href="./">Learn more <span className='arrow'>→</span></a></li>
        </ul>
        
        </div>
        
    </div>
  )
}

export default ListComponent