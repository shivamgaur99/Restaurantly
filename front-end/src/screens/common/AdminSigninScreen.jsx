import { useState, useEffect } from "react";
import { signin } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; 
import "./AdminSigninScreen.css"; 

const validationSchema = Yup.object({
  username: Yup.string()
    .email("Enter a valid email address")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
});

const AdminSigninScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

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
  
      // Redirect based on the role
      if (response.role === "OWNER") {
        navigate("/revenue");
      } else if (response.role === "MANAGER") {
        navigate("/managechef");
      } else if (response.role === "CHEF") {
        navigate("/cheforders");
      } else if (response.role === "WAITER") {
        navigate("/waiterorders");
      } else if (response.role === "SUPPLIER") {
        navigate("/ingredients");
      }

      window.location.reload();
    } else if (error) {
      alert(error); // Display error message if there's an error
    }
  }, [response, error, navigate]);
  
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
                className="form-control"
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="admin-signin-form-group">
              <label>Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Xyz@123"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-actions">
              <button type="submit" className="signin-btn" disabled={loading}>
                {loading ? "Signing In..." : "Staff Signin"}
              </button>
            </div>
            {loading && <div className="loading-spinner text-center">Loading...</div>}
            {error && <div className="error-message text-center">{error}</div>}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminSigninScreen;
