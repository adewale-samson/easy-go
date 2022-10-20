import "./Login.css";
import main from "../../Assets/main-img.svg";
import eyes from "../../Assets/eye.svg";
import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const style = { width: "100%" };
const Login = () => {
  const initialValues = {
    username: "",
    password: "",
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
            <small className="login-small">Create an account</small>
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
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
            </div>
            <p>{formErrors.username}</p>
            <div>
              <label htmlFor="password" className="login-label label-flex">
                Password{" "}
                <span className="label-show">
                  <img src={eyes} alt="" />
                  Show
                </span>
              </label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                className="login-input"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <label htmlFor="" className="login-label">
              Forgot password?
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
