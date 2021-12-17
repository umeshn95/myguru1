import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header'
const Assessment = () => {
    return (
        <div>
        <Header />
                <div className="section margin-top_7">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <div className="mt-4">
                                        <img className="col-lg-2 img-fluid" src="assets/images/logo.png" alt="" />
                                        <h1 className="text-center fs-1 fw-bold">Career Assessment Test</h1>
                                    </div>
                                    <div className="full mt-3">
                                        <h1 className="text-start mt-3 ml-4 fw-bold gray">General Instructions</h1>
                                        <div className=" ">
                                            <h1 className="text-center mt-3 gray">Please read the instructions carefully</h1>
                                            <p className="text-start mt-3 fw-bold ml-4">Instructions for students</p>
                                            <div className="row">
                                                <p className="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p className="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p className="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p className="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p className="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <p className="ml-3 fs-6 col-lg-8">1. Required Version of safe browser Dignissimos in sequi omnis inventore provident fugit. Fuga unde libero maxime quas doloribus est itaque quos similique, quo, voluptates quaerat, nisi laborum.</p>
                                                <div className="d-flex justify-content-center">
                                                    <Link to='/testpage'><a><button className="pay_btn3 ">Proceed to Test</button></a></Link>
                                                </div>
                                            </div>
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

export default Assessment
