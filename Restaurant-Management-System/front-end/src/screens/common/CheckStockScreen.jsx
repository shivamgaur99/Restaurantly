import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getstock } from '../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'

const CheckStockScreen = (props) => {
  const stockChecking = useSelector((store) => store.stockChecking)

  const { loading, response, error } = stockChecking

  const [search, setSearch] = useState('')

  const role = sessionStorage['role']

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getstock())
  }, [])

  useEffect(() => {}, [error, response, loading])
  // let data = Array.prototype(stockChecking.response)

  return (
    <div className="container">
      <input
        style={{ marginTop: 5 }}
        type="text"
        placeholder="Search..."
        className="form-control-sm"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ingredient</th>
            <th>Qty</th>
            {role !== 'MANAGER' && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data
              .filter((val) => {
                if (search === '') {
                  return val;
                } else if (
                  val.ingredient.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((ing) => {
                return (
                  <tr key={ing.id}>
                    <td>{ing.id}</td>
                    <td>{ing.ingredient}</td>
                    <td>{ing.qty}</td>

                    {role !== 'MANAGER' && (
                      <td>
                        <Link to={`/updatestock/${ing.id}`}>Update</Link>
                      </td>
                    )}
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  )
}

export default CheckStockScreen
