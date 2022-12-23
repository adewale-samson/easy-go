import "./SignUp.css";
import main from "../../Assets/main-img.svg";
import eyes from "../../Assets/eye.svg";
import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {auth} from '../../services/firebase';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const style = {
  width: "134px",
  backgroundColor: "#fff",
  color: "#023047",
  margin: "0px",
  border: "1px solid #023047",
};
const SignUp = () => {
  let navigate = useNavigate()
  const initialValues = {
    email: "",
    username: "",
    password: "",
    checkbox: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleCheck = (e) => {
    // (e) => setCheckBox(e.currentTarget.checked)
    console.log(e.target);
    console.log(e.currentTarget);
    const { name, value } = e.currentTarget;
    console.log(typeof (name, value));
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);

    // console.log(e.target.checked)
    // const { name, value } = e.target;
    // setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const authentication = getAuth();
    // const fireData = {formValues.email, formValues.password}

    createUserWithEmailAndPassword(authentication, formValues.email, formValues.password)
    .then(response => {
      navigate('/SelectPlan')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })

sendEmailVerification(authentication.currentUser)
  .then((res) => {
    return console.log(res)
    
  });
    // .catch((error) => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       toast.error('Email Already in Use');
    //     }
    //   })

  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be a minimum of 8 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password must not exceed 20 characters";
    }
    return errors;
  };
  return (
    <div className="signup-page-container">
      <section className="signup-main-container">
        <div className="signup-subcontainer1">
          <h2 className="signup-heading">Welcome to SendEasy</h2>
          <p className="signup-para">
            Create an account or{" "}
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <span className="signup-small">log in</span>
            </Link>
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="signup-username" className="signup-label">
                Username
              </label>
              <br />
              <input
                type="text"
                id="signup-username"
                name="username"
                className="signup-input login-input1"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div>
              <label htmlFor="signup-email" className="signup-label">
                Email
              </label>
              <br />
              <input
                type="text"
                id="signup-email"
                name="email"
                className="signup-input login-input1"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div>
              <label htmlFor="signup-password" className="signup-label">
                <span>Password</span>
                <span className="label-show">
                  <img src={eyes} alt="" />
                  Show
                </span>
              </label>
              <br />
              <input
                type="password"
                id="signup-password"
                name="password"
                className="signup-input input-space"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="promotions"
                className="checkbox"
                value={formValues.checkbox}
                onChange={handleCheck}
              />
              <label htmlFor="promotions" className="signup-label label-text">
                I don’t want to receive <span>promotional emails</span> from
                SendEasy.
              </label>
            </div>
            <p className="signup-paragraph">
              By creating an account, you agree to our Terms and have read and
              acknowledge the Global Privacy Statement.
            </p>
            <Button text={"Sign up"} style={style} />
          </form>
        </div>
        <div className="signup-subcontainer2">
          <img src={main} alt="" className="sub2-image" />
        </div>
        {/* <Nav /> */}
      </section>
      <div className="signup-nav-position">
        <Nav />
      </div>
    </div>
  );
};

export default SignUp;
