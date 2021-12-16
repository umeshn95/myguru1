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
import env from 'react-dotenv'




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
        // fetch("https://myguruonline.herokuapp.com${env.REACT_APP_API_URL}/api/result", {
            fetch(`${env.REACT_APP_API_URL}/api/result`, {
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

    // const data = [
    //     { indstry: '1', marks: 17 },
    //     { indstry: '2', marks: 15 },
    //     { indstry: '3', marks: 12 },
    //     { indstry: '4', marks: 8 },
    //     { indstry: '5', marks: 2 },
    //     { indstry: '6', marks: 5 },
    //     { indstry: '7', marks: 13 },
    //     { indstry: '8', marks: 6 },
    //     { indstry: '9', marks: 9 },
    //     { indstry: '10', marks: 7 },
    //     { indstry: '11', marks: 1 },
    //     { indstry: '12', marks: 5 },
    //     { indstry: '13', marks: 4 },
    //     { indstry: '14', marks: 0 },
    //     { indstry: '15', marks: 9 },
    //     { indstry: '16', marks: 13 },
    // ];

    // console.log('data',data)

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

