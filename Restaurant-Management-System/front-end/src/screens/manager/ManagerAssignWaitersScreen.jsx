import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllWaiters,
  assignWaiterToTable,
} from '../../actions/ManagerActions'
import { getalltables } from '../../actions/owneraction/ownerAction'

const ManagerAssignWaitersScreen = (props) => {
  const getWaiters = useSelector((store) => store.getWaiters)
  const { loading, response, error } = getWaiters

  const assignWaiter = useSelector((store) => store.assignWaiter)
  const { loading1, response1, error1 } = assignWaiter

  const managerGetAllTables = useSelector((store) => store.managerGetAllTables)
  const { loading2, response2, error2 } = managerGetAllTables

  const dispatch = useDispatch()

  const [waiterId, setWaiterId] = useState()

  useEffect(() => {
    dispatch(getAllWaiters())
    dispatch(getalltables())
    console.log('tables')
    console.log(response2)
  }, [])

  const appointWaiter = (tableNo) => {
    console.log('waiter is ' + waiterId + ' tabbe is ' + tableNo)
    dispatch(assignWaiterToTable(waiterId, tableNo))
  }

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Table No</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Assign Waiter</th>
          </tr>
        </thead>
        <tbody>
          {response2 &&
            response2.data &&
            response2.data.length > 0 &&
            response2.data.map((table) => {
              return (
                <tr key={table.tableNo}>
                  <td>{table.tableNo}</td>
                  <td>{table.capacity}</td>
                  <td>{table.status}</td>
                  <td>
                    <select
                      onChange={(e) => {
                        setWaiterId(e.target.value);
                      }}
                      className="form-select"
                      style={{color:'black'}}
                    >
                      <option value="">Select Waiter</option>
                      {response &&
                        response.data.map((waiter) => {
                          return (
                            <option key={waiter.id} value={waiter.id} >
                              {waiter.id}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        appointWaiter(table.tableNo);
                      }}
                      type="button"
                      className="btn btn-warning"
                    >
                      Assign
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

export default ManagerAssignWaitersScreen
