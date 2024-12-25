import { getingredinet } from '../../actions/adminActions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import {
  addIngredient,
  resetAddIngredient,
} from '../../actions/supplieraction/supplierAction'

const AddIngredientScreen = (props) => {
  const ingredients = useSelector((store) => store.getAllIngredients)

  const { loading, response, error } = ingredients

  const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getingredinet())
  }, [])

  const addIngredientHere = (id, price) => {
    dispatch(addIngredient(id, price))
    props.history.push('/ingredients')
  }
  const addingredients = useSelector((store) => store.supplierAddIngredient)

  const { response1, error1 } = addingredients

  useEffect(() => {
    if (response1) {
      // user successfully got registered
      dispatch(resetAddIngredient())
    } else if (error1) {
      // there is an error while making the API call
      console.log(error1)
      alert('error while making API call')
    }
  }, [response1, error1])

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Add Price</th>
            <th>Add Ingredient</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((ing) => (
              <tr key={ing.id}>
                <td>{ing.id}</td>
                <td>{ing.name}</td>
                <td>
                  <input
                    type="number"
                    className="fw-bold form-control-sm"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      addIngredientHere(ing.id, price);
                    }}
                    className="btn btn-success">
                    Add/Update Ingredient
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AddIngredientScreen
