import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../actions/owneraction/ownerAction";
import { resetAddEmployee } from "../../actions/owneraction/ownerAction";

const OwnerAddEmployee = (props) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const user = sessionStorage["role"];

  const dispatch = useDispatch();

  const role1 = sessionStorage["role"];
  const ownerAddEmployee = useSelector((store) => store.ownerAddEmployee);
  const { loading, response, error } = ownerAddEmployee;

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && response.status == 200) {
      // user successfully got registered
      dispatch(resetAddEmployee());
      if (user == "MANAGER") {
        props.history.push("/managechef");
      } else if (user == "OWNER") {
        props.history.push("/revenue");
      }
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

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
      setUsernameError("Enter a valid username ");
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
      if (password === confirmPassword) {
        dispatch(addEmployee(name, username, email, password, role));
      } else {
        setConfirmPasswordError("Passwords do not match");
      }
    }
  };

  return (
    <div className="container">
      <Header title="Add Employee" />
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
              />
              {nameError && <div style={{ color: "red" }}>{nameError}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                className="form-control"
                placeholder="test@gmail.com"
              />
              {usernameError && (
                <div style={{ color: "red" }}>{usernameError}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                placeholder="test@gmail.com"
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                placeholder="User@123"
              />
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              {confirmPasswordError && (
                <div style={{ color: "red" }}>{confirmPasswordError}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="form-select"
              >
                <option selected>Choose A Role</option>
                {user != "MANAGER" && role1 != "MANAGER" && (
                  <option value="MANAGER">Manager</option>
                )}
                {/* { && <option value="MANAGER">Manager</option>} */}
                <option value="CHEF">Chef</option>
                <option value="WAITER">Waiter</option>
                {user != "MANAGER" && (
                  <option value="SUPPLIER">Supplier</option>
                )}
              </select>
            </div>
            <div className="mb-3">
              <button onClick={onSignup} className="btn btn-success">
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerAddEmployee;


