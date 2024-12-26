import { useEffect } from 'react'
import { getFeedback } from '../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'

const FeedBackScreen = (props) => {
  const getfeedback = useSelector((store) => store.getfeedback)

  const { loading, response, error } = getfeedback

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeedback())
  }, [])

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Feedback</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((feed) => (
              <tr key={feed.id}>
                <td>{feed.id}</td>
                <td>{feed.message}</td>
                <td>{feed.rating}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeedBackScreen
