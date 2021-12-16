import React, { useState, useEffect, Fragment } from 'react'
import '../../../css/style.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader';
import { useHistory } from 'react-router-dom'
import Header from '../../../Header'
import NewTimer from '../../../../NewTimer'

import env from 'react-dotenv'

const Testpage10th = () => {
    const alert = useAlert()
    const history = useHistory();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [dataExam, setDataExam] = useState([])
    const [count, setCount] = useState(1)
    const [dataTemp, setDataTemp] = useState([])
    // console.log('count', count)
    // console.log('data', dataTemp.count)


    let user = JSON.parse(localStorage.getItem('user-details'));
    // const userName = user.username;

    const [ans1, setAns1] = useState(0)
    const [ans2, setAns2] = useState(0)
    const [ans3, setAns3] = useState(0)
    const [ans4, setAns4] = useState(0)
    const [ans5, setAns5] = useState(0)

    const [curAnsId, setCurAnsId] = useState("")
    const [curAns, setCurAns] = useState("")
    const [findStatus, setFindStatus] = useState("")

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
        let user = JSON.parse(localStorage.getItem('user-details'));
        let item = { id, industry, question, ans1, ans2, ans3, ans4, ans5 }
        // console.log(id)
        setLoading(true)
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/testresult", {
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/testresult`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
            body: JSON.stringify(item)
        }).then((result) => {
            // console.log("Result", result.status)
            result.json().then((resp) => {
                // console.log(resp)
                setLoading(false)
            })
        })
    }

    //
    const findRightAns = (id, value) => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        let item = { id, value }
        // console.log(id)
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/findans/", {
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/findans/`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
            body: JSON.stringify(item)
        }).then((result) => {
            // console.log("Result", result)
            result.json().then((resp) => {
                // console.log(resp)
                setFindStatus(resp.status)
            })
        })
    }

    const getAns = () => {
        setLoading(true)
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/question", {
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/question`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            // console.log("Result", result.status)
            result.json().then((resp) => {
                // console.log(resp)
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
        let user = JSON.parse(localStorage.getItem('user-details'));
        // const token = user.access;
        setLoading(true)
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/studentquestion", {
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/studentquestion`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            // console.log("Result", result.status)
            result.json().then((resp) => {
                // console.log(resp)
                setDataExam(resp.data)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }

    const deleteData = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        // const token = user.access;
        setLoading(true)
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/deleteresult", {
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/deleteresult`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            // console.log("Result", result.status)
            result.json().then((resp) => {
                console.log('resp', resp)
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
        setCurAnsId("")
        setCurAns("")
        setFindStatus("")
        var k = count + pk
        setCount(k)
        setLoading(true)
        // fetch(`https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/10th/question?page=${k}`, {
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/question?page=${k}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            // console.log("Result", result.status)
            if (result.status === 404) {
                setLoading(false)
                history.push('/10th/result')
                return alert.success("Your Task is completed ")
            }
            result.json().then((resp) => {
                // console.log(resp)
                setData(resp.results)
                setDataTemp(resp)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }


    const handleChange = event => {
        if (curAnsId === "") {
            const target = event.target
            const value = target.value
            const id = target.name
            setCurAnsId(id)
            setCurAns(value)
            findRightAns(id, value)
        } else {
            alert.error("You Allredy choses Options Please Next..")
        }
    }


    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div>
                        <Header />
                        <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

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
                                                        {/* Timer */}
                                                        <div className="time">
                                                            <NewTimer />
                                                        </div>
                                                        {/* Timer */}
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                data.map((e, i) =>
                                                    <div className="" key={i}>
                                                        <h1 className="fw-bold gray text-center">{count} To {dataTemp.count} </h1>
                                                        <h1 className="fw-bold gray text-center">{e.question} </h1>
                                                        <div classNameName="col mt-3">

                                                            <form action="" className=" d-flex justify-content-center">
                                                                <ul className="row box_text ">
                                                                    <li className="col-lg-12">(a) {e.a} <input className="float-right mt-3" type="radio" name={e.id} value={e.a} onChange={handleChange} /></li>
                                                                    <li className="col-lg-12">(b) {e.b} <input className="float-right mt-3" type="radio" name={e.id} value={e.b} onChange={handleChange} /></li>
                                                                    <li className="col-lg-12">(c) {e.c} <input className="float-right mt-3" type="radio" name={e.id} value={e.c} onChange={handleChange} /></li>

                                                                    {
                                                                        e.d ?
                                                                            <>
                                                                                <li className="col-lg-12">(d) {e.d} <input className="float-right mt-3" type="radio" name={e.id} value={e.d} onChange={handleChange} /></li>
                                                                            </>
                                                                            :
                                                                            <>
                                                                            </>
                                                                    }
                                                                    {
                                                                        e.e ?
                                                                            <>
                                                                                <li className="col-lg-12">(e) {e.e} <input className="float-right mt-3" type="radio" name={e.id} value={e.e} onChange={handleChange} /></li>
                                                                            </>
                                                                            :
                                                                            <>
                                                                            </>
                                                                    }
                                                                </ul>

                                                            </form>
                                                            <div className=" d-flex justify-content-center pt-3">
                                                                {
                                                                    findStatus === 200 ?
                                                                        <>
                                                                            <div class="alert alert-success" role="alert">
                                                                                 {`Right Answer this => ${curAns}`}
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        findStatus === 400 ?
                                                                        <>
                                                                            <div class="alert alert-danger" role="alert">
                                                                            {`Opps Wrong Answer this => ${curAns}`}
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                                }
                                                            </div>


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
                        </body>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Testpage10th
