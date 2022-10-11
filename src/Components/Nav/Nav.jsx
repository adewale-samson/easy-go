import send from "../../Assets/send-logo.svg";
import main from "../../Assets/main-img.svg";
import eye from "../../Assets/eye.svg";
import glass from "../../Assets/binocular.svg";
import Button from "../Button/Button";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav-flex">
      <li className='nav-logo'>
        <img src={send} alt="logo" />
      </li>
      <li className="nav-list nav-item">Products</li>
      <li className="nav-list nav-item">Resources</li>
      <li className="nav-list nav-item">Insipiration</li>
      <li className="nav-list nav-item">Pricing</li>
      <li className="nav-list hide-glass">
        <img src={glass} alt="binocular" />
      </li>
      <li className="nav-list">
        <Button width="104px" text="Log in" backgroundColor='#FB8500' color='#000000' />
      </li>
      <li className="nav-list">
        <Button width="125px" text="Sign Up" backgroundColor='#023047'/>
      </li>
      <span className="hamburger">&#9776;</span><span className="times">&times;</span>
    </ul>
    
    </div>
  );
};

export default Nav;
