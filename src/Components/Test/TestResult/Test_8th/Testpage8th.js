import React, { useState, useEffect, Fragment } from 'react'
import '../../../css/style.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader';
import { useHistory } from 'react-router-dom'
import Header from '../../../Header'
import NewTimer from '../../../../NewTimer'
import env from 'react-dotenv'


const Testpage6To9 = () => {
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

    const [ans1, setAns1] = useState(0)
    const [ans2, setAns2] = useState(0)
    const [ans3, setAns3] = useState(0)
    const [ans4, setAns4] = useState(0)
    const [ans5, setAns5] = useState(0)

    const [curAnsId, setCurAnsId] = useState("")
    const [curAns, setCurAns] = useState("")

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
        console.log(item)
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/testresult`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/8th/testresult", {
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

    const getAns = () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/question`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/8th/question", {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/studentquestion`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/8th/studentquestion", {
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
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/deleteresult`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/8th/deleteresult", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            // console.log("Result", result.status)
            result.json().then((resp) => {
                // console.log('resp', resp)
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
        fetch(`${process.env.REACT_APP_API_URL}/api/8th/question?page=${k}`, {
        // fetch(`https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/8th/question?page=${k}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            // console.log("Result", result.status)
            if (result.status === 404) {
                setLoading(false)
                history.push('/8th/result')
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

    // const handleChange = event => {
    //     const target = event.target
    //     const value = target.value
    //     const id = target.name
    //     setCurAnsId(id)
    //     setCurAns(value)
        
    //     // console.log('..................... == ', value,name)
    // }

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
                                                                    <li className="col-lg-12">(a) {e.a} <input className="float-right mt-3" type="radio" name="radioGroup" value={ans1} onChange={() => setAns1(1)} /></li>
                                                                    <li className="col-lg-12">(b) {e.b} <input className="float-right mt-3" type="radio" value={ans2} onChange={() => setAns2(1)} /></li>
                                                                    <li className="col-lg-12">(c) {e.c} <input className="float-right mt-3" type="radio" value={ans3} onChange={() => setAns3(1)} /></li>
                                                                    {/* <li className="col-lg-12">(c) {e.c} <input className="float-right mt-3" type="checkbox" id="flexCheckDefault" name={e.id} value={e.ans3} onChange={handleChange} /></li> */}
                                                                    {
                                                                        e.d ?
                                                                            <>
                                                                                <li className="col-lg-12">(d) {e.d} <input className="float-right mt-3" type="radio" value={ans4} onChange={() => setAns4(1)} /></li>
                                                                            </>
                                                                            :
                                                                            <>
                                                                            </>
                                                                    }
                                                                    {
                                                                        e.e ?
                                                                            <>
                                                                                <li className="col-lg-12">(e) {e.e} <input className="float-right mt-3" type="radio" value={ans5} onChange={() => setAns5(1)} /></li>
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
                            {/* <!-- end section --> */}


                            {/* <!-- ALL JS FILES --> */}
                            <script src="assets/js/jquery.min.js"></script>
                            <script src="assets/js/popper.min.js"></script>
                            <script src="assets/js/bootstrap.min.js"></script>
                            <script src="assets/owlcarousel1/jquery.min.js"></script>
                            <script src="assets/owlcarousel1/owl.carousel.min.js"></script>
                            {/* <!-- ALL PLUGINS --> */}
                            <script src="assets/js/jquery.magnific-popup.min.js"></script>
                            <script src="assets/js/jquery.pogo-slider.min.js"></script>
                            <script src="assets/js/slider-index.js"></script>
                            <script src="assets/js/smoothscroll.js"></script>
                            <script src="assets/js/form-validator.min.js"></script>
                            <script src="assets/js/contact-form-script.js"></script>
                            <script src="assets/js/isotope.min.js"></script>
                            <script src="assets/js/images-loded.min.js"></script>
                            <script src="assets/js/custom.js"></script>
                            <script src="assets/js/main.js"></script>
                        </body>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Testpage6To9
