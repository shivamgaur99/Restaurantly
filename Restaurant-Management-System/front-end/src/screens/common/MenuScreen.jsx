import { useState, useEffect } from "react";
import { deleteMenuItem, getmenu } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { store } from "react-notifications-component";
import { useHistory } from "react-router-dom";

const MenuScreen = (props) => {
  const [search, setSearch] = useState("");

  const menu = useSelector((store) => store.getallmenu);

  const { loading, response, error } = menu;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getmenu());
  }, []);

  useEffect(() => {}, [error, response, loading]);

  const addMenu = () => {
    props.history.push("/addmenu");
  };

  const deleteMenu = async (menuId) => {
    try {
      if (window.confirm(`Are you sure you want to delete this menu item?`)) {
        await dispatch(deleteMenuItem(menuId));
        alert("Menu item deleted successfully.");
        window.location.reload();
        // history.push("/menu"); // Redirect on successful delete
      }
    } catch (error) {
      console.error("Error deleting menu item:", error);
      alert("Failed to delete menu item. Please try later."); // Show error alert
      history.push("/menu");
    }
  };

  const all = () => {
    setSearch("");
  };
  const veg = () => {
    setSearch("veg");
  };
  const nonveg = () => {
    setSearch("nonveg");
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="col-md-1">
          <button onClick={all} className="btn btn-info btn-block">
            All
          </button>
        </div>
        <div className="col-md-1">
          <button onClick={veg} className="btn btn-success btn-block">
            Veg
          </button>
        </div>
        <div className="col-md-1">
          <button onClick={nonveg} className="btn btn-danger btn-block">
            NonVeg
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.menuName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      val.category
                        .toLowerCase()
                        .startsWith(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((menu) => {
                    return (
                      <tr key={menu.id}>
                        <td>{menu.id}</td>
                        <td>{menu.menuName}</td>
                        <td>{menu.price}</td>
                        <td>{menu.category}</td>

                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              // const menuToEdit = response.data.find(
                              //   (menu) => menu.id === menu.id
                              // ); // Change menu.id to the correct ID
                              console.log(menu);
                              props.history.push(`/editmenu`, { menu });
                            }}
                          >
                            Edit
                          </button>
                        </td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteMenu(menu.id)}
                          >
                            Delete
                          </button>
                          {/* <button className="btn btn-danger" onClick={() => handleDelete(menu.id)}>Delete</button> */}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button onClick={addMenu} className="btn btn-warning">
            Add Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
