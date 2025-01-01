import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MonthlyRevenue from '../../components/charts/MonthlyRevenue'
import DailyRevenue from '../../components/charts/DailyRevenue'
import {
  getTodaysRevenue,
  getThisWeeksRevenue,
  getThisMonthsRevenue,
  getThisYearsRevenue,
} from '../../actions/RevenueActions'

const OwnerRevenueScreen = () => {
  const dispatch = useDispatch()

  const [loadingState, setLoadingState] = useState(true)

  const todaysRevenue = useSelector((store) => store.todaysRevenue)
  const { loading, response, error } = todaysRevenue

  const thisWeeksRevenue = useSelector((store) => store.thisWeeksRevenue)
  const { loading1, response1, error1 } = thisWeeksRevenue

  const thisMonthsRevenue = useSelector((store) => store.thisMonthsRevenue)
  const { loading2, response2, error2 } = thisMonthsRevenue

  const thisYearsRevenue = useSelector((store) => store.thisYearsRevenue)
  const { loading3, response3, error3 } = thisYearsRevenue

  var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ]

  var date = new Date()
  var month = date.getMonth()

  useEffect(() => {
    dispatch(getTodaysRevenue())
    dispatch(getThisWeeksRevenue())
    dispatch(getThisMonthsRevenue())
    dispatch(getThisYearsRevenue())
    
    // Update loading state once data is fetched
    setLoadingState(false)
  }, [dispatch])

  // if (loadingState || loading || loading1 || loading2 || loading3) {
  //   return <div className="loading-spinner text-center" >Loading...</div> 
  // }

  return (
    <div className='container p-5 text-white' style={{ marginTop: '100px' }}>
      <div className="row" style={{ paddingTop: '15px' }}>
        {response && (
          <div
            className="col border border-secondary text-white"
            style={{ height: '120px', backgroundColor: 'rgba(51,153,255,0.7)', marginBottom: '10px' }}
          >
            <h4>Today's Revenue</h4>
            <h3 className="text-center">₹ {response.data.amount}</h3>
            {error && <div className="text-center text-danger">Error: {error}</div>}
          </div>
        )}
        {response1 && (
          <div
            className="col border border-secondary text-white"
            style={{ height: '120px', backgroundColor: 'rgba(249,177,21,0.7)', marginBottom: '10px' }}
          >
            <h4>Weekly Revenue</h4>
            <h3 className="text-center">₹ {response1.data}</h3>
            {error1 && <div className="text-center text-danger">Error: {error1}</div>}
          </div>
        )}
        {response2 && (
          <div
            className="col border border-secondary text-white"
            style={{ height: '120px', backgroundColor: 'rgba(229,83,83,0.7)', marginBottom: '10px' }}
          >
            <h4>{months[month]} Revenue</h4>
            <h3 className="text-center">₹ {response2.data.amount}</h3>
            {error2 && <div className="text-center text-danger">Error: {error2}</div>}
          </div>
        )}
        {response3 && (
          <div
            className="col border border-secondary text-white"
            style={{ height: '120px', backgroundColor: 'rgba(75,192,192,0.7)', marginBottom: '10px' }}
          >
            <h4>This Year's Revenue</h4>
            <h3 className="text-center">₹ {response3.data}</h3>
            {error3 && <div className="text-center text-danger">Error: {error3}</div>}
          </div>
        )}
      </div>
      
      <div>
        <h3>Daily Revenue</h3>
        <DailyRevenue />
        
        <h3>Monthly Revenue</h3>
        <MonthlyRevenue />
      </div>
    </div>
  )
}

export default OwnerRevenueScreen
