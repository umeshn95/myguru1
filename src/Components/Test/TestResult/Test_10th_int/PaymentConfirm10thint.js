import React from 'react'
import { Dropdown } from 'react-bootstrap'
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
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

                {/* <!-- Welcome My Guru section  --> */}
                <div class="section margin-top_7">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="full">
                                    <div style={{ background: "#770202" }} class="w-100">
                                        <h1 class="text-center py-3 text-light">Payment Confirmation</h1>
                                    </div>
                                    <div class="full mt-3 col-lg-5 col-sm-12 back_payment2 float-left ml-5">

                                        <img class="img-fluid col-lg-3 col-sm-12 offset-lg-8" src="assets/images/logo.png" alt="" />
                                        <div class="paymnt">
                                            <i class="fas fa-check-circle check_circle mt-3"></i>
                                            <h1 class="text-start mt-3 text-center text-light">Payment Confirmed</h1>
                                            <h1 class="text-start mt-3 fw-bold text-light text-center w-75">We have sent you an email with all the details of your order with order no. xxxxxxxxxx</h1>
                                            <Link to='/10th/int/paymentconfirm'><a><button class="btn proceed_test">Proceed to test</button></a></Link>
                                        </div>

                                    </div>
                                    <div class="full mt-3 col-lg-5 col-sm-12 back_payment3 float-right mr-5">
                                        <div class=" mr-5 mx-5">
                                            <h1 class="mt-4 text-dark text-center"><b>Order Summary</b></h1>
                                            <hr />
                                            <h1 class="mt-4 text-dark text-center">Career assessment test for an exhaustive e-learning prgram for the complete preparation of JEE main.</h1>
                                            <h1 class="mt-5 mr-5 text-dark">Total: INR 1000/-</h1>
                                            <a href="#">*view invoice*</a>
                                        </div>
                                    </div>
                                </div>
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
    )
}

export default PaymentConfirm10thint
