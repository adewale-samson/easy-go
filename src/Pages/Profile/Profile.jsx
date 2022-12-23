import "./Profile.css";
import SetUpHeader from "../../Components/SetUpHeader/SetUpHeader";
import Button from "../../Components/Button/Button";
import profile_main from "../../Assets/profile_main.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      businessName: '',
      website: '',
      phone: ''
    },
    //validate form
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required"),
      lastName: Yup.string()
        .required("Last name is required"),
      businessName: Yup.string()
        .required('Business name is required'),
      website: Yup.string(),
      phone: Yup.string()
        .required('Phone number is required'),
      remember: Yup.array(),
      
    }),
    //submit form
    onSubmit: (values, onSubmitProps) => {
      console.log(values);
      // let data = {...values}
      axios.post('https://send-easy-4307a-default-rtdb.firebaseio.com/profile.json', values)
      .then(res => {
        console.log(res)
        navigate('/AddAddress')
        // setToken(res.data.token)
      })
      .catch(err => console.log(err))
      console.log(values)
      onSubmitProps.resetForm()
    },
  })
  return (
    <div className="profile-main-container">
      <div className="profile-sub-container1">
        <SetUpHeader />
        <h1 className="profile-heading">Let’s set up your account</h1>
        <form className="profile-form" onSubmit={formik.handleSubmit}>
          <div className="profile-name">
            <div>
              <label htmlFor="firstname" className={
              formik.touched.firstName && formik.errors.firstName
                ? "profile-error"
                : "login-password"
            }>
              {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : "First name"}
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                className="profile-input name-input"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div>
              <label htmlFor="lastname" className={
              formik.touched.lastName && formik.errors.lastName
                ? "profile-error"
                : "login-password"
            }>
              {formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : "Last name"}
              </label>
              <br />
              <input
                type="text"
                id="lastname"
                className="profile-input name-input"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="profile-business">
            <label htmlFor="business-name" className={
              formik.touched.businessName && formik.errors.businessName
                ? "profile-error"
                : "login-password"
            }>
            {formik.touched.businessName && formik.errors.businessName
              ? formik.errors.businessName
              : "Business name"}
            </label>
            <br />
            <input
              type="text"
              id="business-name"
              className="profile-input"
              name="businessName"
              value={formik.values.businessName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="profile-website">
            <label htmlFor="website" className={
              formik.touched.website && formik.errors.website
                ? "profile-error"
                : "login-password"
            }>
            {formik.touched.website && formik.errors.website
              ? formik.errors.website
              : "Website url"}
            </label>
            <br />
            <input
              type="text"
              id="website"
              className="profile-input"
              name="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="profile-phone">
            <label htmlFor="phone" className={
              formik.touched.phone && formik.errors.phone
                ? "profile-error"
                : "login-password"
            }>
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : "Phone number"}
            </label>
            <br />
            <input
              type="text"
              id="phone"
              className="profile-input last-input"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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
      <div className="profile-sub-container2">
        <img src={profile_main} alt="" className="profile_img" />
      </div>
    </div>
  );
};

export default Profile;
