import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { signin } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
const AdminSigninScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const adminSignin = useSelector((store) => store.adminSignin);
  const { loading, error, response } = adminSignin;

  const dispatch = useDispatch();
  const onSignin = () => {
    dispatch(signin(username, password));
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
      if (response.role == "OWNER") {
        props.history.push("/revenue");
      } else if (response.role == "MANAGER") {
        props.history.push("/managechef");
      } else if (response.role == "CHEF") {
        props.history.push("/cheforders");
      } else if (response.role == "WAITER") {
        props.history.push("/waiterorders");
      } else if (response.role == "SUPPLIER") {
        props.history.push("/ingredients");
      }
    } else if (response && response.status == "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div
    className="container-fluid vh-100 d-flex flex-column  align-items-center"
    style={{ backgroundImage: `url("image1.png")`, backgroundSize: "cover" }}
    >
      <Header title="Staff Signin" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="form">
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="test@test.com"
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Xyz@123"
                  type="password"
                />
              </div>
              <div className="mb-3">
                <button onClick={onSignin} className="btn btn-success">
                  Staff Signin
                </button>
              </div>
            </div>
            {loading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSigninScreen;
