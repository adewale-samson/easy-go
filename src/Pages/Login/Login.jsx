import './Login.css'
import main from '../../Assets/main-img.svg'
import eyes from '../../Assets/eye.svg'
import Button from '../../Components/Button/Button'
import Nav from '../../Components/Nav/Nav'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const style = {width:'100%'}
const Login = () => {

  const initialValues = {email: "",firstname: "",lastname: "",password: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors]= useState({})
    const [isSubmit, setIstSubmit] = useState (false)
    const handleChange= (e)=>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIstSubmit(true)
        

    }
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values)=>{
        const errors ={};
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        const regexName = /^[^-\s\d][a-zA-Z\s-]+$/
        if(!values.email){
            errors.email= "Email is required"
        }else if (!regex.test(values.email)) {
            errors.email="Not a  valid input " }else{
            errors.email="Valid "
        }
        if(!values.firstname){
            errors.firstname= "First Name is required"
        }else if (!regexName.test(values.firstname)){
            errors.firstname="Field cannot be empty or filled with numbers"
        }else{
            errors.firstname="Valid"
        }
        if(!values.lastname){
            errors.lastname= "Last Name is required"
        }else if (!regexName.test(values.lastname)){
            errors.lastname="Field cannot be empty or filled with numbers"
        }else{
            errors.lastname="Valid"
        }
        if(!values.password){
            errors.password= "Password is required"
        }else if(values.password.length < 4){
            errors.password="Password must be more than 4 characters"
        }else if(values.password.length > 10){
            errors.password="Password cannot be greater than ten characters"
        }else{
            errors.password='Valid Input'
        }
        return errors}

  return (
    <section className="login-main-container">
        <div className="login-subcontainer1">
            <h2 className='login-heading'>Log In</h2>
            <p className='login-para'>Need a SendNow account? <small className='login-small'>Create an account</small></p>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="" className='login-label'>Username</label><br/>
                <input type="text" className='login-input login-input1' value={formValues.firstname} onChange={handleChange} /><br/>
                <p>{formErrors.firstname}</p>
                <label htmlFor="" className='login-label label-flex'>Password  <span className='label-show'><img src={eyes} alt="" />Show</span></label><br/>
                <input type="password" className='login-input' value={formValues.password} onChange={handleChange} /><br/>
                <p>{formErrors.firstname}</p>
                <label htmlFor="" className='login-label'>Forgot password?</label>
            </form>
        <Button text={'Log In'} style={style} className='btn-login' />
        </div>
        <div className="login-subcontainer2">
          <img src={main} alt="" className='sub2-image'/>
        </div>
        {/* <Nav /> */}
    </section>
  )
}

export default Login