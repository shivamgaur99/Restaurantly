import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../actions/owneraction/ownerAction";
import { resetAddEmployee } from "../../actions/owneraction/ownerAction";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./OwnerAddEmployee.css";

const OwnerAddEmployee = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const user = sessionStorage["role"];
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate hook

  const ownerAddEmployee = useSelector((store) => store.ownerAddEmployee);
  const { loading, response, error } = ownerAddEmployee;

  useEffect(() => {
    if (response && response.status === 200) {
      dispatch(resetAddEmployee());
      if (user === "MANAGER") {
        navigate("/managechef"); // Use navigate instead of props.history.push
      } else if (user === "OWNER") {
        navigate("/revenue"); // Use navigate instead of props.history.push
      }
    } else if (error) {
      alert("Error while making API call");
    }
  }, [loading, response, error, dispatch, user, navigate]);

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(username)) {
      setUsernameError("Enter a valid username");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setPasswordError(
        "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const onSignup = () => {
    if (validateForm()) {
      dispatch(addEmployee(name, username, email, password, role));
    }
  };

  return (
    <div className="owner-add-employee-container">
      <div className="owner-add-employee">
        <h2>Add Employee</h2>
        <div className="owner-add-employee-form">
          <div className="owner-add-employee-form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              type="text"
              placeholder="Enter employee name"
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </div>

          <div className="owner-add-employee-form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="input-field"
              type="text"
              placeholder="Enter username"
            />
            {usernameError && (
              <div className="error-message">{usernameError}</div>
            )}
          </div>

          <div className="owner-add-employee-form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              type="email"
              placeholder="test@example.com"
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>

          <div className="owner-add-employee-form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              type="password"
              placeholder="Enter password"
            />
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>

          <div className="owner-add-employee-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              type="password"
              placeholder="Confirm password"
            />
            {confirmPasswordError && (
              <div className="error-message">{confirmPasswordError}</div>
            )}
          </div>

          <div className="owner-add-employee-form-group">
            <label htmlFor="role">Role</label>
            <select
              onChange={(e) => setRole(e.target.value)}
              className="input-field"
            >
              <option value="">Choose a Role</option>
              {user !== "MANAGER" && (
                <option value="MANAGER">Manager</option>
              )}
              <option value="CHEF">Chef</option>
              <option value="WAITER">Waiter</option>
              {user !== "MANAGER" && (
                <option value="SUPPLIER">Supplier</option>
              )}
            </select>
          </div>

          <div className="form-actions">
            <button onClick={onSignup} className="signup-btn">
              Add Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerAddEmployee;
