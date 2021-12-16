import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './css/bootstrap.min.css';
import './css/pogo-slider.min.css';
import './css/style.css';
import './css/custom.css';
import { Link } from 'react-router-dom';
import Header from './Header';
const myGuruHome = () => {



    return (

        <>
            {/*  */}

            <Header />
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
                {/* <!-- Start Banner --> */}
                <div className="ulockd-home-slider mt-4">
                    {/* <!--<div className="container-fluid">--> */}
                    <div className="row">
                        {/* <!--<div className="pogoSlider" id="js-main-slider">--> */}
                        <div className="col-12 mt-4">
                            <div className="bannerH" style={{ background: "url(/assets/images/banner_img2.png)" }}>
                                <div className="container">
                                    <div className="row">
                                        {/* <!--<div className="col-md-12">--> */}
                                        {/* <!--    <div className="slide_text">--> */}
                                        {/* <!--        <h3><span span className="theme_color">You only have know one thing</span><br />you can learn anything</h3>--> */}
                                        {/* <!--    </div>--> */}
                                        {/* <!--</div>--> */}

                                        <div className="col-md-12 slide_text">
                                            <div className="row justify-content-md-center mt-5">
                                                <div className="clearfix mt-5"></div>
                                                <div className="col-12 col-sm-4 col-xl-3">
                                                    <div className="iconFunction topbg">
                                                        <img className="img-fluid" src="/assets/images/career.jpg" alt="" />
                                                        <a data-toggle='modal' href='#videoModal' >
                                                            <h2>Videos / Articles by</h2>
                                                            <strong>Career Guru's</strong>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4 col-xl-3">
                                                    <div className="iconFunction topbg2">
                                                        <img className="img-fluid" src="/assets/images/counsel.jpg" alt="" />
                                                        <a data-toggle='modal' href='#classesModal' >
                                                            <h2>6-12th</h2>
                                                            <strong>Check Your potential<br /> Career Guidance and Counselling</strong>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/*  */}

                                                {/*  */}
                                                <div className="col-12 col-sm-4 col-xl-3">
                                                    <div className="iconFunction topbg3">
                                                        <img className="img-fluid" src="/assets/images/potential.jpg" alt="" />
                                                        <a data-toggle='modal' href="#collegeModal">
                                                            <h2>College & working professional</h2>
                                                            <strong>Check Your potential <br /> Career Guidance and Counselling</strong>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main">
                                            <div className="form-group has-search">
                                                <span className="fa fa-search form-control-feedback"></span>
                                                <input type="text" className="form-control" placeholder="Search College, Exam, career, videos and more" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- .pogoSlider --> */}
                    </div>
                    {/* <!--</div>--> */}
                </div>
                {/* <!-- End Banner --> */}

                {/* Modal starts */}
                <div className="modal homeModal" id="videoModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Videos / Articles by Career Guru's</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <a href="/guruexpert" className="btn btn-lg btn-success square-button"><i
                                            className="fa fa-video-camera" aria-hidden="true"></i><br />Videos</a>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <a className="btn btn-lg btn-warning square-button"><i
                                            className="fa fa-file-text" aria-hidden="true"></i><br />Articles</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal" id="classesModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Class 6-12<sup>th</sup></h4>
                                <button type="button" className="close d-none" data-dismiss="dydModal" aria-hidden="true">×</button>
                            </div>
                            
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a data-toggle='modal' href="#" data-target="#dydModal7th" className="btn btn-lg btn-primary square-button" data-dismiss="modal"
                                                id="ett">Class<br /><span>6-8<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a href='/9th/paymentsummary' className="btn btn-lg btn-success square-button" >
                                                Class<br /><span>9<sup>th</sup></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                        <a data-toggle='modal' href="#" data-target="#dydModal0th" className="btn btn-lg btn-danger square-button" data-dismiss="modal"
                                                id="ett">Class<br /><span>10<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a data-toggle='modal' href="#" data-target="#dydModal" className="btn btn-lg btn-warning square-button" data-dismiss="modal"
                                                id="ett">Class<br /><span>11-12<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                

                {/*  */}
                <div className="modal homeModal" id="dydModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Discover Your Dream Program</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                            <a href="/paymentsummary" id="iknowModalBtn" className="btn btn-lg btn-success square-button">I
                                                Know<br />What I Want<br />To Do</a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="idontknowModalBtn" className="btn btn-lg btn-warning square-button">I
                                                Wish<br />To Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal" id="dydModal7th">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">choose</h4>
                                <button type="button" className="close d-none" data-dismiss="dydModal7th" aria-hidden="true">×</button>
                            </div>
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        
                                        <div className="button_holder">
                                            <a data-toggle='modal' href="/6th/paymentsummary" className="btn btn-lg btn-danger square-button"
                                            >Class<br /><span>6<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                            <a data-toggle='modal' href="/7th/paymentsummary" className="btn btn-lg btn-primary square-button"
                                            >Class<br /><span>7<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                    <div className="button_holder">
                                            <a data-toggle='modal' href="/8th/paymentsummary" className="btn btn-lg btn-success square-button"
                                            >Class<br /><span>8<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal" id="dydModal0th">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">choose</h4>
                                <button type="button" className="close d-none" data-dismiss="dydModal0th" aria-hidden="true">×</button>
                            </div>
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        
                                        <div className="button_holder">
                                            <a data-toggle='modal' href="/10th/int/paymentsummary" className="btn btn-lg btn-danger square-button"
                                            >Interest<br /><span>10<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                            <a data-toggle='modal' href="/10th/paymentsummary" className="btn btn-lg btn-primary square-button"
                                            >Basic<br /><span>10<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="modal homeModal" id="collegeModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Are you College & Working Professionals?</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <a data-toggle='modal' href="#" data-target="#collegeworking" id="graduationBtn" className="btn btn-lg btn-info square-button " data-dismiss="modal"><i
                                            className="fa fa-graduation-cap" aria-hidden="true"></i><br />College<br />Graduates</a>
                                    </div>
                                    <div className="col-6 text-center">
                                        <a href="#" id="workingBtn" className="btn btn-lg btn-primary square-button " data-dismiss="modal"><i
                                            className="fa fa-handshake-o"
                                            aria-hidden="true"></i><br />Working<br />Professionals</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="modal homeModal" id="collegeworking">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">College Graduates</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="" className="btn btn-lg btn-success square-button"><i
                                                className="fa fa-book" aria-hidden="true"></i><br />Career<br />Information<br />Capsule</a>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="" className="btn btn-lg btn-primary square-button"><i
                                                className="fa fa-video-camera" aria-hidden="true"></i><br />Access Expert<br />Videos</a>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="" className="btn btn-lg btn-warning square-button"><i
                                                className="fa fa-cogs" aria-hidden="true"></i><br />Workshops/<br />Seminars</a>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="" className="btn btn-lg btn-success square-button"><i
                                                className="fa fa-headphones" aria-hidden="true"></i><br />Speak to A<br />Counsellor</a>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="" className="btn btn-lg btn-warning square-button"><i
                                                className="fa fa-briefcase" aria-hidden="true"></i><br />Psychometric<br />Assessment</a>

                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="" className="btn btn-lg btn-primary square-button"><i
                                                className="fa fa-line-chart" aria-hidden="true"></i><br />Training<br />Internship</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal end */}


                {/* <!-- section --> */}
                <div className="section tabbar_menu News">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="tab_menu">
                                    <strong>Featured Videos from Career Expert</strong>
                                    <div className="clearfix"></div>
                                    <div id="owl-carousel-two" className="career owl-carousel owl-theme">
                                        {/* <!--<div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/7orpIslLZjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                       </div> 
                     </div>
                     <div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/zDhF8OMwsTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </div> 
                     </div>
                     <div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/7orpIslLZjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                       </div> 
                     </div>
                     <div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/zDhF8OMwsTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </div> 
                     </div>
                     <div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/7orpIslLZjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                       </div> 
                     </div>
                     <div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/zDhF8OMwsTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </div> 
                     </div>
                     <div className="item">
                       <div className="newContent">
                           <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                       </div> 
                     </div>--> */}
                                        <div className="item">
                                            <div className="newContent">
                                                <div className="youtube-video-place " data-yt-url="7orpIslLZjE">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="newContent">
                                                <div className="youtube-video-place " data-yt-url="zDhF8OMwsTY">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="newContent">
                                                <div className="youtube-video-place " data-yt-url="tgbNymZ7vqY">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="newContent">
                                                <div className="youtube-video-place " data-yt-url="7orpIslLZjE">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="newContent">
                                                <div className="youtube-video-place " data-yt-url="zDhF8OMwsTY">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="newContent">
                                                <div className="youtube-video-place " data-yt-url="tgbNymZ7vqY">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
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

                {/* <!-- Welcome My Guru section  --> */}
                <div className="section margin-top_7">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 layout_padding_2">
                                <div className="full">
                                    <div className="heading_main text_align_left">
                                        <h2><span>Welcome To</span> My Guru</h2>
                                    </div>
                                    <div className="full">
                                        <p>MyGuru is a online platform for guidance
                                            and counselling for school / college students. By providing
                                            exhausting information, numerous careers along with Industry Gurus videos, this platform provide the tools required to make connect choices in life and being successful. Tools are also been provided for checking your well being a life skills with specific guidance on how to be happen through improving well being scores & how to be successful by improving life skills course.</p>
                                    </div>
                                    <div className="full">
                                        <a className="hvr-radial-out button-theme" href="#">About more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="full-leftImg">
                                    <img className="img-fluid" usemap="#workmap" src="assets/images/dont-know.png" alt="" />
                                    <map name="workmap">
                                        <area shape="circle" coords="360,250,50" href="#" alt="" /> {/* what subject area */}
                                        <area shape="circle" coords="50,310,80" href="#" alt="" />  {/* check your apptitude area */}
                                        <area shape="circle" coords="100,140,40" href="#" alt="" />  {/* personality area */}
                                        <area shape="circle" coords="250,100,60" href="#" alt="" />  {/* career to choose area */}
                                        <area shape="circle" coords="220,360,60" href="#" alt="" />  {/* IQ area */}
                                        <area shape="circle" coords="220,220,35" href="#" alt="" />  {/* Don't know area */}
                                    </map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end section --> */}


                {/* <!-- Banner Don't Know section --> */}

                {/* <!-- end section --> */}
                {/* <!-- Banner Don't Know section --> */}
                {/* <!--   <div className="section careerChoose">--> */}
                {/* <!--       <div id="owl-carousel-two" className="career owl-carousel owl-theme">--> */}
                {/* <!--            <div className="item">--> */}
                {/* <!--              <img className="img-responsive" src="assets/images/6-12class.jpg" alt="" /> --> */}
                {/* <!--            </div>--> */}


                {/* <!--       </div>--> */}

                {/* <!--</div>--> */}
                <div className="clearfix"></div>

                {/* <!-- Popular Programs section --> */}
                <div className="section layout_padding" id="yourcareer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full d-flex">
                                    <div className="heading_main text_align_center">
                                        <h2 className="mt-4 ml-lg-5 ml-sm-0 pl-5"><span>Choose Your </span>Career</h2>
                                    </div>
                                    <div className="float-end">
                                        <a className="hvr-radial-out button-theme" href="vocational-career">Vocational Career</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <a href="innerpage.html">
                                    <div className="full blog_img_popular">
                                        <img className="img-responsive" src="assets/images/career/p1.jpg" alt="#" />
                                        <h4>ACTING</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p2.jpg" alt="#" />
                                    <h4>ACTUARY</h4>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p3.jpg" alt="#" />
                                    <h4>ADVERTISING</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p4.jpg" alt="#" />
                                    <h4>AGRICULTURE AND ITS ALLIED FIELDS</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p8.jpg" alt="#" />
                                    <h4>ARCHITECTURE</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p5.jpg" alt="#" />
                                    <h4>ARMED FORCES</h4>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p10.jpg" alt="#" />
                                    <h4>BANKING </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p6.jpg" alt="#" />
                                    <h4>CHARTERED ACCOUNTANCY</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p7.jpg" alt="#" />
                                    <h4>CHARTERED FINANCIAL ANALYST (CFA)</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p8.jpg" alt="#" />
                                    <h4>CIVIL AVIATION AS A CAREER</h4>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p9.jpg" alt="#" />
                                    <h4>CIVIL SERVICES AND OTHER</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p10.jpg" alt="#" />
                                    <h4>COMPETITIVE EXAMINATIONS</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p11.jpg" alt="#" />
                                    <h4>COMPANY SECRETARY</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p12.jpg" alt="#" />
                                    <h4>COMPUTERS</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p13.jpg" alt="#" />
                                    <h4>CORRESPONDENCE COURSES</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p14.jpg" alt="#" />
                                    <h4>COST ACCOUNTANCY</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p15.jpg" alt="#" />
                                    <h4>DENTISTRY</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p16.jpg" alt="#" />
                                    <h4>DESIGNING</h4>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p17.jpg" alt="#" />
                                    <h4>ENGINEERING</h4>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p18.jpg" alt="#" />
                                    <h4>FINE ARTS</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p6.jpg" alt="#" />
                                    <h4>HOTEL MANAGEMENT</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p19.jpg" alt="#" />
                                    <h4>JOURNALISM</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p5.jpg" alt="#" />
                                    <h4>LAW</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p7.jpg" alt="#" />
                                    <h4>LIBRARY AND INFORMATION SCIENCES</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p20.jpg" alt="#" />
                                    <h4>MANAGEMENT</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p21.jpg" alt="#" />
                                    <h4>MASS COMMUNICATION</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p22.jpg" alt="#" />
                                    <h4>MEDICINE</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p23.jpg" alt="#" />
                                    <h4>MERCHANT NAVY</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p24.jpg" alt="#" />
                                    <h4>PARAMEDICAL COURSES</h4>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p25.jpg" alt="#" />
                                    <h4>PERFORMING ARTS</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p26.jpg" alt="#" />
                                    <h4>PHARMACY</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p27.jpg" alt="#" />
                                    <h4>PROTECTIVE SERVICES</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p28.jpg" alt="#" />
                                    <h4>SCHOLARSHIPS AND FELLOWSHIPS</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p29.jpg" alt="#" />
                                    <h4>SOCIAL WORKER</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p13.jpg" alt="#" />
                                    <h4>TEACHING AS A CAREER</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/career/p30.jpg" alt="#" />
                                    <h4>TOURISM</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="full blog_img_popular">
                                    <img className="img-responsive" src="assets/images/p4.jpg" alt="#" />
                                    <h4>VOCATIONAL COURSES</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end section --> */}

                {/* <!--Section dont Know Start--> */}
                <div className="section layout_padding sliderKnow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <div className="heading_main text_align_center">
                                        <h2><span>Don't </span>Know?</h2>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div id="demo-owl-carousel" className="sliderH owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="dontKnow">
                                            {/* <div className="dontknowimg"><img src="assets/images/dk1.png"></div> */}
                                            <h1>Dont know what <span>Subject to choose in Class 10th</span></h1>
                                            <p>
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="dontKnow">
                                            <div className="dontknowimg"><img src="assets/images/dk2.png" /></div>
                                            <h1>Check Your <span>Aptitude and Personality</span></h1>
                                            <p>
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="dontKnow">
                                            <div className="dontknowimg"><img src="assets/images/dk3.png" /></div>
                                            <h1>Dont know what <span>Career to choose</span></h1>
                                            <p>
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="dontKnow">
                                            <div className="dontknowimg"><img src="assets/images/dk4.png" /></div>
                                            <h1>Dont know how to <span>Improve Academic mark/Grade </span></h1>
                                            <p>
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="dontKnow">
                                            <div className="dontknowimg"><img src="assets/images/dk5.png" /></div>
                                            <h1>Choose Your <span>Life Skills</span></h1>
                                            <p>
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Section end--> */}

                {/* <!-- section contact start --> */}
                <div className="section layout_padding padding_bottom-0 ">
                    <div className="container">
                        <div className="row">
                            <hr />
                            <div className="col-md-12">
                                <div className="full">
                                    <div className="heading_main text_align_center">
                                        <h2><span>Contact</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- end section --> */}
                {/* <!-- section --> */}
                <div className="section contact_section" style={{ background: "#12385b" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="full float-right_img">
                                    <img src="assets/images/img10.png" alt="#" />
                                </div>
                            </div>
                            <div className="layout_padding col-lg-6 col-md-6 col-sm-12">
                                <div className="contact_form">
                                    <form action="contact.html">
                                        <fieldset>
                                            <div className="full field">
                                                <input type="text" placeholder="Your Name" name="your name" />
                                            </div>
                                            <div className="full field">
                                                <input type="email" placeholder="Email Address" name="Email" />
                                            </div>
                                            <div className="full field">
                                                <input type="phn" placeholder="Phone Number" name="Phone number" />
                                            </div>
                                            <div className="full field">
                                                <textarea placeholder="Massage"></textarea>
                                            </div>
                                            <div className="full field">
                                                <div className="center"><button>Send</button></div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end section --> */}


                <div className="modal homeModal" id="videoModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Videos / Articles by Career Guru's</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <a href="guru-expert-videos.html" className="btn btn-lg btn-success square-button"><i className="fa fa-video-camera" aria-hidden="true"></i><br />Videos</a>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <a className="btn btn-lg btn-warning square-button"><i className="fa fa-file-text" aria-hidden="true"></i><br />Articles</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal" id="classesModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Class 6-12<sup>th</sup></h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                            <a href="#" className="btn btn-lg btn-success square-button" id="ste">Class<br /><span>6-8<sup>th</sup></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a href="#" className="btn btn-lg btn-primary square-button" id="ninth">Class<br /><span>9<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                            <a href="#" className="btn btn-lg btn-danger square-button" id="tenth">Class<br /><span>10<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a href="#" className="btn btn-lg btn-warning square-button" id="ett">Class<br /><span>11-12<sup>th</sup></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal" id="collegeModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Are you College & Working Professionals?</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <a href="#" id="graduationBtn" className="btn btn-lg btn-info square-button"><i className="fa fa-graduation-cap" aria-hidden="true"></i><br />College<br />Graduates</a>
                                    </div>
                                    <div className="col-6 text-center">
                                        <a href="#" id="workingBtn" className="btn btn-lg btn-primary square-button"><i className="fa fa-handshake-o" aria-hidden="true"></i><br />Working<br />Professionals</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal" id="dydModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Discover Your Dream Program</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        {/* <!--<a data-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>--> */}
                                        <div className="button_holder">
                                            <a href="#" id="iknowModalBtn" className="btn btn-lg btn-success square-button">I Know<br />What I Want<br />To Do</a>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="button_holder">
                                            <a href="#" id="idontknowModalBtn" className="btn btn-lg btn-warning square-button">I Wish<br />To Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal modalafterdyd" id="iknowModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">I Know What I Want To Do!</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">

                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal modalafterdyd" id="idontknowModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">I Wish To Explore!</h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">

                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal homeModal modalafterdyd" id="candworkModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"></h4>
                                <button type="button" className="close d-none" data-dismiss="modal" aria-hidden="true">×</button>
                            </div><div className="container"></div>
                            <div className="modal-body">
                                <div className="row">

                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">Close</a>
                                {/* <!--<a href="#" className="btn btn-primary">Save changes</a>--> */}
                            </div>
                        </div>
                    </div>
                </div>

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
        </ >
    )
}


export default myGuruHome
