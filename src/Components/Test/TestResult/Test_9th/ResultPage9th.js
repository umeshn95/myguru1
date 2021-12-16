import React, { useHistory, useState, useEffect, Fragment } from 'react'
import Loader from '../../../Loader/Loader';
import { useAlert } from 'react-alert'
import { Table } from 'react-bootstrap';
import Header from '../../../Header'
import BarChart from './BarChart'
import PieChart from './PieChart'
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Paper from '@material-ui/core/Paper';
import './PieChart.css'
import env from 'react-dotenv'


const tableData = {
    color: "#000"
}


const ResultPage6To9 = () => {
    // const history = useHistory();
    const [data, setData] = useState([])
    const [showGradeData, setShowGradeData] = useState([])
    const [showindustry, setShowindustry] = useState([])
    const [loading, setLoading] = useState(true)
    const alert = useAlert()


    useEffect(() => {
        getCarrer()
        GradeData()
        getIndustry()
    }, [])


    const getCarrer = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/9th/result`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/9th/result", {
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

    const GradeData = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        fetch(`${process.env.REACT_APP_API_URL}/api/9th/showgrade/`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/9th/showgrade/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                // console.log(resp)
                setShowGradeData(resp)
            })
        })
    }
    const getIndustry = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        fetch(`${process.env.REACT_APP_API_URL}/api/9th/showindusty/`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/9th/showindusty/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                // console.log(resp)
                setShowindustry(resp)
            })
        })
    }

    const data1 = [
        { country: 'Russia', area: 12 },
        { country: 'Canada', area: 7 },
        { country: 'Canada', area: 10 },
        { country: 'Canada', area: 40 },
        { country: 'Canada', area: 41 },
        { country: 'Canada', area: 63 },
    ];


    return (
        <Fragment>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="center">
                        <div style={{ marginTop: "100px" }} className='mb-5 w-75'>
                            <div>
                                <h4 className="d-inline">Your Test Score & Performance Index for Career Cluster Assessment</h4>
                            </div>
                            <a href="#"><button className="float-right" style={{ border: "none", borderRadius: "5px", background: "#2E70B1", color: "#fff" }}>
                                Export csv
                            </button></a>

                            <div className=" mt-3">
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>Career Clusters</th>
                                            <th>Score</th>
                                            {/* <th>Maximum Marks</th> */}
                                            <th>Grade</th>
                                            {/* <th>Time</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((e) =>
                                                <tr>
                                                    <td>{e.industry}</td>
                                                    <td>{e.totalCount}</td>
                                                    {/* <td>17</td> */}
                                                    <td>{e.grade}</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="center mb-5">
                        <div className="mx-5 w-75">
                            <h2>Key to Grades</h2>
                            <table class="table text-left border text-center">
                                <thead>
                                    <tr class="score_card">
                                        <th scope="col">High Score</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        showGradeData.map((e) =>
                                            <tr>
                                                <td>{e.score}</td>
                                                <td>{e.grade}</td>
                                            </tr>

                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <BarChart />
                    </div>
                    <div className="center mt-5">
                        <div className=" mx-5 w-75">
                            <table className="table text-left border " style={tableData}>

                                <tbody style={{ border: "1px solid #000" }}>
                                    {
                                        showindustry.map((e) =>
                                            <tr >
                                                <td style={{ padding: "7px", borderTop: "1px solid #000" }}>{e.industry_Id}. {e.industry}</td>
                                                {/* <td style={{ borderTop: "1px solid #000" }} className="pl-3">9. Hospitality & Tourism</td> */}
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    {/* Aptitude Test Analysis */}
                    <div>
                        <div className="center mb-5">
                            <div className="mx-5 w-75">
                                <h2>Aptitude Test Analysis</h2>

                                {
                                    data.map((e) =>
                                        <table class="table text-left border">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{e.industry_Grade}</th>
                                                    <th scope="col">{e.industry}</th>
                                                    <th className="w-50" scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td style={{ border: "1px solid #000" }} ><b>Score:</b> <br />Your Assessment score in {e.industry}  {e.totalCount} <br /><hr /><b>Darkened area represents your Grade Range.</b> </td>
                                                    <td ><img className="ml-5 pl-5" src="./assets/images/pyramid.png" />
                                                        <br />
                                                        {/* <div className="my-5"><PieChart /> */}
                                                        <div className="my-5">
                                                            <Paper className="mt-5 mb-5">
                                                                <Chart
                                                                    data={data1}
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

                                                        </div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default ResultPage6To9
