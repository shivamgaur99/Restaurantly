import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../actions/customerActions";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CustomerSigninScreen.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .email("Enter a valid email address")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
});

const CustomerSigninScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customerSignin = useSelector((store) => store.customerSignin);
  const { loading1, error1, response1 } = customerSignin;

  useEffect(() => {
    if (response1) {
      sessionStorage.setItem("id", response1.id);
      sessionStorage.setItem("email", response1.email);
      sessionStorage.setItem("name", response1.name);
      sessionStorage.setItem("userName", response1.username);
      sessionStorage.setItem("contact", response1.contact);
      sessionStorage.setItem("token", "Bearer " + response1.token);
      sessionStorage.setItem("Loggedin", true);
      sessionStorage.setItem("role", "CUSTOMER");
      navigate("/customermenu");
      window.location.reload();
    } else if (error1) {
      alert(error1); // Handle error message
    }
  }, [response1, error1, navigate]);

  const onSignin = (values) => {
    dispatch(signin(values.username, values.password)); // Dispatch signin action
  };

  return (
    <div className="customer-signin-container">
      <div className="customer-signin">
        <h2>Customer Signin</h2>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={onSignin}
        >
          <Form className="customer-signin-form-container">
            <div className="customer-signin-form-group">
              <label>Username</label>
              <Field
                name="username"
                type="text"
                placeholder="test@test.com"
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="customer-signin-form-group">
              <label>Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Xyz@12345"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-actions">
              <button type="submit" className="signin-btn" disabled={loading1}>
                {loading1 ? "Signing In..." : "Signin"}
              </button>
              <div className="signup-link">
                New User? <Link to="/signup">Signup here</Link>
              </div>
            </div>
          </Form>
        </Formik>

        {loading1 && <div className="loading-spinner text-center">Loading...</div>}
        {error1 && <div className="error-message text-center">{error1}</div>} {/* Display error if any */}
      </div>
    </div>
  );
};

export default CustomerSigninScreen;
