import "./ActivateAccount.css";
import Nav from "../../Components/Nav/Nav";
import main from "../../Assets/main-img.svg";

const ActivateAccount = () => {
  return (
    <section className="activate-page-container">
      <div className="activate-main-container">
        <div className="activate-subcontainer1">
          <h1 className="activate-main-heading">Check your email</h1>
          <p className="activate-first-para">
            We’ve sent a message to <span>youremail@me.com</span> with a link to activate
            your account.
          </p>
          <h4 className="activate-sub-heading">Didnt get an email?</h4>
          <p className="activate-second-para">
          If you don’t see an email from us within a few minutes, a few things could have happened:
          </p>
          <ul className="activate-list-container">
            <li className="activate-list-item"> The email is in your spam folder. (Sometimes things get lost in there.)</li>
            <li className="activate-list-item"> The email  address you entered had a mistake or typo, (Happens to the best of us.)</li>
            <li className="activate-list-item"> You accidentally gave us another email address. (Usually a work or personal one instead of the one you meant.)</li>
            <li className="activate-list-item"> We can’t deliver the email to this address. (Usually because of corporate firewalls or filtering.)</li>
          </ul>
          <p className="activate-third-para">Re-enter your email and try again</p>
        </div>
        <div className="activate-subcontainer2">
          <img src={main} alt="" className="activate-image" />
        </div>
      </div>
      <div className="activate-nav-position">
        <Nav />
      </div>
    </section>
  );
};

export default ActivateAccount;
