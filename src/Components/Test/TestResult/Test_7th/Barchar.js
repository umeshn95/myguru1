import React,{useState} from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import Chart from 'chart.js/auto'

import {Bar} from 'react-chartjs-2';
const Barchar = ({Industry}) => {
    const [label,setLabel] = useState()
    
  
    console.log(Industry)
    ChartJS.register(...registerables)
    const state = {
        labels: [Industry],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 6,
       
          }
        ]
      }
    return (
        <div>
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }, maintainAspectRatio: false,
            responsive:true,
         
            }
          }
        />
        </div>
    )
}

export default Barchar
