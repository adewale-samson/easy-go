import './SignUp.css'
import main from '../../Assets/main-img.svg'
import eyes from '../../Assets/eye.svg'
import Button from '../../Components/Button/Button'
import Nav from '../../Components/Nav/Nav'
const style = {width:'154px', backgroundColor:'#fff', color:'#023047', margin:'0px', border: '1px solid #023047'}
const Login = () => {
  return (
    <section className="signup-main-container">
        <div className="signup-subcontainer1">
            <h2 className='signup-heading'>Welcome to SendEasy</h2>
            <p className='signup-para'>Create an account or <span className='signup-small'>log in</span></p>
            <form className='signup-form'>
                <label htmlFor="" className='signup-label'>Username</label><br/>
                <input type="text" className='signup-input login-input1'/><br/>
                <label htmlFor="" className='signup-label'>Email</label><br/>
                <input type="text" className='signup-input login-input1'/><br/>
                <label htmlFor="" className='signup-label'>Password  <span className='label-show'><img src={eyes} alt="" />Show</span></label><br/>
                <input type="text" className='signup-input input-space'/><br/>
                <input type="checkbox" name="promotions" id="" className='checkbox'/>
                <label htmlFor="promotions" className='signup-label label-text'>I don’t want to receive <span>promotional emails</span> from SendEasy.</label>
            </form>
            <p className='signup-paragraph'>By creating an account, you agree to our Terms and have read and acknowledge the Global Privacy Statement.</p>
        <Button text={'Sign up'} style={style}/>
        </div>
        <div className="signup-subcontainer2">
          <img src={main} alt="" className='sub2-image'/>
        </div>
        {/* <Nav /> */}
    </section>
  )
}

export default Login