import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { feedback } from '../../actions/customerActions'

const AcceptFeedBackScreen = (props) => {
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState('')

  const giveFeedback = () => {
    dispatch(feedback(message, rating))
    props.history.push('/customermenu')
    //  dispatch(resetFeedback())
  }
  const feedbackHere = useSelector((store) => store.customerFeedback)
  const { loading, error, response } = feedbackHere

  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form">
            <div className="mb-3">
              <label style={{ marginTop: 30 }} className="form-label">
                FeedBack
              </label>
              <input
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <label htmlFor="customRange2" className="form-label">
              Rating: {rating}
            </label>
            <input
              onChange={(e) => {
                setRating(e.target.value);
              }}
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              id="customRange2"
            />
          </div>
          <button
            onClick={() => {
              giveFeedback();
            }}
            className="btn btn-info"
          >
            FeedBack
          </button>
        </div>
      </div>
    </div>
  )
}

export default AcceptFeedBackScreen
