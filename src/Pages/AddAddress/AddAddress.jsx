import "./AddAddress.css";
import SetUpHeader from "../../Components/SetUpHeader/SetUpHeader";
import Button from "../../Components/Button/Button";
import profile_main from "../../Assets/profile_main.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../services/firebase";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

const AddAddress = () => {

  const {user} = UserAuth();
  let navigate = useNavigate();
  const addressID = doc(db, 'users', `${user?.email}`)
  const formik = useFormik({
    initialValues: {
      address1: "",
      address2: "",
      city: '',
      state: '',
      zip: '',
      country: 'Nigeria'
    },
    //validate form
    validationSchema: Yup.object({
      address1: Yup.string()
        .required("First name is required"),
      address2: Yup.string()
        .required("Last name is required"),
      city: Yup.string()
        .required('Business name is required'),
      state: Yup.string(),
      zip: Yup.string()
        .required('Phone number is required'),
    }),
    //submit form
    onSubmit: async (values, onSubmitProps) => {
      console.log(values);
      // let data = {...values}
      if(user?.email){
        await updateDoc(addressID, {
          UserInfo: arrayUnion({
            address: values
          })
        })
        navigate('/Dashboard')
      }
    }  
  })
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
        <form className="address-form" onSubmit={formik.handleSubmit}>
          <div className="address-line1">
            <label htmlFor="address-name">
              Address line 1 (Street address or post office box)
            </label>
            <br />
            <input type="text" id="address-name" className="address-input" name="address1"
              value={formik.values.address1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
          </div>
          <div className="address-website">
            <label htmlFor="address-name2">Address line 2</label>
            <br />
            <input type="text" id="address-name2" className="address-input" name="address2"
              value={formik.values.address2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
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
                name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
                name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              name="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className='address-select'>
            <label htmlFor="Country">Country</label>
            <br />
            <select name="country" id="Country" className="address-input final-input"
              value={formik.values.country}
              onChange={formik.handleChange}>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Benin">Benin</option>
              <option value="Togo">Togo</option>
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

export default AddAddress;
