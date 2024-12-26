import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCart,
  updateCartQty,
  cusPlaceOrder,
} from '../../actions/customerActions'
import * as AiIcons from 'react-icons/ai'

const CartScreen = (props) => {
  const customerCart = useSelector((store) => store.customerCart)
  const { loading, response, error } = customerCart

  const updateCart = useSelector((store) => store.updateCart)
  const { loading1, response1, error1 } = updateCart

  const customerPlaceOrder = useSelector((store) => store.customerPlaceOrder)
  const { loading2, response2, error2 } = customerPlaceOrder

  const dispatch = useDispatch()

  let total = 0

  useEffect(() => {
    dispatch(getCart())
  }, [])

  useEffect(() => {
    dispatch(getCart())
  }, [response1])

  const cartPlus = (menuId) => {
    dispatch(updateCartQty(menuId, 1))
  }
  const cartMinus = (menuId) => {
    dispatch(updateCartQty(menuId, -1))
  }

  let customerId = sessionStorage['id']

  const placeOrder = () => {
    const placeOrders = response.data.map((cart) => {
      return {
        custId: customerId,
        menuName: cart.menuName,
        qty: cart.quantity,
      }
    })

    dispatch(cusPlaceOrder(placeOrders))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Menu</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((cart) => {
                  total += cart.amount;
                  return (
                    <tr key={cart.menuId}>
                      <td>{cart.menuName}</td>
                      <td>{cart.quantity}</td>
                      <td>{cart.amount}</td>
                      <td>
                        <button
                          onClick={() => {
                            cartPlus(cart.menuId);
                          }}
                          className="btn btn-success"
                        >
                          <AiIcons.AiOutlinePlusSquare />
                          <span>1</span>
                        </button>
                        {cart.quantity > 0 && (
                          <button
                            onClick={() => {
                              cartMinus(cart.menuId);
                            }}
                            className="btn btn-danger"
                          >
                            <AiIcons.AiOutlineMinusSquare />
                            <span>1</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan="3">
                  <hr />
                  Total = {total}
                </td>
              </tr>
              {response2 && (
                <tr>
                  <td colSpan="3">Your Order is being Assigned to Our Chef</td>
                </tr>
              )}
            </tbody>
          </table>
          {!response2 && total > 0 && (
            <button
              onClick={() => {
                placeOrder();
              }}
              className="btn btn-success float-start"
            >
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartScreen
