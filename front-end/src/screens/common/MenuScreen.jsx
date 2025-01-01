import { useState, useEffect } from "react";
import { deleteMenuItem, getmenu } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const MenuScreen = () => {
  const [search, setSearch] = useState("");

  const menu = useSelector((store) => store.getallmenu);

  const { loading, response, error } = menu;

  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getmenu());
  }, [dispatch]);

  useEffect(() => {}, [error, response, loading]);

  const addMenu = () => {
    navigate("/addmenu"); // Use navigate instead of props.history.push
  };

  const deleteMenu = async (menuId) => {
    try {
      if (window.confirm(`Are you sure you want to delete this menu item?`)) {
        await dispatch(deleteMenuItem(menuId));
        alert("Menu item deleted successfully.");
        // You can choose to reload data here instead of refreshing the page
        dispatch(getmenu());
      }
    } catch (error) {
      console.error("Error deleting menu item:", error);
      alert("Failed to delete menu item. Please try later.");
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
    <div className="container p-5 text-white" style={{ marginTop: "100px" }}>
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
          <table className="table table-striped text-white">
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
                      <tr key={menu.id} className="text-white">
                        <td>{menu.id}</td>
                        <td>{menu.menuName}</td>
                        <td>{menu.price}</td>
                        <td>{menu.category}</td>

                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              navigate(`/editmenu`, { state: { menu } }); // Use navigate instead of history.push
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
