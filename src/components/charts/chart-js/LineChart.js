import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ title = 'Default Title', xLabel = '', dataSet1 = [], dataSet2 = [] }) => {
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        //   title: {
        //     display: true,
        //     text: 'Earnings Reports',
        //   },
        },
    };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    // DataSet 1
    const labels1 = []
    const values1 = []
    dataSet1.map(item => {
        labels1.push(item.date)
        values1.push(item.value)
    })
    // // DataSet2
    // const labels2 = []
    // const values2 = []

    // dataSet2.map(set => {
    //     labels2.push(set.x)
    //     values2.push(set.y)
    // })
    // //console.log(values)

    const data = {
        labels: labels1,
        datasets: [
            {
                label: xLabel,
                data: values1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //     label: 'Quarterly',
            //     data: values2,
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };
    
    return (
        <Line 
            options={options}
            data={data}
        />
    )
}

export default LineChart
