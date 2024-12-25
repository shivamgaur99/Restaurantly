import { useEffect } from 'react'
import { getallorders } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'

const CustomerOrderDetailsScreen = (props) => {
  const getOrders = useSelector((store) => store.customerGetAllOrders)

  const { loading, response, error } = getOrders

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallorders())
  }, [])

  console.log('rohit')
  console.log(response)
  useEffect(() => {}, [error, response, loading])
  // let data = Array.prototype(stockChecking.response)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.id}</td>
                      <td>{order.amount}</td>
                      <td>{order.category}</td>
                      <td>{order.status}</td>
                      <td>
                        <button className="btn btn-success">View Details</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CustomerOrderDetailsScreen
