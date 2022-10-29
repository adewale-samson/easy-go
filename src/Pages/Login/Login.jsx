import "./Login.css";
import main from "../../Assets/main-img.svg";
import eyes from "../../Assets/eye.svg";
import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const style = { width: "100%", marginTop: '20px' };
const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [hidePassword, setHidePassword] = useState(true)

  
  const showPasswordHandler = () => {
    setHidePassword(item => !item)
  }
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }
    
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be a minimum of 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must not exceed 10 characters";
    }
    return errors;
  };
  return (
    <div className="login-page-container">
      <section className="login-main-container">
        <div className="login-subcontainer1">
          <h2 className="login-heading">Log In</h2>
          <p className="login-para">
            Need a SendNow account?{" "}
            <Link to='/SignUp' style={{textDecoration:'none'}}><small className="login-small">Create an account</small></Link>
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="username" className="login-label">
                Username
              </label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                className="login-input login-input1"
                value={formValues.username}
                onChange={handleChange}
              />
            <p className='input-error-message'>{formErrors.username}</p>
            </div>
            <div className="input-container">
              <label htmlFor="password" className="login-label label-flex">
                Password{" "}
                
              </label>
              <span className="label-show" id="password-show" onClick={showPasswordHandler}>
                  <img src={eyes} alt="" />
                  Show
                </span>
              <br />
              <input
                type={hidePassword?'password':'text'}
                id="password"
                name="password"
                aria-describedby="password-show"
                className="login-input"
                value={formValues.password}
                onChange={handleChange}
              />
            <p className='input-error-message'>{formErrors.password}</p>
            </div>
            <label htmlFor="" className="login-label">
              <span>Forgot password?</span>
            </label>
            <Button text={"Log In"} style={style} className="btn-login" />
          </form>
        </div>
        <div className="login-subcontainer2">
          <img src={main} alt="" className="sub2-image" />
        </div>
      </section>
      <div className="login-nav-position">
        <Nav />
      </div>
    </div>
  );
};

export default Login;
