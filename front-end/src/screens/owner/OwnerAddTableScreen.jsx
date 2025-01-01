import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTable, resetAddTable } from '../../actions/owneraction/ownerAction'
import { useNavigate } from 'react-router-dom' // Import useNavigate

const OwnerAddTableScreen = () => {
  const [tableNo, setTableNo] = useState('')
  const [capacity, setCapacity] = useState('')
  const [status, setStatus] = useState('FREE')

  const dispatch = useDispatch()
  const addTheTable = () => {
    dispatch(addTable(tableNo, capacity, status))
  }

  const Table = useSelector((store) => store.owneraddtable)
  const { loading, response, error } = Table

  const navigate = useNavigate() // Initialize navigate hook

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response) {
      // User successfully added table
      dispatch(resetAddTable())
      navigate('/ownertables') // Use navigate instead of props.history.push
    } else if (error) {
      // Error while making the API call
      console.log(error)
      alert('Error while making API call')
    }
  }, [loading, response, error, dispatch, navigate])

  return (
    <div className="container p-5 text-white" style={{ marginTop: '100px' }}>
      <h2 className="text-center">Add Table</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Table Number</label>
              <input
                onChange={(e) => {
                  setTableNo(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Capacity</label>
              <input
                onChange={(e) => {
                  setCapacity(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>
            <button
              onClick={() => {
                addTheTable()
              }}
              className="btn btn-success">
              Add Table
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerAddTableScreen
