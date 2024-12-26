import React from 'react'
import { getalltables } from '../../actions/owneraction/ownerAction'
import { booktable } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { useTransition } from 'react-spring'
const OwnerTableScreen = (props) => {
  const gettables = useSelector((store) => store.ownergetTables)

  const { loading, response, error } = gettables

  const dispatch = useDispatch()

  const bookTableHere = (tableNo, capacity) => {
    dispatch(booktable(tableNo, capacity))
  }

  const bookTableData = useSelector((store) => store.customerBookTable)

  const { loading1, response1, error1 } = bookTableData

  useEffect(() => {
    if (response1) {
      window.location.reload()
    } else if (error1) {
      alert(response1.error)
    } else if (error1) {
      alert(error1)
    }
  }, [loading1, error1, response1])

  useEffect(() => {
    dispatch(getalltables())
  }, [])

  useEffect(() => {}, [loading, response, error])
  let role = sessionStorage['role']
  const addTable = () => {
    props.history.push('/addtable')
  }

  return (
    <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Table Number</th>
          <th>Capacity</th>
          <th>Status</th>
          {role === "OWNER" && <th>Waiter ID</th>}
          {role === "OWNER" && <th>Customer ID</th>}
          {role !== "OWNER" && role !== "WAITER" && <th>Book Table</th>}
        </tr>
      </thead>
      <tbody>
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((table) => {
            return (
              <tr key={table.tableNo}>
                <td>{table.tableNo}</td>
                <td>{table.capacity}</td>
                <td>
                  <input
                    type="text"
                    className="form-control-sm"
                    value={table.status}
                  />
                </td>
                {role === "OWNER" && <td>{table.waiter_id}</td>}
                {role === "OWNER" && <td>{table.customer_id}</td>}
                {role !== "OWNER" && (
                  <td>
                    {table.status !== "BOOKED" && role !== "WAITER" && (
                      <button
                        onClick={() => {
                          bookTableHere(table.tableNo, table.capacity);
                        }}
                        className="btn btn-success"
                      >
                        Book Table
                      </button>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
    {role === "OWNER" && (
      <button
        onClick={() => {
          addTable();
        }}
        className="btn btn-warning"
      >
        Add Table
      </button>
    )}
  </div>
  )
}

export default OwnerTableScreen
