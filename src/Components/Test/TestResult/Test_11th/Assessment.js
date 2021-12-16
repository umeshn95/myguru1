import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../../Header'
const Assessment = () => {
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
                                    <div class="mt-4">
                                        <img class="col-lg-2 img-fluid" src="assets/images/logo.png" alt="" />
                                        <h1 class="text-center fs-1 fw-bold">Career Assessment Test</h1>
                                    </div>
                                    <div class="full mt-3">
                                        <h1 class="text-start mt-3 ml-4 fw-bold gray">General Instructions</h1>
                                        <div class=" ">
                                            <h1 class="text-center mt-3 gray">Please read the instructions carefully</h1>
                                            <p class="text-start mt-3 fw-bold ml-4">Instructions for students</p>
                                            <div className="row">
                                                <p class="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p class="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p class="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p class="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p class="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p class="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <div class="d-flex justify-content-center">
                                                    <Link to='/testpage'><a><button class="pay_btn3 ">Proceed to Test</button></a></Link>
                                                </div>
                                            </div>
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

export default Assessment
