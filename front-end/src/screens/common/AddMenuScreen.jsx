import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getingredinet, addMenuItem, resetAddMenu } from "../../actions/adminActions";

const AddMenuScreen = () => {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // State to store the selected category
  const [selectedIngredients, setSelectedIngredients] = useState([]); // Use array to store selected ingredients

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Declare navigate hook

  const ingredients = useSelector((store) => store.getAllIngredients);
  const { loading, response, error } = ingredients;

  const addmenu = useSelector((store) => store.addmenu);
  const { loading1, response1, error1 } = addmenu;

  useEffect(() => {
    dispatch(getingredinet());
  }, [dispatch]);

  useEffect(() => {
    if (response1) {
      dispatch(resetAddMenu());
      navigate("/menu"); // Navigate to /menu on success
    } else if (error1) {
      console.error(error1);
      alert("Error while making API call");
    }
  }, [response1, error1, navigate, dispatch]);

  const handleDropdownChange = (event) => {
    setCategory(event.target.textContent); // Update the selected category
  };

  const handleIngredientChange = (id) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(id)) {
        return prev.filter((ingredientId) => ingredientId !== id); // Remove ingredient if already selected
      } else {
        return [...prev, id]; // Add ingredient to the list
      }
    });
  };

  const addMenu = () => {
    if (!menuName || !category || !price || selectedIngredients.length === 0) {
      alert("Please fill in all fields and select ingredients.");
      return;
    }
    dispatch(addMenuItem(menuName, category, price, selectedIngredients)); // Dispatch action to add menu item
  };

  return (
    <div className="container p-4 text-white" style={{ marginTop: "100px" }}>
      <h2>Add Menu</h2>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Menu Name</label>
          <input
            onChange={(e) => setMenuName(e.target.value)}
            className="form-control"
            value={menuName}
          />
        </div>
        <div className="mb-3">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {category || 'Category'}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li className="dropdown-item" onClick={handleDropdownChange}>
                VEG
              </li>
              <li className="dropdown-item" onClick={handleDropdownChange}>
                NONVEG
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            value={price}
          />
        </div>
        <table className="table table-striped text-white">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.data &&
              response.data.length > 0 &&
              response.data.map((ing) => (
                <tr key={ing.id}>
                  <td>{ing.id}</td>
                  <td>{ing.name}</td>
                  <td>
                    <input
                      onChange={() => handleIngredientChange(ing.id)}
                      type="checkbox"
                      value={ing.id}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={addMenu} className="btn btn-success" disabled={loading1}>
          {loading1 ? "Adding Menu..." : "Add Menu"}
        </button>
      </div>
    </div>
  );
};

export default AddMenuScreen;
