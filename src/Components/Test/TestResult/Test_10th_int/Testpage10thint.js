import React, { useState, useEffect, Fragment } from 'react'
import '../../../css/style.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader';
import { useHistory } from 'react-router-dom'
import Header from '../../../Header'
import NewTimer from '../../../../NewTimer'


const Testpage10thint = () => {
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
    const [ans6, setAns6] = useState(0)
    const [ans7, setAns7] = useState(0)
    const [ans8, setAns8] = useState(0)
    const [ans9, setAns9] = useState(0)
    const [ans10, setAns10] = useState(0)
    const [ans11, setAns11] = useState(0)
    const [ans12, setAns12] = useState(0)
    const [ans13, setAns13] = useState(0)
    const [ans14, setAns14] = useState(0)
    const [ans15, setAns15] = useState(0)
    const [ans16, setAns16] = useState(0)
    const [ans17, setAns17] = useState(0)
    const [ans18, setAns18] = useState(0)
    const [ans19, setAns19] = useState(0)
    const [ans20, setAns20] = useState(0)


    useEffect(() => {
        getAns();
        getData();
        deleteData();
    }, []);

    const submit = (e, industry, question, id) => {
        pagination(e)
        sendDataResult(industry, question, id)

    }

    const sendDataResult = (industry, question, id) => {
        let item = { id, industry, question, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11, ans12, ans13, ans14, ans15, ans16, ans17, ans18, ans19, ans20 }
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/int/testresult`, {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/int/question`, {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/int/studentquestion`, {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/int/deleteresult`, {
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
        setAns6(0)
        setAns7(0)
        setAns8(0)
        setAns9(0)
        setAns10(0)
        setAns11(0)
        setAns12(0)
        setAns13(0)
        setAns14(0)
        setAns15(0)
        setAns16(0)
        setAns17(0)
        setAns18(0)
        setAns19(0)
        setAns20(0)
        var k = count + pk
        setCount(k)
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/int/question?page=${k}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            if (result.status === 404) {
                setLoading(false)
                history.push('/10th/int/result')
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
                                                    <h5 className="fw-bold gray text-center">{count} of {dataTemp.count} </h5>
                                                    <div className="center">
                                                        <h5 className="fw-bold gray text-center w-50">{e.question} </h5>
                                                    </div>
                                                    <hr />
                                                    <div className="d-flex justify-content-center">
                                                        <h6 className="fw-bold gray text-center mx-2">L = Like</h6>
                                                        <h6 className="fw-bold gray text-center mx-2">D = Dislike</h6>
                                                        <h6 className="fw-bold gray text-center mx-2">N = Not sure</h6>
                                                    </div>
                                                    <div classNameName="col mt-3">

                                                        <form action="" className=" d-flex justify-content-center">
                                                            <ul className="row box_text">
                                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                                    <h5 className='pr-3 pt-2 '>N</h5>
                                                                    <h5 className='pr-3 pt-2 '>D</h5>
                                                                    <h5 className='pr-3 pt-2 '>L</h5>
                                                                </div>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(a) {e.a}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans1} onChange={() => setAns1(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns1(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns1(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(b) {e.b}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans2} onChange={() => setAns2(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns2(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns2(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(c) {e.c}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans3} onChange={() => setAns3(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns3(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns3(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(d) {e.d}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans4} onChange={() => setAns4(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns3(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns3(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(e) {e.e}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans5} onChange={() => setAns5(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns4(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns4(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(f) {e.f}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans6} onChange={() => setAns6(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns5(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns5(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(g) {e.g}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans7} onChange={() => setAns7(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns6(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns6(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(h) {e.h}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans8} onChange={() => setAns8(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns7(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns7(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(i) {e.i}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans9} onChange={() => setAns9(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns8(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns8(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(j) {e.j}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans10} onChange={() => setAns10(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns9(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns9(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(k) {e.k}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans11} onChange={() => setAns11(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns10(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns10(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(l) {e.l}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans12} onChange={() => setAns12(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns11(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns11(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(m) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans13} onChange={() => setAns13(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(n) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans14} onChange={() => setAns14(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(o) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans15} onChange={() => setAns15(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(p) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans16} onChange={() => setAns16(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(q) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans17} onChange={() => setAns17(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(r) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans18} onChange={() => setAns18(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(s) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans19} onChange={() => setAns19(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>
                                                                <li className="col-lg-12"><span style={{ float: "left" }}>(t) {e.m}</span> <input className="float-right mt-3 mx-1 " type="radio" value={ans20} onChange={() => setAns20(1)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /> <input className="float-right mt-3 mx-1" type="radio" value={ans1} onChange={() => setAns12(0)} /></li>

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

export default Testpage10thint
