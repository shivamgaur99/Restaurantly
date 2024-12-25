import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import {
  getingredinet,
  addMenuItem,
  resetAddMenu,
} from "../../actions/adminActions";

const AddMenuScreen = (props) => {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // State to store the selected value

  // console.log(category);
  const handleDropdownChange = (event) => {
    setCategory(event.target.textContent); // Update the selected value when an item is clicked
  };

  let ingredient = new Array();
  const addMenu = () => {
    console.log(ingredient);
    dispatch(addMenuItem(menuName, category, price, ingredient));
  };

  const ingredients = useSelector((store) => store.getAllIngredients);

  const { loading, response, error } = ingredients;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getingredinet());
  }, []);

  useEffect(() => {}, [error, response, loading]);

  let index = ingredient.length;
  const addingredient = (id) => {
    ingredient[index] = id;
    index++;
  };

  const addmenu = useSelector((store) => store.addmenu);
  const { loading1, response1, error1 } = addmenu;

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading1);
    console.log("response: ", response1);
    console.log("error: ", error1);

    if (response1) {
      // user successfully got registered

      dispatch(resetAddMenu());
      props.history.push("/menu");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading1, response1, error1]);

  return (
    <div className="container mt-5">
      <Header title="AddMenu" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Menu Name</label>
          <input
            onChange={(e) => {
              setMenuName(e.target.value);
            }}
            className="form-control"
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
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            className="form-control"
            placeholder=""
          />
        </div>
        <table className="table table-striped">
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
                      onChange={(e) => {
                        addingredient(ing.id);
                      }}
                      type="checkbox"
                      value={ing.id}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={addMenu} className="btn btn-success">
          Add Menu
        </button>
      </div>
    </div>
  );
};

export default AddMenuScreen;
