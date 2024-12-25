import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { getallordersWithId, paybill } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'

const AcceptPaymentScreen = (props) => {
  const getOrders = useSelector((store) => store.customerGetAllOrders)

  const [custid, setCustid] = useState('')
  const { loading, response, error } = getOrders

  const dispatch = useDispatch()

  const updateOrder = () => {
    console.log('update order')
    console.log(custid)
    dispatch(paybill(custid))

    window.location.reload()
  }

  const orders = () => {
    dispatch(getallordersWithId(custid))
  }

  console.log('rohit')
  console.log(response)
  useEffect(() => {}, [error, response, loading])
  // let data = Array.prototype(stockChecking.response)

  return (
    <div className="container mt-4">
      <input
        style={{ marginTop: 10 }}
        type="number"
        className="form-control-sm"
        placeholder="Customer ID..."
        onChange={(e) => {
          setCustid(e.target.value);
        }}
      />
      <button
        onClick={() => {
          orders();
        }}
        style={{ marginLeft: 5 }}
        className="btn btn-success"
      >
        Get Orders
      </button>
      <table className="table table-striped mt-3">
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
            response.data.map((order) => {
              return (
                order.status === 'UNPAID' && (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.amount}</td>
                    <td>{order.status}</td>
                    <td>{order.date}</td>
                    <td>
                      <button
                        onClick={() => {
                          updateOrder();
                        }}
                        className="btn btn-success"
                      >
                        Accept Payment
                      </button>
                    </td>
                  </tr>
                )
              );
            })}
        </tbody>
      </table>
    </div>
  )
}

export default AcceptPaymentScreen
