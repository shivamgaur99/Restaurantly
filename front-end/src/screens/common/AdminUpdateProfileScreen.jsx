import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import {
  updateProfile,
  resetUpdateProfile,
  adminLogout,
} from "../../actions/adminActions";

const AdminUpdateProfile = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  
  useEffect(() => {
    setName(sessionStorage["name"]);
    setUserName(sessionStorage["userName"]);
    setEmail(sessionStorage["email"]);
    setRole(sessionStorage["role"]);
  }, []);
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate hook for routing

  const updateAdminProfile = () => {
    dispatch(updateProfile(name, username, email, role));
  };

  const updateprofile = useSelector((store) => store.adminupdateProfile);
  const { loading, response1, error } = updateprofile;

  const adminSignin = useSelector((store) => store.adminSignin);
  const { response } = adminSignin;

  useEffect(() => {
    if (response1) {
      dispatch(resetUpdateProfile());
      dispatch(adminLogout());
      navigate("/adminsignin"); // Redirect to admin signin page
    } else if (error) {
      alert("Error while making API call");
    }
  }, [loading, response1, error, dispatch, navigate]);

  return (
    <div className="container p-5 text-white" style={{ marginTop: "100px" }}>
      <h2 className="text-center">Update Profile</h2>
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
                  className="form-control"
                  value={name}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">UserName</label>
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={username}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                  value={email}
                  required
                />
              </div>
              <div className="mb-3">
                <button
                  onClick={updateAdminProfile}
                  className="btn btn-success"
                >
                  Update Profile
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

export default AdminUpdateProfile;
