import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMenu } from "../../actions/adminActions";
import { useLocation, useHistory } from "react-router-dom";

const EditMenu = (props) => {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const location = useLocation();
  const menuObject = location.state.menu;
  console.log(menuObject);

  const id = menuObject.id;
  console.log(id);

  // const menu = useSelector((store) =>
  //   store.getallmenu.response.data.find((item) => item.id === id)
  // );
  // console.log(menu);
  const dispatch = useDispatch();
  const history = useHistory();

  // const editMenu = () => {
  //   console.log(price);
  //   dispatch(updateMenu(id, menuName, price, category))
  //   .then(() => {
  //     // Redirect on success
  //     history.push("/menu");
  //   })
  //   .catch((error) => {
  //     // Handle error and show alert
  //     console.error("Error updating menu:", error);
  //     alert("Failed to update menu. Please try again."); // Show error alert
  //     history.push("/menu");
  //   });;
  // };

  const editMenu = async () => {
    try {
      await dispatch(updateMenu(id, menuName, price, category));
      alert("Update Successfully");
      history.push("/menu"); // Redirect on success
    } catch (error) {
      console.error("Error updating menu:", error);
      alert("Failed to update menu. Please try later."); // Show error alert
      history.push("/menu");
    }
  };

  const menuId = props.match.params.id; // Extract menu ID from route params
  console.log(menuId);

  //   const menu = menuData.find((item) => item.id === menuId);
  //   console.log(menu);
  // Fetch the menu item to pre-fill the form
  //   const menu = useSelector((store) =>
  //     store.getallmenu.response.data.find((item) => item.id === menuId)
  //   );

  useEffect(() => {
    if (menuObject) {
      setMenuName(menuObject.menuName);
      setPrice(menuObject.price);
      setCategory(menuObject.category);
    }
  }, [menuObject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMenu = {
      id: menuId,
      menuName,
      price,
      category,
    };
    dispatch(updateMenu(updatedMenu)); // Dispatch an action to update the menu
    props.history.push("/menuscreen"); // Redirect back to the menu screen
  };

  return (
    <div className="container">
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
                onClick={() => {
                  editMenu();
                }}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-3"
                onClick={() => props.history.push("/menu")}
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
