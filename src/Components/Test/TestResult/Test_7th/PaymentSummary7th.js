import '../../../css/bootstrap.min.css'
import '../../../css/pogo-slider.min.css'
import '../../../css/style.css'
import '../../../css/custom.css'
import { useAlert } from 'react-alert'
import Loader from '../../../Loader/Loader'
import React, { useEffect, useState } from "react"
import Header from '../../../Header'
import { Link } from 'react-router-dom'

const PaymentSummary7th = () => {

    //------------------------------------- Hooks & Variable ------------------------------------------------//
    const alert = useAlert()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    let user = JSON.parse(localStorage.getItem('user-details'));

    //------------------------------------- Use Effect ------------------------------------------------//
    useEffect(() => {
        getData()
        setLoading(false)
    }, [])

    //------------------------------------- Logout Function ------------------------------------------------//

    //------------------------------------- getData from student Function ------------------------------------------------//
    const getData = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/7th/studentquestion`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user && user.access}`
            },
        }).then((result) => {
            result.json().then((resp) => {
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
            <div className="section margin-top_7">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full mt-5">
                                <div style={{ background: "#6E3CBC", borderRadius: "13px" }} className="w-100">
                                    <h1 className="text-center py-3 text-light">Payment Summary</h1>
                                </div>
                                <div className="full mt-3 back_payment">
                                    <h1 className="text-center mt-3 fw-bold text-dark">Career Assessment Test</h1>
                                    {
                                        data.map((e, i) =>
                                            <div className="float-left" key={i}>
                                                {
                                                    data.length === 0 ?
                                                        <>
                                                        </>
                                                        :
                                                        <>
                                                            <h5 className="text-start mt-1 fw-bold text-dark">Number of questions : <span style={{ fontWeight: "400", fontSize: "16px" }}>{count}</span></h5>
                                                            <h5 className="text-start mt-3 fw-bold text-dark">Duration : <span style={{ fontWeight: "400", fontSize: "16px" }}>{e.duration}</span> minutes</h5>
                                                            <h5 className="text-start mt-3 fw-bold text-dark">Student Name : <span style={{ fontWeight: "400", fontSize: "16px" }}>{user && user.last_name}</span></h5>
                                                            <h5 className="text-start mt-3 fw-bold text-dark">Date : <span style={{ fontWeight: "400", fontSize: "16px" }}>{e.date}</span></h5>
                                                            <h5 className="text-start mt-3 fw-bold text-dark">Class : <span style={{ fontWeight: "400", fontSize: "16px" }}>{e.grade.grade}</span></h5>
                                                            <h5 className="text-start mt-3 fw-bold text-dark mb-3">Test Instruction : <span style={{ fontWeight: "400", fontSize: "16px" }}>{e.grade.testInstruction}</span></h5>
                                                        </>
                                                }

                                            </div>
                                        )
                                    }

                                    <div className="float-right mr-5">
                                        <img style={{ width: "200px" }} className="img-fluid" src="/assets/images/logo.png" alt="image" />
                                        {
                                            data.map((e, i) =>
                                                <h3 className="mt-4 mr-5 text-dark" key={i}>Amount to be paid: <b>₹</b><span style={{ fontWeight: "600", fontSize: "25px", marginLeft: "2px" }}>{e.amount}</span></h3>
                                            )
                                        }
                                        {
                                            data.length === 0 ?
                                                <>
                                                    <Link><button disabled className="pay_btn float-right mr-5 disabled">Pay</button></Link>
                                                </>
                                                :
                                                <>
                                                    <Link to="/7th/paymentconfirm"><button className="pay_btn float-right mr-5">Pay</button></Link>
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

        </div>
    )
}

export default PaymentSummary7th
