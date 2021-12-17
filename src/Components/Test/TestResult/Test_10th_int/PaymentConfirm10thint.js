import React from 'react'
import '../../../css/bootstrap.min.css'
import '../../../css/pogo-slider.min.css'
import '../../../css/style.css'
import '../../../css/custom.css'
import Header from '../../../Header'
import { Link } from 'react-router-dom'

const PaymentConfirm10thint = () => {
    return (
        <div>
            <Header />
            <div className="section margin-top_7">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div style={{ background: "#770202" }} className="w-100">
                                    <h1 className="text-center py-3 text-light">Payment Confirmation</h1>
                                </div>
                                <div className="full mt-3 col-lg-5 col-sm-12 back_payment2 float-left ml-5">

                                    <img className="img-fluid col-lg-3 col-sm-12 offset-lg-8" src="assets/images/logo.png" alt="" />
                                    <div className="paymnt">
                                        <i className="fas fa-check-circle check_circle mt-3"></i>
                                        <h1 className="text-start mt-3 text-center text-light">Payment Confirmed</h1>
                                        <h1 className="text-start mt-3 fw-bold text-light text-center w-75">We have sent you an email with all the details of your order with order no. xxxxxxxxxx</h1>
                                        <Link to='/10th/int/paymentconfirm'><a><button className="btn proceed_test">Proceed to test</button></a></Link>
                                    </div>
                                </div>
                                <div className="full mt-3 col-lg-5 col-sm-12 back_payment3 float-right mr-5">
                                    <div className=" mr-5 mx-5">
                                        <h1 className="mt-4 text-dark text-center"><b>Order Summary</b></h1>
                                        <hr />
                                        <h1 className="mt-4 text-dark text-center">Career assessment test for an exhaustive e-learning prgram for the complete preparation of JEE main.</h1>
                                        <h1 className="mt-5 mr-5 text-dark">Total: INR 1000/-</h1>
                                        <a href="#">*view invoice*</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentConfirm10thint
