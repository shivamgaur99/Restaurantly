import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "../../actions/adminActions";
import { useLocation, useNavigate } from "react-router-dom";

const EditMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const location = useLocation();
  const menuObject = location.state?.menu;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuObject) {
      setMenuName(menuObject.menuName);
      setPrice(menuObject.price);
      setCategory(menuObject.category);
    }
  }, [menuObject]);

  const editMenu = async () => {
    try {
      await dispatch(updateMenu(menuObject.id, menuName, price, category));
      alert("Update Successfully");
      navigate("/menu"); // Redirect on success
    } catch (error) {
      console.error("Error updating menu:", error);
      alert("Failed to update menu. Please try later.");
      navigate("/menu");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMenu();
  };

  return (
    <div className="container p-5 text-white" style={{ marginTop: "100px" }}>
      <div className="row mt-3">
        <div className="col-md-12">
          <h2 className="my-4">Edit Menu Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="menuName">Menu Name:</label>
              <input
                type="text"
                id="menuName"
                className="form-control"
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="btn-group mt-3">
              <button
                type="submit"
                className="btn btn-primary mr-4"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-3"
                onClick={() => navigate("/menu")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
