import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { feedback } from '../../actions/customerActions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const AcceptFeedBackScreen = () => {
  const dispatch = useDispatch();
  const feedbackHere = useSelector((store) => store.customerFeedback);
  const { loading, error, response } = feedbackHere;

  const navigate = useNavigate(); // Use navigate hook

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      message: '',
      rating: '',
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .min(5, 'Feedback must be at least 5 characters long')
        .required('Feedback message is required'),
      rating: Yup.number()
        .min(0, 'Rating must be at least 0')
        .max(5, 'Rating cannot exceed 5')
        .required('Rating is required'),
    }),
    onSubmit: (values) => {
      // Dispatch feedback action
      dispatch(feedback(values.message, values.rating));
      navigate('/customermenu'); // Redirect after submitting feedback
    },
  });

  return (
    <div className="container p-5 text-white" style={{ marginTop: '100px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="mb-3">
              <label style={{ marginTop: 30 }} className="form-label">
                Feedback
              </label>
              <input
                name="message"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-danger">{formik.errors.message}</div>
              ) : null}
            </div>

            <label htmlFor="customRange2" className="form-label">
              Rating: {formik.values.rating}
            </label>
            <input
              name="rating"
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              id="customRange2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rating}
            />
            {formik.touched.rating && formik.errors.rating ? (
              <div className="text-danger">{formik.errors.rating}</div>
            ) : null}

            <button type="submit" className="btn btn-info mt-3" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>

          {error && <div className="text-danger mt-3">{error}</div>} {/* Display errors if any */}
        </div>
      </div>
    </div>
  );
};

export default AcceptFeedBackScreen;
