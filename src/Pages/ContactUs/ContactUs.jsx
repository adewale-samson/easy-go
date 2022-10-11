import SetUpHeader from "../../Components/SetUpHeader/SetUpHeader";
import contact from '../../Assets/contact_us.svg'
import './ContactUs.css'
import Button from "../../Components/Button/Button";

const ContactUs = () => {
  return (
    <section className='contact-container-main'>
      <div className="contact-sub1">
        <SetUpHeader />
        <h1 className="container-sub1-heading">Tell us about your contacts</h1>
        <p className='container-para'>
          This can include people who signed up to receive marketing emails from
          your organization, or those who solely receive transactional emails.
          Learn more about SendEasy contact types.
        </p>
        <form action="" className="contact-form">
            <label htmlFor="contact" className="contact-label-main">Do you have any contacts?</label><br />
            <input type="radio" name="contact-us" id="contact" className="contact-input"/>
            <label htmlFor="contact" className="contact-label">Yes</label><br/>
            <input type="radio" name="contact-us" id="contact" className="contact-input"/>
            <label htmlFor="" className="contact-label">No</label><br/>
            <input type="radio" name="contact-us" id="contact" className="contact-input"/>
            <label htmlFor="contact" className="contact-label">I'm not sure...</label>
        </form>
        <Button width='22.179%' text='Continue' margin='0px' />
      </div>
      <div className="contact-sub2">
        <img src={contact} alt="contact us page logo" className='contact-img'/>
      </div>
    </section>
  );
};

export default ContactUs;
