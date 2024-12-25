import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMOrders,
  getChefs,
  postApprovedOrder,
} from "../../actions/ManagerActions";

const ManagerManageChefScreen = (props) => {
  const managerGetOrders = useSelector((store) => store.managerGetOrders);
  const { loading, response, error } = managerGetOrders;

  const getAllChefs = useSelector((store) => store.getAllChefs);
  const { loading1, response1, error1 } = getAllChefs;

  const managerApproveOrder = useSelector((store) => store.managerApproveOrder);
  const { loading2, response2, error2 } = managerApproveOrder;

  const [chef, setChef] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMOrders());
    dispatch(getChefs());
  }, [response2]);

  const approveOrder = (customerId, chefId) => {
    dispatch(postApprovedOrder(chefId, customerId));
  };

  return (
    <div>
      {error && <h1>No Orders to Assign</h1>}
      {response &&
        response.data.map((sub, index) => {
          return (
            <div className="container mt-4">
              {error && <h1>No Orders to Assign</h1>}
              {response &&
                response.data.map((sub, index) => (
                  <div key={index} className="mb-4">
                    <div className="alert alert-primary" role="alert">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Menu</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sub.map((child, i) => (
                            <tr key={i}>
                              <td>{child.menuName}</td>
                              <td>{child.qty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mt-2 pt-2 border-top">
                        <select
                          onChange={(e) => {
                            setChef(e.target.value);
                          }}
                          className="form-select"
                        >
                          <option value="">Choose A Chef</option>
                          {response1 &&
                            response1.data.map((chef) => (
                              <option key={chef.id} value={chef.id}>
                                {chef.id}
                              </option>
                            ))}
                        </select>
                        <button
                          onClick={() => {
                            approveOrder(sub[0].custId, chef);
                          }}
                          type="button"
                          className="btn btn-primary btn-sm mt-2"
                        >
                          Approve Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
    </div>
  );
};

export default ManagerManageChefScreen;
