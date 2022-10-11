import './Login.css'
import main from '../../Assets/main-img.svg'
import eyes from '../../Assets/eye.svg'
import Button from '../../Components/Button/Button'
import Nav from '../../Components/Nav/Nav'
const style = {width:'100%'}
const Login = () => {
  return (
    <section className="login-main-container">
        <div className="login-subcontainer1">
            <h2 className='login-heading'>Log In</h2>
            <p className='login-para'>Need a SendNow account? <small className='login-small'>Create an account</small></p>
            <form className='login-form'>
                <label htmlFor="" className='login-label'>Username</label><br/>
                <input type="text" className='login-input login-input1'/><br/>
                <label htmlFor="" className='login-label label-flex'>Password  <span className='label-show'><img src={eyes} alt="" />Show</span></label><br/>
                <input type="text" className='login-input'/><br/>
                <label htmlFor="" className='login-label'>Forgot password?</label>
            </form>
        <Button text={'Log In'} style={style} className='btn-login'/>
        </div>
        <div className="login-subcontainer2">
          <img src={main} alt="" className='sub2-image'/>
        </div>
        {/* <Nav /> */}
    </section>
  )
}

export default Login