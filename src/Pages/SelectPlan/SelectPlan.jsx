import Card from "../../Components/Card/Card";
import "./SelectPlan.css";
import compare from "../../Assets/compare.svg";
import down from "../../Assets/down-arrow.svg";
import SetUpHeader from "../../Components/SetUpHeader/SetUpHeader";
import Button from "../../Components/Button/Button";
import { useState} from "react";
import { Link } from "react-router-dom";
import checked from "../../Assets/check.svg";
import unchecked from "../../Assets/uncheck.svg";
import { useNavigate } from "react-router-dom";
import SelectModal from "../../Components/SelectModal/SelectModal";
import axios from 'axios'
import { getAuth } from "firebase/auth";


const SelectPlan = () => {
  const cardState = [
    {
      id: 0,
      heading: `Premium`,
      paragraph: `Advanced features for pros who need more customization.`,
      amount: `299`,
      contact: "with 10,000 contacts",
      email: `10,000 email sends`
    },
    {
      id: 1,
      heading: `Standard`,
      paragraph: `Better insights for growing business that want more customers.`,
      amount: `17`,
      contact: "with 6000 contacts",
      email: `6,000 email sends`
    },
    {
      id: 2,
      heading: `Essentials`,
      paragraph: `Must-have features for email senders who want added support.`,
      amount: `11`,
      contact: "with 5000 contacts",
      email: `5,000 email sends`
    },
    {
      id: 3,
      heading: `Free`,
      paragraph: `All the basics for businesses that are just getting started.`,
      amount: `0`,
      contact: "2,000 contacts maximum",
      email: `500 email sends`
    },
  ];

  const [checkbox, setCheckBox] = useState(false)
  const [updateUI, setUpdateUI] = useState({})
  const [modal, setModal] = useState(false)

  const backdropHandler = () => {
    setModal(false)
  }
  const navigate = useNavigate();
  const newObject = {...updateUI}
    console.log(Object.keys(newObject))

  const auth = getAuth();
  const user = auth.currentUser;

  const planHandler = () => {
    if (Object.keys(updateUI).length !== 0 && user) {
      axios.post('https://send-easy-4307a-default-rtdb.firebaseio.com/plan.json', updateUI)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      navigate('/Profile')
    } else {
      setModal(true);
    }
  }

  const clickHandler = (item, index) => {
    if (item.id === index) {
      console.log(index, item.id)
      setUpdateUI(item)
      setCheckBox(para => !para)
    // } if (currentTarget !== null) {
    //   console.log(index, item.id)
    //   console.log(currentTarget)
    //   return setCheckBox(para =>!para)
    }
  };
  // const clickHandler = (e, item, index) => {
  //   if (item.id === index) {
  //     console.log(e, index, item.id)
  //     setUpdateUI(item)
  //     setCheckBox(para => !para)
  //   // } if (currentTarget !== null) {
  //   //   console.log(index, item.id)
  //   //   console.log(currentTarget)
  //   //   return setCheckBox(para =>!para)
  //   }
  // };

  return (
      <>
        <SelectModal show={modal} clickBackdrop={backdropHandler}/>
        <section className="select-class">
      <SetUpHeader />
      <div className="card-flex">
        {cardState.map((item, index) => (
          <Card
            key={item.id}
            heading={item.heading}
            paragraph={item.paragraph}
            amount={item.amount}
            contact={item.contact}
            clickMe={() => clickHandler(item, index)}
            checkbox={checkbox}
          />
        ), cardState)}
      </div>
      <small className="compare">
        <img src={compare} alt="" className="compare-img" />
        Compare Plan Features
      </small>
      <div className="purchase-container">
        <h3 className="purchase-para">Purchase Summary</h3>
        <p className="bill">
          Billed in{" "}
          <span className="currency-span">
            US Dollars{" "}
            <img src={down} alt="drop down icon" className="drop-icon" />
          </span>
        </p>
      </div>
      <article className="list-container">
        <div className="plan-flex">
          {/* <h4 className="plan-list">Free plan</h4> */}
          <h4 className="plan-list">{updateUI.heading}</h4>
          <p>{updateUI.amount!==undefined?`$${updateUI.amount}.00`:""}</p>
        </div>
        <p className="contact-list">{updateUI.contact!==undefined?`${updateUI.contact}*`:''}</p>
        <p className="email-list">{updateUI.email!==undefined?`${updateUI.email}*`:''}</p>
        {/* <button className="btn-list">Next</button> */}
        <Button text="Next" buttonClick={planHandler}/>
      </article>
    </section>
      </>
  );
};

export default SelectPlan;
