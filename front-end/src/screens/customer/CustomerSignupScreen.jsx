import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/customerActions";
import Header from "../../components/Header";

const CustomerSignupScreen = (props) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");

  const [nameError, setNameError] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contactError, setContactError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();

  const customerSignup = useSelector((store) => store.customerSignup);
  const { loading, response, error } = customerSignup;

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response) {
      // user successfully got registered
      props.history.push("/customersignin");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const validateName = (name) => {
    const isValid = name.trim() !== "";
    setNameError(isValid ? "" : "Name is required");
    return isValid;
  };

  const validateUsername = (username) => {
    // Username validation using regex (example: user@gmail.com)
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
    setUserNameError(
      isValid ? "" : "Enter a valid username (e.g., user@gmail.com)"
    );
    return isValid;
  };

  const validateEmail = (email) => {
    // Basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(isValid ? "" : "Enter a valid email address");
    return isValid;
  };

  const validatePassword = (password) => {
    // Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special symbol
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(password);

    setPasswordError(
      isValid
        ? ""
        : "Password must contain at least one uppercase, one lowercase, one digit, and one special symbol"
    );

    return isValid;
  };

  const validateConfirmPassword = (confirmPassword) => {
    const isValid = confirmPassword === password;
    setConfirmPasswordError(isValid ? "" : "Passwords don't match");
    return isValid;
  };

  const validateContact = (contact) => {
    // Basic phone number validation (numeric and 10 digits)
    const isValid = /^\d{10}$/.test(contact);
    setContactError(isValid ? "" : "Enter a valid 10-digit contact number");
    return isValid;
  };

  const onSignup = () => {
    if (
      validateName(name) &&
      validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword) &&
      validateContact(contact)
    ) {
      dispatch(
        signup(name, username, email, password, contact, city, state, country)
      );
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column  align-items-center"
      style={{ backgroundImage: `url("image1.png")`, backgroundSize: "cover" }}
    >
      <Header title="Customer Signup" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="form">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className={`form-control ${nameError ? "is-invalid" : ""}`}
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">{nameError}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  onBlur={(e) => validateUsername(e.target.value)}
                  className={`form-control ${
                    usernameError ? "is-invalid" : ""
                  }`}
                  placeholder="test@gmail.com"
                />
                {usernameError && (
                  <div className="invalid-feedback">{usernameError}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={(e) => validateEmail(e.target.value)}
                  type="email"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  placeholder="test@gmail.com"
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onBlur={(e) => validatePassword(e.target.value)}
                  type="password"
                  className={`form-control ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  placeholder="User@123"
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  onBlur={(e) => validateConfirmPassword(e.target.value)}
                  type="password"
                  className={`form-control ${
                    confirmPasswordError ? "is-invalid" : ""
                  }`}
                  placeholder="Confirm your password"
                />
                {confirmPasswordError && (
                  <div className="invalid-feedback">{confirmPasswordError}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Contact</label>
                <input
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  onBlur={(e) => validateContact(e.target.value)}
                  className={`form-control ${contactError ? "is-invalid" : ""}`}
                />
                {contactError && (
                  <div className="invalid-feedback">{contactError}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">State</label>
                <input
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <button onClick={onSignup} className="btn btn-success">
                  Signup
                </button>
                <div className="float-end">
                  Existing user? <Link to="/customersignin">Signin here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignupScreen;

{
  /* <div>
      <Header title="Customer Signup" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="form">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className={`form-control ${nameError ? "is-invalid" : ""}`}
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">{nameError}</div>
                )}
              </div>
              <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onBlur={(e) => validateUsername(e.target.value)}
            className={`form-control ${usernameError ? "is-invalid" : ""}`}
            placeholder="test@gmail.com"
          />
          {usernameError && (
            <div className="invalid-feedback">{usernameError}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={(e) => validateEmail(e.target.value)}
            type="email"
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            placeholder="test@gmail.com"
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={(e) => validatePassword(e.target.value)}
            type="password"
            className={`form-control ${passwordError ? "is-invalid" : ""}`}
            placeholder="User@123"
          />
          {passwordError && (
            <div className="invalid-feedback">{passwordError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            onBlur={(e) => validateConfirmPassword(e.target.value)}
            type="password"
            className={`form-control ${
              confirmPasswordError ? "is-invalid" : ""
            }`}
            placeholder="Confirm your password"
          />
          {confirmPasswordError && (
            <div className="invalid-feedback">{confirmPasswordError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            onChange={(e) => {
              setContact(e.target.value);
            }}
            onBlur={(e) => validateContact(e.target.value)}
            className={`form-control ${contactError ? "is-invalid" : ""}`}
          />
          {contactError && (
            <div className="invalid-feedback">{contactError}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
              <div className="mb-3">
                <button onClick={onSignup} className="btn btn-success">
                  Signup
                </button>
                <div className="float-end">
                  Existing user? <Link to="/customersignin">Signin here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
