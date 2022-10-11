import Card from "../../Components/Card/Card";
import "./SelectPlan.css";
import compare from "../../Assets/compare.svg";
import down from "../../Assets/down-arrow.svg";
import SetUpHeader from "../../Components/SetUpHeader/SetUpHeader";
import Button from "../../Components/Button/Button";

const SelectPlan = () => {
  const cardState = [
    {
      id: 10,
      heading: `Premium`,
      paragraph: `Advanced features for pros who need more customization.`,
      amount: `299`,
      contact: "with 10,000 contacts",
    },
    {
      id: 11,
      heading: `Standard`,
      paragraph: `Better insights for growing business that want more customers.`,
      amount: `17`,
      contact: "with 500 contacts",
    },
    {
      id: 12,
      heading: `Essentials`,
      paragraph: `Must-have features for email senders who want added support.`,
      amount: `11`,
      contact: "with 500 contacts",
    },
    {
      id: 13,
      heading: `Free`,
      paragraph: `All the basics for businesses that are just getting started.`,
      amount: `0`,
      contact: "2,000 contatcs maximum",
    },
  ];
  const clickHandler = (item, index) => {
    console.log(item)
    if (item.id === index) {
      console.log("we are moving", index, item.id);
    } else {
      console.log("try again");
    }
  };

  return (
    <section className="select-class">
      <SetUpHeader />
      <div className="card-flex">
        {cardState.map((item) => (
          <Card
            key={item.id}
            heading={item.heading}
            paragraph={item.paragraph}
            amount={item.amount}
            contact={item.contact}
            clickMe={(item, index) => clickHandler(item, index)}
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
          <h4 className="plan-list">Free plan</h4>
          <p>$0.00</p>
        </div>
        <p className="contact-list">2,000 contacts*</p>
        <p className="email-list">10,000 email sends*</p>
        {/* <button className="btn-list">Next</button> */}
        <Button text="Next" />
      </article>
    </section>
  );
};

export default SelectPlan;
