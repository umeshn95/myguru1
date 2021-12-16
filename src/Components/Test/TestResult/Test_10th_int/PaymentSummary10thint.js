import '../../../css/bootstrap.min.css'
import '../../../css/pogo-slider.min.css'
import '../../../css/style.css'
import '../../../css/custom.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader'
import React, { useEffect, useState } from "react"
import { useHistory, Link } from 'react-router-dom'
import Header from '../../../Header'
import env from 'react-dotenv'

const PaymentSummary10thint = () => {

    //------------------------------------- Hooks & Variable ------------------------------------------------//
    const alert = useAlert()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const [count, setCount] = useState([])
    // console.log('count',data)
    // console.log('count', count)
    let user = JSON.parse(localStorage.getItem('user-details'));

    //------------------------------------- Use Effect ------------------------------------------------//
    useEffect(() => {
        getData()
        setLoading(false)
    }, [])

    //------------------------------------- Logout Function ------------------------------------------------//
    const history = useHistory();

    //------------------------------------- getData from student Function ------------------------------------------------//
    const getData = () => {
        let user = JSON.parse(localStorage.getItem('user-details'));
        // const token = user.access;
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/api/10th/int/studentquestion`, {
        // fetch("https://myguruonline.herokuapp.com${process.env.REACT_APP_API_URL}/api/7th/studentquestion", {
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
                setData(resp.data)
                setCount(resp.count)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }

    //------------------------------------- Loader ------------------------------------------------//
    if (loading) {
        return <Loader />
    }

    //------------------------------------- Main Root ------------------------------------------------//
    return (
        <div>
            <Header />
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
                {/* <!-- Start header --> */}

                {/* <!-- End header --> */}
                {/* <!-- Welcome My Guru section  --> */}
                <div className="section margin-top_7">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <div style={{ background: "#770202" }} className="w-100">
                                        <h1 className="text-center py-3 text-light">Payment Summary</h1>
                                    </div>
                                    <div className="full mt-3 back_payment">
                                        <h1 className="text-center mt-3 fw-bold text-light">Career Assessment Test</h1>
                                        {
                                            data.map((e, i) =>
                                                <div className="float-left" key={i}>
                                                    {
                                                        data.length === 0 ?
                                                            <>
                                                            </>
                                                            :
                                                            <>
                                                                <h1 className="text-start mt-3 fw-bold text-light">Number of questions : <span>{count}</span></h1>
                                                                <h1 className="text-start mt-3 fw-bold text-light">Duration : <span>{e.duration}</span> minutes</h1>
                                                                <h1 className="text-start mt-3 fw-bold text-light">Student Name : <span>{user && user.last_name}</span></h1>
                                                                <h1 className="text-start mt-3 fw-bold text-light">Date : <span>{e.date}</span></h1>
                                                                <h1 className="text-start mt-3 fw-bold text-light">Class : <span>{e.grade.grade}</span></h1>
                                                                <h1 className="text-start mt-3 fw-bold text-light">Test Instruction : <span>{e.grade.testInstruction}</span></h1>
                                                            </>
                                                    }

                                                </div>
                                            )
                                        }

                                        <div className="float-right mr-5">
                                            <img style={{ width: "250px" }} className="img-fluid" src="assets/images/logo.png" alt="image" />
                                            {
                                                data.map((e, i) =>
                                                    <h1 className="mt-4 mr-5 text-light" key={i}><b>Amount to be paid: INR {e.amount}</b></h1>
                                                )
                                            }
                                            {
                                                data.length === 0 ?
                                                    <>
                                                        <Link><button disabled className="pay_btn float-right mr-5 disabled">Pay</button></Link>
                                                    </>
                                                    :
                                                    <>
                                                        <Link to="/10th/int/paymentassessment"><button className="pay_btn float-right mr-5">Pay</button></Link>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end section --> */}




                {/* <!-- Start Footer --> 

                <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up"></i></a>
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
    )
}

export default PaymentSummary10thint
