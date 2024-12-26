import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { getAllWeekRevenue } from '../../actions/RevenueActions'

const DailyRevenue = () => {
  const dispatch = useDispatch()

  const allWeekRevenue = useSelector((store) => store.allWeekRevenue)
  const { loading, response, error } = allWeekRevenue

  useEffect(() => {
    dispatch(getAllWeekRevenue())
    console.log('response is')
    console.log(response)
  }, [])

  return (
    <div>
      <Bar
        data={{
          labels:
            response &&
            response.data.length > 0 &&
            response.data.map((data) => {
              return data.date
            }),
          datasets: [
            {
              label: 'Collection in ₹',
              data:
                response &&
                response.data.length > 0 &&
                response.data.map((collection) => {
                  return collection.amount
                }),
              backgroundColor: [
                'rgba(46, 184, 92,  0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgba(46, 184, 92,  1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}

export default DailyRevenue
