import "./AddAddress.css";
import SetUpHeader from "../../Components/SetUpHeader/SetUpHeader";
import Button from "../../Components/Button/Button";
import profile_main from "../../Assets/profile_main.svg";

const Profile = () => {
  return (
    <div className="address-main-container">
      <div className="address-sub-container1">
        <SetUpHeader />
        <h1 className="address-heading">Add your address</h1>
        <p className="address-paragraph">
          But why? Believe it or not, we need a physical address to make sure
          your emails comply with <span className="international">international anti-spam laws</span>. Don’t have an
          official business address? Learn about <span className="international">physical address alternatives</span>
        </p>
        <form action="" method="post" className="address-form">
          <div className="address-line1">
            <label htmlFor="address-name">
              Address line 1 (Street address or post office box)
            </label>
            <br />
            <input type="text" id="address-name" className="address-input" />
          </div>
          <div className="address-website">
            <label htmlFor="address-name2">Address line 2</label>
            <br />
            <input type="text" id="address-name2" className="address-input" />
          </div>
          <div className="address-city">
            <div>
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                id="city"
                placeholder="Lagos"
                className="address-input city-input"
              />
            </div>
            <div>
              <label htmlFor="state">State/Province/Region</label>
              <br />
              <input
                type="text"
                id="state"
                placeholder="La"
                className="address-input city-input"
              />
            </div>
          </div>
          <div className="address-phone">
            <label htmlFor="address-phone">ZIP/Postal code</label>
            <br />
            <input
              type="text"
              id="address-phone"
              className="address-input"
            />
          </div>
          <div className='address-select'>
            <label htmlFor="Country">Country</label>
            <br />
            <select name="country" id="Country" className="address-input final-input ">
              <option value="">Nigeria</option>
              <option value="">Ghana</option>
              <option value="">Benin</option>
              <option value="">Togo</option>
            </select>
          </div>
          <Button
            text={"Continue"}
            style={{
              width: "173px",
              height: "54px",
              margin: "49px 0px 0px 0px",
            }}
          />
        </form>
      </div>
      <div className="address-sub-container2">
        <img src={profile_main} alt="" className="address_img" />
      </div>
    </div>
  );
};

export default Profile;
