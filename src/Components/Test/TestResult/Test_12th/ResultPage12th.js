import React, { useState, useEffect, Fragment } from 'react'
import Loader from '../../../Loader/Loader';
import { useAlert } from 'react-alert'
import { Table } from 'react-bootstrap';
import Header from '../../../Header'
import BarChart from './BarChart'
import './triangle.css'
import Piechart from '../Test_7th/PieChar';

const tableData = {
    color: "#000"
}


const ResultPage12th = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState()
    const [loading, setLoading] = useState(true)
    const [showGradeData, setShowGradeData] = useState([])
    const [showindustry, setShowindustry] = useState([])
    let user = JSON.parse(localStorage.getItem('user-details'));
    const alert = useAlert()

    useEffect(() => {
        getCarrer()
        GradeData()
        getIndustry()
        getTitle()
    }, [])

    const getTitle = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/12th/title/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                setLoading(false)
                setTitle(resp[0])
            })
        })
    }

    const getCarrer = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/12th/result`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                setData(resp.data)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }

    const GradeData = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/12th/showgrade/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                setShowGradeData(resp)
            })
        })
    }

    const getIndustry = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/12th/showindusty/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
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
                            <div className="center mb-5">
                                <div className=' w-lg-50 w-sm-100'>
                                    <h2 style={{ border: "1px solid #000", borderRadius: "10px", background: "#41B5F8" }} className='p-3'><strong>EMOTIONAL INTELLIGENCE</strong></h2>
                                </div>
                            </div>
                            <h3><b>EMOTIONAL INTELLIGENCE – WHAT, WHY & HOW</b></h3>
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
                                            <th>Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((e) =>
                                                <tr>
                                                    <td>{e.industry}</td>
                                                    <td>{e.totalCount}</td>
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
                            <table style={{ border: "1px solid #000" }} class="table text-center">
                                <thead>
                                    <tr class="score_card">
                                        <th scope="col">Score</th>
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
                        <BarChart data={data && data} />
                    </div>
                    <div className="center mt-5">
                        <div className=" mx-5 w-75">
                            <table className="table text-left border " style={tableData}>

                                <tbody style={{ border: "1px solid #000" }}>
                                    {
                                        showindustry.map((e) =>
                                            <tr >
                                                <td style={{ padding: "7px", borderTop: "1px solid #000" }}>{e.industry_Id}. {e.industry}</td>
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
                            <div className=" w-75 aptitude">
                                <h2>Aptitude Test Analysis</h2>
                                {
                                    data.map((e) =>
                                        <table style={{ border: "1px solid #000" }} class="table text-left">
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
                                                    <td><b>Score:</b> <br />Your Assessment score in
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
                                                    <td >
                                                        {/* <img className="ml-5 pl-5" src="./assets/images/pyramid.png" /> */}
                                                        <div className="d-flex justify-content-center">
                                                            {/* {
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
                                                            } */}
                                                            {
                                                                e.grade === "Development" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Development</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Requires</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up4 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>	Strengh</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                            {
                                                                e.grade === "Requires" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Development</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Requires</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Strengh</small>
                                                                        </div>

                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                            {
                                                                e.grade === "Strengh" ?
                                                                    <>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[2] && showGradeData[2].grade}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Development</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[1] && showGradeData[1].score}</small>
                                                                            <div className="arrow-up2 mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Requires</small>
                                                                        </div>
                                                                        <div className='text-center'>
                                                                            <small>{showGradeData[0] && showGradeData[0].score}</small>
                                                                            <div className="arrow-up mx-lg-5 mx-md-2 mx-sm-1"></div>
                                                                            <small>Strengh</small>
                                                                            <small className='d-flex center text-danger'>{e.totalCount}</small>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                        </div>

                                                        <br />
                                                        <td className='center'>
                                                            <div className="my-5" style={{ height: '200px' }}>
                                                                <Piechart Newdata={e.totalCount} />
                                                            </div>
                                                        </td>
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
            )
            }
        </Fragment>
    )
}

export default ResultPage12th
