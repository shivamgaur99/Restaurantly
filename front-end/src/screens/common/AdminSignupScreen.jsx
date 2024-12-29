import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/adminActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AdminSignupScreen.css";

const AdminSignupScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const adminSignup = useSelector((store) => store.adminSignup);
  const { loading, response, error } = adminSignup;

  useEffect(() => {
    if (response) {
      history.push("/admin/signin");
    } else if (error) {
      alert("Error while making API call");
    }
  }, [loading, response, error, history]);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    username: Yup.string()
      .email("Invalid email address")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const onSignup = (values) => {
    dispatch(
      signup(
        values.name,
        values.username,
        values.email,
        values.password,
        values.role
      )
    );
  };

  return (
    <div className="admin-signup-container">
      <div className="admin-signup">
        <h2>Admin Signup</h2>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            role: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSignup}
        >
          {() => (
            <Form className="admin-signup-form-container">
              <div className="admin-signup-form-group">
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" placeholder="Enter your name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="admin-signup-form-group">
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="admin-signup-form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="test@test.com" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="admin-signup-form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" placeholder="*****" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="admin-signup-form-group">
                <label htmlFor="role">Role</label>
                <Field as="select" name="role">
                  <option value="">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Chef">Chef</option>
                  <option value="Waiter">Waiter</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Owner">Owner</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="signup-btn">
                  Signup
                </button>
                <div className="signin-link">
                  Existing user? <Link to="/admin/signin">Signin here</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminSignupScreen;
