import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApprovedOrd, postPrepareOrd } from '../../actions/ChefActions'

const ChefOrdersScreen = () => {
  const chefGetApprovedOrders = useSelector(
    (store) => store.chefGetApprovedOrders
  )
  const { loading, response, error } = chefGetApprovedOrders

  const chefPrepareOrder = useSelector((store) => store.chefPrepareOrder)
  const { loading1, response1, error1 } = chefPrepareOrder

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApprovedOrd())
  }, [response1])

  const prepareOrder = (orderId) => {
    dispatch(postPrepareOrd(orderId))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {(error || (response && response.data.length < 1)) && (
            <h1>No Orders to Prepare</h1>
          )}
          {response &&
            response.data.map((sub, index) => {
              return (
                <div key={index} className="mb-4">
                  <div role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Menu</th>
                              <th>Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sub.map((child, i) => {
                              return (
                                <tr key={i}>
                                  <td>{child.orderName}</td>
                                  <td>{child.quantity}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-2 pt-2 border-top">
                        <button
                          onClick={() => {
                            prepareOrder(sub[0].orderId);
                          }}
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Order Prepared
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default ChefOrdersScreen
