import "./Login.css";
import main from "../../Assets/main-img.svg";
import eyes from "../../Assets/eye.svg";
import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext"
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

const style = { width: "100%", marginTop: '20px' };
const Login = () => {
  const { user, login } = UserAuth();
  const initialValues = {
    email: '',
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [hidePassword, setHidePassword] = useState(true)
  const [isLoading, setIsLoading] = useState(false);

  
  const showPasswordHandler = () => {
    setHidePassword(item => !item)
  }
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    console.log(formValues);
  };
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // setIsLoading(true)
    try {
      await login(formValues.email, formValues.password)
      setIsLoading(false)
      navigate('/SelectPlan')
    } catch (error) {
      // setIsLoading(false)
      console.log(error)
      // alert(error)
    }
         
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexLogin.test(values.email)) {
      errors.email = "Please enter a valid email!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
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
    isLoading ? <Spinner /> : <div className="login-page-container">
      <section className="login-main-container">
        <div className="login-subcontainer1">
          <h2 className="login-heading">Log In</h2>
          <p className="login-para">
            Need a SendNow account?{" "}
            <Link to='/SignUp' style={{textDecoration:'none'}}><small className="login-small">Create an account</small></Link>
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
            <label htmlFor="email" className="login-label">
                Email
              </label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                className="login-input login-input1"
                value={formValues.email}
                onChange={handleChange}
              />
            <p className="input-error-message">{formErrors.email}</p>
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
