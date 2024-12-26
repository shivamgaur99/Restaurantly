import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { getAllMonthRevenue } from '../../actions/RevenueActions'

const MonthlyRevenue = () => {
  const dispatch = useDispatch()

  const allMonthRevenue = useSelector((store) => store.allMonthRevenue)
  const { loading, response, error } = allMonthRevenue

  useEffect(() => {
    dispatch(getAllMonthRevenue())
    console.log('response is ')
    console.log(response)
  }, [])

  return (
    <div>
      <Doughnut
        data={{
          labels:
            (response &&
              response.data.length > 0 &&
              response.data.map((data) => {
                return data.id.month + ' ' + data.id.year
              })) ||
            0,
          datasets: [
            {
              label: 'Collection in ₹',
              data:
                (response &&
                  response.data.length > 0 &&
                  response.data.map((collection) => {
                    return collection.amount
                  })) ||
                0,
              backgroundColor: [
                'rgba(46, 184, 92,  0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderWidth: 2,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          legend: {
            position: 'bottom',
          },
        }}
      />
    </div>
  )
}

export default MonthlyRevenue
