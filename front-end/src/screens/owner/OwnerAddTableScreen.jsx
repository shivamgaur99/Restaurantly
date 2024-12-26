import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTable, resetAddTable } from '../../actions/owneraction/ownerAction'
import Header from '../../components/Header'

const OwnerAddTableScreen = (props) => {
  const [tableNo, setTableNo] = useState('')
  const [capacity, setCapacity] = useState('')
  const [status, setStatus] = useState('FREE')

  const dispatch = useDispatch()
  const addTheTable = () => {
    dispatch(addTable(tableNo, capacity, status))
  }

  const Table = useSelector((store) => store.owneraddtable)

  const { loading, response, error } = Table

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response) {
      // user successfully got registered
      dispatch(resetAddTable())
      props.history.push('/ownertables')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  return (
    <div className="container">
    <Header title="Add Table" />
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Table Number</label>
            <input
              onChange={(e) => {
                setTableNo(e.target.value);
              }}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              type="number"
              className="form-control"
            />
          </div>
          <button
            onClick={() => {
              addTheTable();
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
