import { useEffect } from 'react'
import { getallorders } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'
import {  paybill } from '../../actions/customerActions'

const CustomerGetOrdersScreen = (props) => {
  const getOrders = useSelector((store) => store.customerGetAllOrders)

  const { loading, response, error } = getOrders

  const dispatch = useDispatch()
  let role = sessionStorage['role']
  useEffect(() => {
    dispatch(getallorders())
  }, [])

  const custid = sessionStorage['id'];
  const updateOrder = () => {
    console.log('update order')
    console.log(custid)
    dispatch(paybill(custid))

    window.location.reload()
  }

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
                <th>Status</th>
                <th>Date</th>
                <th>Payment</th>
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
                      <td>{order.status}</td>
                      <td>{order.date}</td>
                      {order.status === 'UNPAID' && (
                        <td>
                          <button onClick={() => {
                          updateOrder();
                        }} className="btn btn-success">
                            Pay
                          </button>
                        </td>
                      )}
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

export default CustomerGetOrdersScreen
