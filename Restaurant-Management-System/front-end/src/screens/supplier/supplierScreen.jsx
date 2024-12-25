import {
  getingredinet,
  updatePrice,
} from '../../actions/supplieraction/supplierAction'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SupplierScreen = (props) => {
  const ingredients = useSelector((store) => store.supplierGetIngredient)

  const { loading, response, error } = ingredients

  const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getingredinet())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const updatePriceHere = (id, price) => {
    dispatch(updatePrice(id, price))
  }

  const updateIngredient = useSelector(
    (store) => store.supplierUpdateIngredient
  )

  const { response1, error1 } = updateIngredient

  useEffect(() => {
    console.log('use effect called: ')

    if (response1) {
      // user successfully got registered
      dispatch(getingredinet())

      props.history.push('/ingredients')
    } else if (error1) {
      // there is an error while making the API call
      console.log(error1)
      alert('error while making API call')
    }
  }, [response1])

  const addIngredientHere = () => {
    props.history.push('/addingredients')
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Ingredient_id</th>
            <th>Ingredient</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((ing) => (
              <tr key={ing.ingredient_id}>
                <td>{ing.ingredient_id}</td>
                <td>{ing.ingredient}</td>
                <td>
                  <input
                    type="number"
                    placeholder={ing.price}
                    className="fw-bold form-control-sm"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          addIngredientHere();
        }}
        className="btn btn-warning"
      >
        Add/Update Ingredient
      </button>
    </div>
  )
}

export default SupplierScreen
