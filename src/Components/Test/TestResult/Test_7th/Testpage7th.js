import React, { useState, useEffect, Fragment } from 'react'
import '../../../css/style.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader';
import { useHistory } from 'react-router-dom'
import Header from '../../../Header'
import NewTimer from '../../../../NewTimer'
import BarChart from './BarChart'
import '../Test_8th/triangle.css'
const Testpage7th = () => {
    const alert = useAlert()
    const history = useHistory();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [dataExam, setDataExam] = useState([])
    const [count, setCount] = useState(1)
    const [dataTemp, setDataTemp] = useState([])
    let user = JSON.parse(localStorage.getItem('user-details'));

    const [ans1, setAns1] = useState(0)
    const [ans2, setAns2] = useState(0)
    const [ans3, setAns3] = useState(0)
    const [ans4, setAns4] = useState(0)
    const [ans5, setAns5] = useState(0)

    useEffect(() => {
        getAns()
        getData()
        deleteData()
    }, [])

    const submit = (e, industry, question, id) => {
        pagination(e)
        sendDataResult(industry, question, id)

    }

    const sendDataResult = (industry, question, id) => {
        setLoading(true)
        let item = { id, industry, question, ans1, ans2, ans3, ans4, ans5 }
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/testresult`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                setLoading(false)
            })
        })
    }

    const getAns = () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/question`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            result.json().then((resp) => {
                setData(resp.results)
                setDataTemp(resp)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }

    const getData = () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/studentquestion`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                setDataExam(resp.data)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }

    const deleteData = () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/deleteresult`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
                setLoading(false)
            })
        })
    }

    const pagination = (pk) => {
        setAns1(0)
        setAns2(0)
        setAns3(0)
        setAns4(0)
        setAns5(0)
        var k = count + pk
        setCount(k)
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/question?page=${k}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            if (result.status === 404) {
                setLoading(false)
                history.push('/7th/result')
                return alert.success("Your Task is completed ")
            }
            result.json().then((resp) => {
                setData(resp.results)
                setDataTemp(resp)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }


    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div>
                        <Header />
                        {/* <!-- Welcome My Guru section  --> */}
                        <div className="section margin-top_7">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="">
                                        <div className="full">
                                            <div className="mt-5">
                                                <i className="far fa-user-circle mt-2 float-left"></i>
                                                <div className="row float-left ml-2">
                                                    <h5 className=" mt-4 fw-bold gray">Candidate Name: {user && user.last_name}<span></span></h5>
                                                    {
                                                        dataExam.map((e, i) =>
                                                            <h5 className=" fw-bold gray" key={i}>Exam Name: {e.testName}<span></span></h5>
                                                        )
                                                    }
                                                </div>
                                                <div className="float-right mr-4">
                                                    <h5 className=" mt-4 fw-bold gray">Total Questions: <span></span></h5>
                                                    <h5 className=" fw-bold gray">Remaining Questions: <span></span></h5>
                                                    <div className="time">
                                                        <NewTimer />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            data.map((e, i) =>
                                                <div className="" key={i}>
                                                    <div className="text-center">
                                                        <h5 className="fw-bold gray text-center">{count} To {dataTemp.count} </h5>
                                                    </div>
                                                    <div className="center">
                                                        <h5 className="fw-bold gray text-center w-50">{e.question} </h5>
                                                    </div>
                                                    <div classNameName="col mt-3">

                                                        <form action="" className=" d-flex justify-content-center">
                                                            <ul className="row box_text ">
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(a) {e.a}</span>{" "} <input className="float-right mt-3" type="radio" name="radioGroup" value={ans1} onChange={() => setAns1(1)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(b) {e.b}</span>{" "} <input className="float-right mt-3" type="radio" value={ans2} onChange={() => setAns2(1)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(c) {e.c}</span>{" "} <input className="float-right mt-3" type="radio" value={ans3} onChange={() => setAns3(1)} /></li>
                                                                {/* <li className="col-lg-12">(c) {e.c} <input className="float-right mt-3" type="checkbox" id="flexCheckDefault" name={e.id} value={e.ans3} onChange={handleChange} /></li> */}
                                                                {
                                                                    e.d ?
                                                                        <>
                                                                            <li className="col-lg-12"><span style={{ float: "left" }}>(d) {e.d}</span>{" "} <input className="float-right mt-3" type="radio" value={ans4} onChange={() => setAns4(1)} /></li>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                                }
                                                                {
                                                                    e.e ?
                                                                        <>
                                                                            <li className="col-lg-12"><span style={{ float: "left" }}>(e) {e.e}</span>{" "} <input className="float-right mt-3" type="radio" value={ans5} onChange={() => setAns5(1)} /></li>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                                }
                                                            </ul>

                                                        </form>
                                                        <div className="mr-5 mt-3">
                                                            <a ><button className="pay_btn float-right col-lg-1 mr-5" onClick={() => submit(1, e.industry.industry, e.question, e.id)} >Next</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Testpage7th
