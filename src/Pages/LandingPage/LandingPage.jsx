import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import "./LandingPage.css";
import hero from "../../Assets/hero-pic.svg";
import query from "../../Assets/query.svg";
import marketing from "../../Assets/marketing.svg";
import messaging from "../../Assets/messaging.svg";
import chatbox from "../../Assets/chatbox.svg";
import push from "../../Assets/push.svg";
import Offer from "../../Components/Offer/Offer";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc'




const styleButton1 = {
  width: "147px",
  height: "50px",
  margin: "0px 25px 40px 0px",
  display: "inline-block",
};
const styleButton2 = {
  width: "223px",
  height: "50px",
  backgroundColor: "#FB8500",
  border: "1px solid #023047",
  color: "#023047",
  margin: "0px",
  display: "inline-block",
};
const offeringList = [
  {
    img: marketing,
    id: 0,
    heading: "Email Marketing",
    text: "Deliver valuable content straight to your audience’s inboxes",
  },
  {
    img: messaging,
    id: 1,
    heading: "Text Messaging",
    text: "Reach your prospects on their mobile phones while they’re on the go",
  },
  {
    img: chatbox,
    id: 2,
    heading: "Chatbots",
    text: "Use chatbots to connect with your audience in real time",
  },
  {
    img: push,
    id: 3,
    heading: "Web Push",
    text: "Connect with your subscribers, no matter what they’re doing online",
  },
];

const LandingPage = () => {

  const [user, loading] = useAuthState(auth)

  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user =>{
  //     setUser(user)
  //   })
  // }, [])
  // console.log(user)
  let navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const GoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user);
      navigate('/Dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
     <header className="hero-section">
        <Nav classStyle={'nav-pad'} style={{ padding: "20px 44px 0px 0px" }} />
        <div className="hero-main-container">
          <div className="hero-subcontainer1">
            <h1 className="hero-heading">
              Accelerate sales and grow your business with send easy
            </h1>
            <p className="hero-paragraph">
              Get all of the email marketing, CRM, and automation tools you need
              for increased profits, better workflows and happier customers
            </p>
            <div className="btn-landing-container">
              <Link to='/SignUp'><Button text={"Sign Up"} style={styleButton1} /></Link>
              {/* <Button text={`${<img src={gmail} alt='gmail logo' />} Sign in with Google`} style={styleButton2}/> */}
              <Button
                img={<FcGoogle />}
                // img={gmail}
                text={`Sign in with Google`}
                style={styleButton2}
                buttonClick={GoogleSignin}
              />
            </div>
          </div>
          <div className="hero-subcontainer2">
            <img src={hero} alt="cartoon raising hand" className="hero-img" />
            <img src={query} alt="question mark" className="query-logo" />
          </div>
        </div>
      </header>
      <section className="offering-parent-container">
        <h2 className="offering-heading">
          Stay in touch with your customers wherever they are
        </h2>
        <ul className="offering-container">
          {offeringList.map((item, index) => (
            <Offer
              key={item.id}
              img={item.img}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
