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
        const [title, setTitle] = useState()
        const alert = useAlert()
    
    
        useEffect(() => {
            getCarrer()
            GradeData()
            getIndustry()
            getTitle()
        }, [])
    
        const getTitle = () => {
            let user = JSON.parse(localStorage.getItem('user-details'));
            setLoading(true)
            fetch(`${process.env.REACT_APP_API_URL}/api/6th/title/`, {
                // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/result", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user && user.access}`
                },
            }).then((result) => {
                result.json().then((resp) => {
                    // console.log(result)
                    // console.log(resp)
                    setLoading(false)
                    setTitle(resp[0])
                })
            })
        }
    
        const getCarrer = () => {
            let user = JSON.parse(localStorage.getItem('user-details'));
            setLoading(true)
            // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/7th/result", {
            fetch(`${process.env.REACT_APP_API_URL}/api/6th/result`, {
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
            // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/7th/showgrade/", {
            fetch(`${process.env.REACT_APP_API_URL}/api/6th/showgrade/`, {
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
            fetch(`${process.env.REACT_APP_API_URL}/api/6th/showindusty/`, {
                // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/7th/showindusty/", {
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
                                        <th scope="col">Area</th>
                                        <th scope="col">High Score</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        showGradeData.map((e) =>
                                            <tr>
                                            <td>{e.grade}</td>
                                            <td>{e.score}</td>
                                                
                                            </tr>

                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
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
                                                    <td style={{ border: "1px solid #000" }} ><b>Score:</b> <br />Your Assessment score in
                                                        {e.industry}  {e.totalCount}
                                                        <br /><hr /><b>Darkened area represents your Grade Range.</b> <br /> <hr />
                                                        <b><i>Interpretation:</i></b> <br />{e.interpretatio.interpretationTitle}<br /><hr />
                                                        <b><i>What you can do / What more you can do:</i></b><br />

                                                        {

                                                            e.interpretatio.YouCanDoPoint_1 ?
                                                                <ul className='mt-2 mx-4'>
                                                                    <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_1}</li>
                                                                    <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_2}</li>
                                                                    <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_3}</li>
                                                                    <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_4}</li>
                                                                    <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_5}</li>
                                                                </ul>
                                                                :
                                                                <>
                                                                </>

                                                        }


                                                    </td>
                                                    <td >
                                                        {/* <img className="ml-5 pl-5" src="./assets/images/pyramid.png" /> */}
                                                        <div className="d-flex ">
                                                            {
                                                                e.grade === "Below Average" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hige Average</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                            {
                                                                e.grade === "Average" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Average</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hige Average</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                            {
                                                                e.grade === "Hige Average" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hign Average</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                  
                                                        </div>

                                                        <br />
                                                    </td>
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
