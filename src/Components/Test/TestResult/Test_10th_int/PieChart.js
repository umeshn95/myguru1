import React, { Fragment, useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Loader from '../../../Loader/Loader';
import Header from '../../../Header';
import "./PieChart.css"
import env from 'react-dotenv'

const data = [
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
];


const BarChart = () => {
    const [loading, setLoading] = useState(true)
    const [dataMain, setDataMain] = useState([])
    // console.log(props)

    useEffect(() => {
        setLoading(false)
        getCarrer()
    }, [])

    const getCarrer = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        setLoading(true)
        fetch(`${env.API_URL}/api/10th/int/result`, {
            // fetch("https://myguruonline.herokuapp.com${env.API_URL}/api/7th/result", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            // console.log("Result", result.status)
            result.json().then((resp) => {
                // console.log(result)
                // console.log(resp)
                setLoading(false)
                setDataMain(resp.data)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }
    // console.log('...............', dataMain)


    return (
        <Fragment>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Paper className="mt-5 mb-5">
                        <Chart
                            data={data}
                        >
                            <PieSeries
                                valueField="area"
                                argumentField="country"
                            />
                            <Title
                                text="Pie Chart"
                            />
                            <Animation />
                        </Chart>
                        
                    </Paper>
                </Fragment>
            )}
        </Fragment>
    )
}



export default BarChart
