import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import "./LandingPage.css";
import gmail from '../../Assets/gmail.svg'
import hero from '../../Assets/hero-pic.svg'
import query from '../../Assets/query.svg'
import marketing from '../../Assets/marketing.svg'
import messaging from '../../Assets/messaging.svg'
import chatbox from '../../Assets/chatbox.svg'
import push from '../../Assets/push.svg'
import Offer from "../../Components/Offer/Offer";
import Footer from '../../Components/Footer/Footer'

const styleButton1 = {
    width: '147px',
    height: '50px',
    margin: '0px 25px 0px 0px',
    display: 'inline-block'
}
const styleButton2 = {
    width: '223px',
    height: '50px',
    backgroundColor: '#FB8500',
    border: '1px solid #023047',
    color: '#023047',
    margin: '0px',
    display: 'inline-block'
}
const offeringList = [
  {img: marketing, id: 0, heading: 'Email Marketing', text: 'Deliver valuable content straight to your audience’s inboxes'},
  {img: messaging, id: 1, heading: 'Text Messaging', text: 'Reach your prospects on their mobile phones while they’re on the go'},
  {img: chatbox, id: 2, heading: 'Chatbots', text: 'Use chatbots to connect with your audience in real time'},
  {img: push, id: 3, heading: 'Web Push', text: 'Connect with your subscribers, no matter what they’re doing online'}
]

const LandingPage = () => {
  return (
    <>
      <header className='hero-section'>
      <Nav style={{padding: '0px 44px 0px 165px', paddingTop: '30px'}}/>
      <div className="hero-main-container">
        <div className="hero-subcontainer1">
            <h1 className="hero-heading">
            Accelerate sales and grow your business with send easy
            </h1>
            <p className="hero-paragraph">
            Get all of the email marketing, CRM, and automation tools you need for increased profits, better workflows and happier customers
            </p>
            <div>
                <Button text={'Sign Up'} style={styleButton1}/>
                {/* <Button text={`${<img src={gmail} alt='gmail logo' />} Sign in with Google`} style={styleButton2}/> */}
                <Button img= {gmail} text={`Sign in with Google`} style={styleButton2}/>
            </div>
        </div>
        <div className="hero-subcontainer2">
            <img src={hero} alt="cartoon raising hand" className="hero-img" />
        </div>
      </div>
      <img src={query} alt="question mark" className="query-logo"/>
    </header>
    <section className='offering-parent-container'>
      <h2 className="offering-heading">Stay in touch with your customers wherever they are</h2>
      <ul className="offering-container">
        {
          offeringList.map((item, index) => 
            <Offer key={item.id} img={item.img} heading={item.heading} text={item.text}/>
          )
        }
      </ul>
      
    </section>
    <Footer />
    </>
  );
};

export default LandingPage;
