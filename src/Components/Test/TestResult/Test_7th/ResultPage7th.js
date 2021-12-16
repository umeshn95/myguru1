import React, { useHistory, useState, useEffect, Fragment } from 'react'
import Loader from '../../../Loader/Loader';
import { useAlert } from 'react-alert'
import { Table } from 'react-bootstrap';
import Header from '../../../Header'
import BarChar from './Barchar'
import PieChar from './PieChar'
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


const ResultPage7th = () => {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/title/`, {
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


    const getCarrer = async () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        setLoading(true)
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/7th/result", {
        await fetch(`${process.env.REACT_APP_API_URL}/api/7th/result`, {
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
                // console.log(resp.data)
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
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/showgrade/`, {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/showindusty/`, {
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
    console.log(showindustry)

    return (
        <Fragment>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="center">
                        <div style={{ marginTop: "100px" }} className='mb-5 w-75'>
                            <div className="center mb-5">
                                <div className=' w-lg-50 w-sm-100'>
                                    <h2 style={{ border: "1px solid #000", borderRadius: "10px", background: "#41B5F8" }} className='p-3'><strong>STUDY & LEARNING TECHNIQUES</strong></h2>
                                </div>
                            </div>
                            <h3><b>IMPORTANCE OF STUDY & LEARNING TECHNIQUES</b></h3>
                            <div className='text-start'>
                                <h6 className='text-start d-inline' style={{ letterSpacing: "0.1rem", fontSize: "16px", textDecoration: "underline" }}><b>Aptitude Testing</b></h6> <small style={{ color: "#000", fontSize: "14px" }}>{title && title.TitleImportance}</small>
                                <h6 className='text-start mb-5'><strong>The most important turning point of your life comes after class X and that is your choice of stream in which you would further pursue your career. In this report your stream preference is aligned in order of First to Fourth preference.</strong></h6>
                            </div>
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
                    <div className='center'>
                        <BarChar Industry={showindustry} />
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
                                                    <th scope="col">
                                                        {e.industry_Grade}
                                                    </th>
                                                    <th scope="col">
                                                        {e.industry}
                                                    </th>
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
                                                        <ul className='mt-2 mx-4'><li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_1}</li>
                                                            <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_2}</li>
                                                            <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_3}</li>
                                                            <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_4}</li>
                                                            <li style={{ listStyleType: "circle" }}>{e.interpretatio.YouCanDoPoint_5}</li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                            <div className="my-5" style={{height:'200px'}}>
                                                            <PieChar Newdata={e.totalCount}/>
                                                            </div>
                                                    </td>
                                                    <td >
                                                        {/* <img className="ml-5 pl-5" src="./assets/images/pyramid.png" /> */}
                                                        <div className="d-flex ">
                                                            {
                                                                e.grade === "Below Average" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[3] && showGradeData[3].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up3 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hign</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up4 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Excellent</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                            {
                                                                e.grade === "Hige" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[3] && showGradeData[3].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                        <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                        <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hign</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up4 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Excellent</small>
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
                                                                            <small>{showGradeData[3] && showGradeData[3].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Average</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hign</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up4 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Excellent</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                            {
                                                                e.grade === "Excellent" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[3] && showGradeData[3].grade}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Below Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].grade}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Average</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Hign</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Excellent</small>
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

export default ResultPage7th
