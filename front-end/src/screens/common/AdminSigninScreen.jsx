import { useState, useEffect } from "react";
import { signin } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AdminSigninScreen.css"; // Ensure the correct path to your CSS file

// Yup Validation Schema
const validationSchema = Yup.object({
  username: Yup.string()
    .email("Enter a valid email address")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
});

const AdminSigninScreen = (props) => {
  const dispatch = useDispatch();

  const adminSignin = useSelector((store) => store.adminSignin);
  const { loading, error, response } = adminSignin;

  const onSignin = (values) => {
    dispatch(signin(values.username, values.password));
  };

  useEffect(() => {
    if (response) {
      sessionStorage.setItem("id", response.id);
      sessionStorage.setItem("email", response.email);
      sessionStorage.setItem("userName", response.userName);
      sessionStorage.setItem("role", response.role);
      sessionStorage.setItem("name", response.name);
      sessionStorage.setItem("Loggedin", true);
      sessionStorage.setItem("token", "Bearer " + response.token);
      if (response.role === "OWNER") {
        props.history.push("/revenue");
      } else if (response.role === "MANAGER") {
        props.history.push("/managechef");
      } else if (response.role === "CHEF") {
        props.history.push("/cheforders");
      } else if (response.role === "WAITER") {
        props.history.push("/waiterorders");
      } else if (response.role === "SUPPLIER") {
        props.history.push("/ingredients");
      }
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div className="admin-signin-container">
      <div className="admin-signin">
        <h2>Staff Signin</h2>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={onSignin}
        >
          <Form className="admin-signin-form-container">
            <div className="admin-signin-form-group">
              <label>Username</label>
              <Field
                name="username"
                type="text"
                placeholder="test@test.com"
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="admin-signin-form-group">
              <label>Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Xyz@123"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-actions">
              <button type="submit" className="signin-btn">Staff Signin</button>
            </div>
            {loading && <div className="loading">Loading...</div>}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminSigninScreen;
