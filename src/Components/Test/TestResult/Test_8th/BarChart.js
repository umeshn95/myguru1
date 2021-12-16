import React, { Fragment, useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Loader from '../../../Loader/Loader';
import Header from '../../../Header';




const ChartMain = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(false)
        getCarrer()
    }, [])


    const getCarrer = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        setLoading(true)
        fetch("/api/8th/result", {
            // fetch("https://myguruonline.herokuapp.com/api/8th/result", {
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
                setData(resp.data)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }


    return (
        <Fragment>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Paper className="container mt-5 mb-5">
                        <h1 className='bold'>Career Cluster Assessment Bar Chart</h1>
                        <Chart
                            data={data}
                        >
                            <ArgumentAxis />
                            <ValueAxis max={16} />

                            <BarSeries
                                valueField="totalCount"
                                argumentField="industry_Grade"
                            />
                            <Title text="Bar Chart" />
                            <Animation />
                        </Chart>
                    </Paper>
                </Fragment>
            )}
        </Fragment>
    )
}


export default ChartMain

