import React, { useState, useEffect, Fragment } from 'react'
import '../../../css/style.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader';
import { useHistory } from 'react-router-dom'
import Header from '../../../Header'
import NewTimer from '../../../../NewTimer'


const Testpage8th = () => {
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
        let item = { id, industry, question, ans1, ans2, ans3, ans4, ans5 }
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/testresult`, {
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

    //
    const findRightAns = (id, value) => {
        let item = { id, value }
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/findans/`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                setFindStatus(resp.status)
            })
        })
    }

    const getAns = () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/question`, {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/studentquestion`, {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/deleteresult`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/question?page=${k}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            if (result.status === 404) {
                setLoading(false)
                history.push('/8th/result')
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
                                            data.map((data, i) =>
                                                <div className="" key={i}>
                                                    <h1 className="fw-bold gray text-center">{count}  {dataTemp.count} </h1>
                                                    <h1 className="fw-bold gray text-center"><img style={{height:'400px',width:'400px'}} src={process.env.REACT_APP_API_URL+data.question}></img> </h1>
                                                    <div classNameName="col mt-3">

                                                        <form action="" className=" d-flex justify-content-center">
                                                        <ul className="row box_text ">
                                                                <li className="col-lg-12">(a) <img style={{height:'100px',width:'100px'}}  src={process.env.REACT_APP_API_URL+data.a}></img> <input className="float-right mt-3" type="radio" name={data.id} value={data.a} onChange={handleChange} /></li>
                                                                <li className="col-lg-12">(b)  <img style={{height:'100px',width:'100px'}} src={process.env.REACT_APP_API_URL+data.b}></img> <input className="float-right mt-3" type="radio" name={data.id} value={data.b} onChange={handleChange} /></li>
                                                                <li className="col-lg-12">(c)  <img style={{height:'100px',width:'100px'}} src={process.env.REACT_APP_API_URL+data.c}></img> <input className="float-right mt-3" type="radio" name={data.id} value={data.c} onChange={handleChange} /></li>
                                                                <li className="col-lg-12">(d)  <img style={{height:'100px',width:'100px'}} src={process.env.REACT_APP_API_URL+data.d}></img> <input className="float-right mt-3" type="radio" name={data.id} value={data.d} onChange={handleChange} /></li>
                                                            </ul>

                                                        </form>
                                                        <div className=" d-flex justify-content-center pt-3">
                                                            {
                                                                findStatus === 200 ?
                                                                    <>
                                                                        <div className="alert alert-success" role="alert">
                                                                            {`Right Answer this => ${curAns}`}
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    findStatus === 400 ?
                                                                        <>
                                                                            <div className="alert alert-danger" role="alert">
                                                                                'Oops Wrong Answer'
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                            }
                                                        </div>
                                                        <div className="mr-5 mt-3">
                                                            <a><button className="pay_btn float-right col-lg-1 mr-5" onClick={() => submit(1, data.industry.industry, data.question, data.id)} >Next</button></a>
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

export default Testpage8th
