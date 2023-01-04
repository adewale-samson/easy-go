import send from "../../Assets/send-logo.svg";
import glass from "../../Assets/binocular.svg";
import Button from "../Button/Button";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({style, classStyle}) => {
  const [navItem, setNavItem] = useState(false)
  function clickToggle() {
    setNavItem(para => !para)
  }

//   return (
//     <div className='nav-trial'>
//       <ul className="nav-flex" style={style}>
//       <li className='nav-logo'><Link to='/' style={{textDecoration:'none'}}>
//         <img src={send} alt="logo" /></Link>
//       </li>
//       <li className={navItem?"nav-list nav-item active":"nav-list nav-item"}>Products</li>
//       <li className={navItem?"nav-list nav-item active":"nav-list nav-item"}>Resources</li>
//       <li className={navItem?"nav-list nav-item  list-color active":"nav-list nav-item list-color"}>Insipiration</li>
//       <li className={navItem?"nav-list nav-item  list-color active":"nav-list nav-item list-color"}>Pricing</li>
//       {/* <li className="nav-list nav-margin hide-glass">
//         <img src={glass} alt="binocular" />
//       </li> */}
//       <div className={navItem?"btn-position hide-btn active":"btn-position hide-btn"}>
//       <li className="nav-list nav-margin button-display">
//         <Link to='/Login' style={{textDecoration:'none'}}><Button style={{width:"105px",  backgroundColor:'#FB8500', color:'#000000', border: '1px solid #023047', borderRadius: '3px'}} text="Log in" /></Link>
//       </li>
//       <li className="nav-list last-list-pad button-display">
//         <Link to='/SignUp' style={{textDecoration:'none'}}><Button style={{width:"105px", backgroundColor:'#023047', borderRadius: '3px'}} text="Sign Up" /></Link>
//       </li>
//       </div>
//       <div className="show-hamburger" onClick={clickToggle}>{navItem?<span className="times">&times;</span>:<span className="hamburger">&#9776;</span>}</div>
//     </ul>
    
//     </div>
//   );
// };

// export default Nav;



  return (
    <>
    <div className={navItem?'backdrop show-backdrop':"backdrop"}></div>
    <div className='nav-trial'>
      <ul className={`nav-flex ${classStyle}`} style={style}>
      <li className='nav-logo'><Link to='/' style={{textDecoration:'none'}}>
        <img src={send} alt="logo" /></Link>
      </li>
      <li className={navItem?"nav-list nav-item active":"nav-list nav-item"}>Products</li>
      <li className={navItem?"nav-list nav-item active":"nav-list nav-item"}>Resources</li>
      <li className={navItem?"nav-list nav-item  list-color active":"nav-list nav-item list-color"}>Insipiration</li>
      <li className={navItem?"nav-list nav-item  list-color active":"nav-list nav-item list-color"}>Pricing</li>
      {/* <li className="nav-list nav-margin hide-glass">
        <img src={glass} alt="binocular" />
      </li> */}
      <div className={navItem?"btn-position":"btn-position hide-btn"}>
      <li className="nav-list nav-margin button-display">
        <Link to='/Login' style={{textDecoration:'none'}}><Button style={{width:"105px",  backgroundColor:'#FB8500', color:'#000000', border: '1px solid #023047', borderRadius: '3px'}} text="Log in" /></Link>
      </li>
      <li className="nav-list last-list-pad button-display">
        <Link to='/SignUp' style={{textDecoration:'none'}}><Button style={{width:"105px", backgroundColor:'#023047', borderRadius: '3px'}} text="Sign Up" /></Link>
      </li>
      </div>
      <div className="show-hamburger" onClick={clickToggle}>{navItem?<span className="times">&times;</span>:<span className="hamburger">&#9776;</span>}</div>
    </ul>
    
    </div>
    </>
  );
};

export default Nav;



