import { useState, useEffect } from 'react'
import { getmenu } from '../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import * as AiIcons from 'react-icons/ai'
import { cusAddtoCart } from '../../actions/customerActions'
import { store } from 'react-notifications-component'

import 'animate.css'
const CustomerMenuScreen = () => {
  const menu = useSelector((store) => store.getallmenu)
  const [search, setSearch] = useState('')
  const { loading, response, error } = menu
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getmenu())
  }, [])

  const addToCart = (menuId) => {
    dispatch(cusAddtoCart(menuId, 1))
  }
  const DeleteFromCart = (menuId) => {
    dispatch(cusAddtoCart(menuId, 0))
  }
  const all = () => {
    setSearch('')
  }
  const veg = () => {
    setSearch('veg')
  }
  const nonveg = () => {
    setSearch('nonveg')
  }

  useEffect(() => {}, [error, response, loading])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* <input
            style={{ marginTop: 5 }}
            type="text"
            placeholder="Search..."
            className="form-control-sm"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="btn-group" style={{ marginTop: 10 }}>
            <button
              onClick={() => {
                all();
              }}
              className="btn btn-info"
            >
              All
            </button>
            <button
              onClick={() => {
                veg();
              }}
              className="btn btn-success"
            >
              Veg
            </button>
            <button
              onClick={() => {
                nonveg();
              }}
              className="btn btn-danger"
            >
              NonVeg
            </button>
          </div> */}
          <div className="row mt-3">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="col-md-1">
          <button onClick={() => {
                all();
              }}
              className="btn btn-info">
            All
          </button>
        </div>
        <div className="col-md-1">
          <button onClick={() => {
                veg();
              }}
              className="btn btn-success">
            Veg
          </button>
        </div>
        <div className="col-md-1">
          <button onClick={() => {
                nonveg();
              }}
              className="btn btn-danger">
            NonVeg
          </button>
        </div>
      </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                {/* <th>Category</th> */}
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
                      val.menuName.toLowerCase().includes(search.toLowerCase()) ||
                      val.category.toLowerCase().startsWith(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((menu, index) => {
                    return (
                      <tr key={index}>
                        <td>{menu.menuName}</td>
                        <td>{menu.price}</td>
                        <td>{menu.category}</td>
                        <td>
                          <button
                            onClick={() => {
                              addToCart(menu.id);
                            }}
                            className="btn btn-success"
                          >
                            Add Item
                          </button>
                          {/* <button
                            style={{ marginLeft: 5 }}
                            onClick={() => {
                              DeleteFromCart(menu.id);
                            }}
                            className="btn btn-danger"
                          >
                            Remove Item
                          </button> */}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CustomerMenuScreen
