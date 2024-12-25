import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { signin } from "../../actions/customerActions";
const CustomerSigninScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const customerSignin = useSelector((store) => store.customerSignin);
  const { loading1, error1, response1 } = customerSignin;

  const dispatch = useDispatch();
  const onSignin = () => {
    dispatch(signin(username, password));
  };

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
      props.history.push("/customermenu");
    } else if (response1 && response1.status == "error") {
      alert(response1.error);
    } else if (error1) {
      alert(error1);
    }
  }, [loading1, error1, response1]);

  return (
    <div
      className="container-fluid vh-100 d-flex flex-column  align-items-center"
      style={{ backgroundImage: `url("image1.png")`, backgroundSize: "cover" }}
    >
      <Header title="Customer Signin" />
      <div className="form col-lg-4 col-md-6 col-sm-8">
        <div className="mb-3">
          <label
            style={{ color: "black", fontWeight: "bold" }}
            className="form-label"
          >
            Username
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: "black", fontWeight: "bold" }}
            className="form-label"
          >
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            placeholder="Xyz@12345"
            type="password"
          />
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
          <div
            className="float-end"
            style={{ color: "black", fontWeight: "bold" }}
          >
            New User? <Link to="/customersignup">Signup here</Link>
          </div>
        </div>
      </div>
      {loading1 && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default CustomerSigninScreen;
