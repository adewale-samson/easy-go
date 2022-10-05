import greater from "../../Assets/greater.svg"
import Card from "../../Components/Card"
import "./SelectPlan.css"
import list from '../../Assets/list_icon.svg'
import compare from '../../Assets/compare.svg'

const SelectPlan = () => {
    const cardState = [
        {id: 1, heading: `Premium`, paragraph: `Advanced features for pros who need more customization.`, amount: `299`, contact: 'with 10,000 contacts'},
        {id: 2, heading: `Standard`, paragraph: `Better insights for growing business that want more customers.`, amount: `17`, contact: 'with 500 contacts'},
        {id: 3, heading: `Essentials`, paragraph: `Must-have features for email senders who want added support.`, amount: `11`, contact: 'with 500 contacts'},
        {id: 4, heading: `Free`, paragraph: `All the basics for businesses that are just getting started.`, amount: `0`, contact: '2,000 contatcs maximum'}
    ]
  return (
    <section className="select-class">
        <h1 className="account-heading">Account Set Up</h1>
        <div>
            <ul className="head-list">
                <li className="list-item item-plan">Plan <img src={greater} alt='greater sign' className="img-pad"/></li>
                <li className="list-item">Profile <img src={list} alt='greater sign' className="img-pad"/></li>
                <li className="list-item">Address <img src={list} alt='greater sign' className="img-pad"/></li>
                <li className="list-item">Contacts <img src={list} alt='greater sign' className="img-pad"/></li>
                <li className="list-item">Customize </li>
            </ul>
        </div>
        <div className="card-flex">
            {cardState.map((item) => 
                (<Card key={item.id} heading={item.heading} paragraph={item.paragraph} amount={item.amount} contact={item.contact}/>)
            )}
        </div>
        <small className="compare"><img src={compare} alt="" />Compare Plan Features</small>
    

    </section>
  )
}

export default SelectPlan