import list from '../../Assets/list_icon.svg'
import greater from '../../Assets/greater.svg'
import './SetUpHeader.css'


const SetUpHeader = () => {
  return (
    <>
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
    </>
  )
}

export default SetUpHeader