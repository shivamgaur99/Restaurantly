import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/customerActions";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CustomerSignupScreen.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .email("Enter a valid email address")
    .required("Username is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm password is required"),
  contact: Yup.string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit contact number")
    .required("Contact number is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required")
});

const CustomerSignupScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customerSignup = useSelector((store) => store.customerSignup);
  const { loading, response, error } = customerSignup;

  useEffect(() => {
    if (response) {
      navigate("/signin");
    }
    if (error) {
      console.error("Signup Error:", error); // You can show the error in a more user-friendly way here.
    }
  }, [response, error, navigate]);

  const onSignup = (values) => {
    const { name, username, email, password, contact, address, city, state, country } = values;
    dispatch(
      signup(name, username, email, password, contact, address, city, state, country)
    );
  };

  return (
    <div className="customer-signup-container">
      <div className="customer-signup">
        <h2>Customer Signup</h2>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            contact: "",
            address: "",
            city: "",
            state: "",
            country: ""
          }}
          validationSchema={validationSchema}
          onSubmit={onSignup}
        >
          <Form className="customer-signup-form-container">
            <div className="customer-signup-form-group">
              <label>Name</label>
              <Field name="name" type="text" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Username</label>
              <Field name="username" type="text" placeholder="Enter your username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Email</label>
              <Field name="email" type="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Password</label>
              <Field name="password" type="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Confirm Password</label>
              <Field name="confirmPassword" type="password" placeholder="Confirm your password" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Contact</label>
              <Field name="contact" type="text" placeholder="Enter your contact number" />
              <ErrorMessage name="contact" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Address</label>
              <Field name="address" type="text" placeholder="Enter your address" />
              <ErrorMessage name="address" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>City</label>
              <Field name="city" type="text" placeholder="Enter your city" />
              <ErrorMessage name="city" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>State</label>
              <Field name="state" type="text" placeholder="Enter your state" />
              <ErrorMessage name="state" component="div" className="error-message" />
            </div>

            <div className="customer-signup-form-group">
              <label>Country</label>
              <Field name="country" type="text" placeholder="Enter your country" />
              <ErrorMessage name="country" component="div" className="error-message" />
            </div>

            <div className="form-actions">
              <button type="submit" className="signup-btn" disabled={loading}>
                {loading ? "Signing up..." : "Signup"}
              </button>
              <div className="signin-link">
                Existing user? <Link to="/signin">Signin here</Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CustomerSignupScreen;
