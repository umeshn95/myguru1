import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'
import { Link } from 'react-router-dom'

const GuruExpertVideos = () => {
    return (
        <div>
            <section className="guruVideosList ActingList ">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7">
                            <img src="assets/images/videosimage/ad.png" width="100%" />
                        </div>
                        <div className="col-md-5">
                            <img src="assets/images/videosimage/ad2.jpg" width="100%" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="guruVideosList ActingList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="InnerLeft ">
                                <div className="asideNav">
                                    <a href="javascript:;">
                                        <div className="form-group has-search">
                                            <span className="fa fa-search form-control-feedback"></span>
                                            <input type="text" className="form-control" placeholder="Search College, Exam, career, videos and more" />
                                        </div>
                                    </a>
                                    <a href="javascript:;"><i className="fa fa-list" aria-hidden="true"></i> All Videos</a>
                                    <a href="javascript:;"><i className="fa fa-paper-plane" aria-hidden="true"></i> Latest</a>
                                    <a href="javascript:;"><i className="fa fa-bolt" aria-hidden="true"></i> Trending</a>
                                    <a href="javascript:;"><i className="fa fa-briefcase" aria-hidden="true"></i> Careers</a>
                                    <a href="javascript:;"><i className="fa fa-sun-o" aria-hidden="true"></i> Well Being</a>
                                    <a href="javascript:;"><i className="fa fa-sticky-note-o" aria-hidden="true"></i> My List</a>
                                    <a href="javascript:;"><span className="btnList" style={{ width: "100%" }}><i className="fa fa-bookmark-o" aria-hidden="true"></i> Featured Articles</span></a>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 zero-left">
                            <div className="VideoList">
                                <h3 className="heading"><span>All Videos</span> <a ><Link to='/youtube'>VIEW ALL</Link></a></h3>
                                <div className="VideosBox">
                                    <div id="owl-carousel-guruVideo" className="career owl-carousel owl-theme">
                                        <div className="item">
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="VideoList">
                                <h3 className="heading"><span>Latest</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                <div className="VideosBox">
                                    <div id="owl-carousel-latest" className="career owl-carousel owl-theme">
                                        <div className="item">
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="VideoList">
                                <h3 className="heading"><span>Tranding</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                <div className="VideosBox">
                                    <div id="owl-carousel-guruthree" className="career owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="videoContent">
                                                <div className="guruVideo">
                                                    <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                                <div className="videoText">
                                                    <h5><a href="javascript:;">Law College in India</a></h5>
                                                    {/* <!--<div className="dowloads ebook-download-button">-->
                                                <!--    <a href="javascript:;" className="button btn-primary popup"><i className="fa fa-download" aria-hidden="true"></i> Free Download</a>-->
                                                <!--</div>--> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                        </div>




                                    </div>
                                </div>
                            </div>
                            <div className="VideoList">
                                <h3 className="heading"><span>Careers</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                <div className="VideosBox">
                                    <div id="owl-carousel-gurufour" className="career owl-carousel owl-theme">
                                        <div className="item">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="VideoList">
                                <h3 className="heading"><span>Well Being</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                <div className="VideosBox">
                                    <div id="owl-carousel-gurufive" className="career owl-carousel owl-theme">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Banner Don't Know section --> */}

            {/* <!-- end section --> */}

            <div className="clearfix"></div>
        </div>
    )
}

export default GuruExpertVideos
