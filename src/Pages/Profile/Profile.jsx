import "./Profile.css";
import SetUpHeader from '../../Components/SetUpHeader/SetUpHeader'
import Button from '../../Components/Button/Button'
import profile_main from "../../Assets/profile_main.svg";

const Profile = () => {
  return (
    <div className="profile-main-container">
      <div className="profile-sub-container1">
        <SetUpHeader />
        <h1 className="profile-heading">Let’s set up your account</h1>
        <form action="" method="post" className="profile-form">
          <div className="profile-name">
            <div>
              <label htmlFor="firstname">First name</label><br/>
              <input type="text" id="firstname" className="profile-input name-input"/>
            </div>
            <div>
              <label htmlFor="lastname">Last name</label><br/>
              <input type="text" id="lastname" className="profile-input name-input"/>
            </div>
          </div>
          <div className="profile-business">
            <label htmlFor="business-name">Business name</label><br/>
            <input type="text" id="business-name" className="profile-input"/>
          </div>
          <div className="profile-website">
            <label htmlFor="website">Website url</label><br/>
            <input type="text" id="website" className="profile-input"/>
          </div>
          <div className="profile-phone">
            <label htmlFor="phone">Phone number</label><br/>
            <input type="text" id="phone" className="profile-input last-input"/>
          </div>
          <Button
            text={"Continue"}
            style={{ width: "173px", height: "54px", margin: "49px 0px 0px 0px", }}
          />
        </form>
      </div>
      <div className="profile-sub-container2">
        <img src={profile_main} alt="" className="profile_img" />
      </div>
    </div>
  );
};

export default Profile;
