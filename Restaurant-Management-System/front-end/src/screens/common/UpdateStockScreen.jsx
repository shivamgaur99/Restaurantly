import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSupplier,
  updatestock,
  resetUpdateStock,
} from '../../actions/adminActions'

const UpdateStockScreen = (props) => {
  const dispatch = useDispatch()
  const string = window.location.pathname.split('/')

  const [qty, setQty] = useState('')
  console.log(string[2])

  const supplierChecking = useSelector((store) => store.supplierChecking)

  const { loading, response, error } = supplierChecking

  useEffect(() => {
    dispatch(getSupplier(string[2]))
  }, [])

  useEffect(() => {}, [error, response, loading])

  const updateStockhere = (id, name, qty) => {
    console.log(id + ' ' + name + ' ' + qty)
    dispatch(updatestock(id, name, qty))
  }

  const updateStock = useSelector((store) => store.updateStock)

  const { loading1, response1, error1 } = updateStock

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading1)
    console.log('response: ', response1)
    console.log('error: ', error1)

    if (response1) {
      // user successfully got registered
      console.log('rohit is here ' + response.status)
      dispatch(resetUpdateStock())
      props.history.push('/stocks')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading1, response1, error1])

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredient Name</th>
            <th>Price</th>
            <th>Enter Value</th>
            <th>Update Stock</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((supplier) => {
              return (
                <tr key={supplier.id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.ingredient}</td>
                  <td>{supplier.price}</td>
                  <td>
                    <input
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                      type="number"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        updateStockhere(string[2], supplier.ingredient, qty);
                      }}
                      className="btn btn-success">
                      Give Order
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UpdateStockScreen
