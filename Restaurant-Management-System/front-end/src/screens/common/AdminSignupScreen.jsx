import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../actions/adminActions'

const AdminSignupScreen = (props) => {
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const dispatch = useDispatch()

  const adminSignup = useSelector((store) => store.adminSignup)
  const { loading, response, error } = adminSignup

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response) {
      // user successfully got registered
      console.log('rohit is here ' + response.status)
      props.history.push('/adminsignin')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    dispatch(signup(name, username, email, password, role))
  }

  return (
    <div>
      <Header title="Signup" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input
            onChange={(e) => {
              setRole(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignup} className="btn btn-success">
            Singup
          </button>
          <div className="float-end">
            Existing user? <Link to="/adminsignin">Signin here</Link>
          </div>
        </div>
      </div>

      {/* {userSignup.loading && <div>waiting for result</div>} */}
    </div>
  )
}

export default AdminSignupScreen
