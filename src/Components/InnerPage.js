import { Dropdown } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Loader from './Loader/Loader';
import { useAlert } from 'react-alert'
import Header2 from '../Header2'
import Frames from './Frames'
import Lists from './Lists'
// import process.env.R from 'react-dotprocess.env.R'

const InnerPage = (props) => {
    
//============================================== Hooks & Variables =======================================================//
    const history = useHistory();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const alert = useAlert()
    let user = JSON.parse(localStorage.getItem('user-details'));

//============================================== useEffect =======================================================//
    useEffect(() => {
        getCarrer()
    }, [])


//============================================== Get Collage Data like Images ============================================//
    const getCarrer = () => {
        setLoading(true)
        // fetch(`https://myguruonline.herokuapp.com${process.env.R.API_URL}/api/courses/${props.match.params.id}/`, {
        fetch(`${process.env.R.API_URL}/api/courses/${props.match.params.id}/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((result) => {
            result.json().then((resp) => {
                // console.log(result)
                // console.log(resp)
                if (resp.status === 400) {
                    alert.error("This link is Not Working Now!!")
                    return history.push("/")
                }
                setData(resp.data)
                setLoading(false)

                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
            })
        })
    }

//=================================================== Loader ===================================================//
    if (loading) {
        return <Loader />
    }



//=================================================== Main Root ===================================================//
return (
    <div>
        <Header2 />
        <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

            {/* <!-- Start Banner --> */}

            <div class="section margin-top_7">
                <div class="row">

                    <div class="bannerImg">
                        {/* <img src={"https://myguruonline.herokuapp.com" + data.bannerImage} alt="" width="90" /> */}
                        <img src={data.bannerImage} alt="" width="90" />
                    </div>

                </div>
            </div>
            {/* <!-- End Banner --> */}
            {/* <!---course--> */}
            <section class="innerActing">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="content">
                                    <h5 class="cardHeading">
                                        <img src="assets/images/innerpage-img/act1.png" alt="" width="30" />
                                        <img src="assets/images/innerpage-img/act1.png" alt="" width="30" />
                                        <a href="javascript:;">Check Your Aptitude</a></h5>
                                    <p>An exhaustive E-learning program for the complete preparation of JEE Main</p>
                                    <Link to='/testpage' > <a class="rightArrowBtn"> Use Now   </a>  </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="content">
                                    <h5 class="cardHeading">
                                        <img src="assets/images/innerpage-img/act1.png" alt="" width="30" />
                                        <a href="javascript:;">Know About Acting</a></h5>
                                    <p>An exhaustive E-learning program for the complete preparation of JEE Main</p>
                                    <a href="javascript:;" class="rightArrowBtn">Use Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="content">
                                    <h5 class="cardHeading">
                                        <img src="assets/images/innerpage-img/act1.png" alt="" width="30" />
                                        <a href="javascript:;">University/ College/ Exams</a></h5>
                                    <p>An exhaustive E-learning program for the complete preparation of JEE Main</p>
                                    <a href="javascript:;" class="rightArrowBtn">Use Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--course end--> */}

            <section class="ActingList">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            {/* <!--<div class="InnerLeft " id="navbar">--> */}
                            <div class="InnerLeft ">
                                <div class="asideNav">
                                    <a href="#latestArticle"><i class="fa fa-list" aria-hidden="true"></i> Featured Articles</a>
                                    <a href="#videoGuru"><i class="fa fa-video-camera" aria-hidden="true"></i> Guru's Expert Videos</a>
                                    {/* <!--<a href="#latestnews"><i class="fa fa-list" aria-hidden="true"></i> Latest News</a>--> */}
                                    <a href="#listcareers"><i class="fa fa-suitcase" aria-hidden="true"></i> List of Careers</a>
                                    <a href="#listexam"><i class="fa fa-file-text-o" aria-hidden="true"></i> List of Exams</a>
                                    <a href="#collge"><i class="fa fa-university" aria-hidden="true"></i> List of Colleges</a>
                                    {/* <!--<a href="#samplepaper"><i class="fa fa-file-archive-o" aria-hidden="true"></i> Sample Paper</a>--> */}


                                    {/* <!--<a href="#admission"><i class="fa fa-user" aria-hidden="true"></i> Admissions Open</a>--> */}
                                    <a href="#counsellor"><i class="fa fa-handshake-o" aria-hidden="true"></i> Contact Counsellor</a>
                                    <a href="#howtoimprove"><i class="fa fa-cogs" aria-hidden="true"></i> How to Improve Life Skills</a>
                                    <a href="/test"><i class="fa fa-line-chart" aria-hidden="true"></i> Check Your Potential</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 zero-left">
                            <div class="InnerRight">
                                <div class="featuredArt" id="latestArticle">
                                    <h3 class="heading"><span>Featured Articles</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <div class="article withTime">
                                        <div class="row">
                                            <div class="col-md-8 zero-left">
                                                <div class="banner">
                                                    <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%" />
                                                    <div class="caption">
                                                        <a href="javascript:;">PSU Recruitment through GATE 2021</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 zero">
                                                <ul class="articleList">
                                                    <li>
                                                        <div class="ArticleImg">
                                                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%" />
                                                        </div>
                                                        <div class="ArticleText">
                                                            <p>PSU Recruitment through GATE 2021</p>
                                                            <span class="float-left">17 hours ago</span>
                                                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="ArticleImg">
                                                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%" />
                                                        </div>
                                                        <div class="ArticleText">
                                                            <p>PSU Recruitment through GATE 2021</p>
                                                            <span class="float-left">17 hours ago</span>
                                                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="ArticleImg">
                                                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%" />
                                                        </div>
                                                        <div class="ArticleText">
                                                            <p>PSU Recruitment through GATE 2021</p>
                                                            <span class="float-left">17 hours ago</span>
                                                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="ArticleImg">
                                                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%" />
                                                        </div>
                                                        <div class="ArticleText">
                                                            <p>PSU Recruitment through GATE 2021</p>
                                                            <span class="float-left">17 hours ago</span>
                                                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="featuredArt" id="videoGuru">
                                    <h3 class="heading"><span>Guru's Expert Videos</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <div class="careersBox">
                                        <div id="owl-carousel-five" className="career  owl-theme">
                                            <Frames />
                                            {/* <div class="item">
                                                <div class="careersContent">
                                                    <div class="guruVideo">
                                                        <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                    <div class="videoText">
                                                        <h5><a href="javascript:;">Law College in India</a></h5>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup"><i class="fa fa-download" aria-hidden="true"></i> Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="guruVideo">
                                                        <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                    <div class="videoText">
                                                        <h5><a href="javascript:;">Law College in India</a></h5>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup"><i class="fa fa-download" aria-hidden="true"></i> Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="guruVideo">
                                                        <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                    <div class="videoText">
                                                        <h5><a href="javascript:;">Law College in India</a></h5>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup"><i class="fa fa-download" aria-hidden="true"></i> Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="guruVideo">
                                                        <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                    <div class="videoText">
                                                        <h5><a href="javascript:;">Law College in India</a></h5>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup"><i class="fa fa-download" aria-hidden="true"></i> Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="guruVideo">
                                                        <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                    <div class="videoText">
                                                        <h5><a href="javascript:;">Law College in India</a></h5>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup"><i class="fa fa-download" aria-hidden="true"></i> Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="guruVideo">
                                                        <iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                    <div class="videoText">
                                                        <h5><a href="javascript:;">Law College in India</a></h5>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup"><i class="fa fa-download" aria-hidden="true"></i> Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}



                                        </div>
                                    </div>
                                </div>
                                {/* <!--<div class="featuredArt" id="latestnews">-->
                    <!--    <h3 class="heading"><span>Latest News</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>-->
                    <!--    <div class="article withTime">-->
                    <!--        <div class="row">-->
                    <!--            <div class="col-md-8 zero-left">-->
                    <!--                <div class="banner">-->
                    <!--                    <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%">-->
                    <!--                    <div class="caption">-->
                    <!--                        <a href="javascript:;">PSU Recruitment through GATE 2021</a>-->
                    <!--                    </div>-->
                    <!--                </div>-->
                    <!--            </div>-->
                    <!--            <div class="col-md-4 zero">-->
                    <!--                <ul class="articleList">-->
                    <!--                    <li>-->
                    <!--                        <div class="ArticleImg">-->
                    <!--                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%">-->
                    <!--                        </div>-->
                    <!--                        <div class="ArticleText">-->
                    <!--                            <p>PSU Recruitment through GATE 2021</p>-->
                    <!--                            <span class="float-left">17 hours ago</span>-->
                    <!--                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>-->
                    <!--                        </div>-->
                    <!--                    </li>-->
                    <!--                    <li>-->
                    <!--                        <div class="ArticleImg">-->
                    <!--                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%">-->
                    <!--                        </div>-->
                    <!--                        <div class="ArticleText">-->
                    <!--                            <p>PSU Recruitment through GATE 2021</p>-->
                    <!--                            <span class="float-left">17 hours ago</span>-->
                    <!--                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>-->
                    <!--                        </div>-->
                    <!--                    </li>-->
                    <!--                    <li>-->
                    <!--                        <div class="ArticleImg">-->
                    <!--                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%">-->
                    <!--                        </div>-->
                    <!--                        <div class="ArticleText">-->
                    <!--                            <p>PSU Recruitment through GATE 2021</p>-->
                    <!--                            <span class="float-left">17 hours ago</span>-->
                    <!--                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>-->
                    <!--                        </div>-->
                    <!--                    </li>-->
                    <!--                    <li>-->
                    <!--                        <div class="ArticleImg">-->
                    <!--                            <img src="assets/images/innerpage-img/arti1.jpg" alt="" width="100%">-->
                    <!--                        </div>-->
                    <!--                        <div class="ArticleText">-->
                    <!--                            <p>PSU Recruitment through GATE 2021</p>-->
                    <!--                            <span class="float-left">17 hours ago</span>-->
                    <!--                            <span class="float-right">By: <a href="javascript:;">Ridhi.Khurana</a></span>-->
                    <!--                        </div>-->
                    <!--                    </li>-->
                    <!--                </ul>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--</div>--> */}
                                <div class="featuredArt mb-2" id="listcareers">
                                    <h3 class="heading"><span>List of Careers</span> <a href="career-list.html">VIEW ALL</a></h3>
                                    <div class="careersBox">
                                        <div id="owl-carousel-four" class="career  owl-theme">
                                            <Lists />
                                            {/* <div class="item">
                                                <div class="careersContent">
                                                    <h3>Aerospace Engineer</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Download</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Aerospace Engineer</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Download</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Aerospace Engineer</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Download</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Aerospace Engineer</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Download</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Aerospace Engineer</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Download</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Aerospace Engineer</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Download</a>
                                                </div>
                                            </div> */}



                                        </div>
                                    </div>
                                </div>
                                <div class="featuredArt" id="listexam">
                                    <h3 class="heading"><span>List of Exams</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <div class="ExamList">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="ExamContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                    </div>
                                                    <div class="detail">
                                                        <div class="contBlk">
                                                            <a class="title" href="/examlist">Vel Tech Undergraduate Engineering Entrance Examination (VTUEEE)</a>
                                                            <p>Application Process: <span>14 Dec, 2020 - 18 Apr, 2021</span></p>
                                                            <p>Exam Date: <span>20 Mar, 2021 - 24 Mar, 2021</span></p>
                                                        </div>
                                                        <div class="btnGroup">
                                                            <a href="javascript:;" class="button btn-lineGray popup">Get Updates</a>
                                                            {/* <!--<a href="javascript:;" class="button btn-primary">Download Brochure</a>--> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="ExamContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                    </div>
                                                    <div class="detail">
                                                        <div class="contBlk">
                                                            <a class="title" href="/examlist">Vel Tech Undergraduate Engineering Entrance Examination (VTUEEE)</a>
                                                            <p>Application Process: <span>14 Dec, 2020 - 18 Apr, 2021</span></p>
                                                            <p>Exam Date: <span>20 Mar, 2021 - 24 Mar, 2021</span></p>
                                                        </div>
                                                        <div class="btnGroup">
                                                            <a href="javascript:;" class="button btn-lineGray popup">Get Updates</a>
                                                            {/* <!--<a href="javascript:;" class="button btn-primary">Download Brochure</a>--> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="ExamContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                    </div>
                                                    <div class="detail">
                                                        <div class="contBlk">
                                                            <a class="title" href="/examlist">Vel Tech Undergraduate Engineering Entrance Examination (VTUEEE)</a>
                                                            <p>Application Process: <span>14 Dec, 2020 - 18 Apr, 2021</span></p>
                                                            <p>Exam Date: <span>20 Mar, 2021 - 24 Mar, 2021</span></p>
                                                        </div>
                                                        <div class="btnGroup">
                                                            <a href="javascript:;" class="button btn-lineGray popup">Get Updates</a>
                                                            {/* <!--<a href="javascript:;" class="button btn-primary">Download Brochure</a>--> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="ExamContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                    </div>
                                                    <div class="detail">
                                                        <div class="contBlk">
                                                            <a class="title" href="/examlist">Vel Tech Undergraduate Engineering Entrance Examination (VTUEEE)</a>
                                                            <p>Application Process: <span>14 Dec, 2020 - 18 Apr, 2021</span></p>
                                                            <p>Exam Date: <span>20 Mar, 2021 - 24 Mar, 2021</span></p>
                                                        </div>
                                                        <div class="btnGroup">
                                                            <a href="javascript:;" class="button btn-lineGray popup">Get Updates</a>
                                                            {/* <!--<a href="javascript:;" class="button btn-primary">Download Brochure</a>--> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="featuredArt" id="collge">
                                    <h3 class="heading"><span>List of College</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <ul class="collegeList">
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering Colleges in India</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering colleges accepting SRMJEE score</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering colleges JEE Advanced</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering Colleges in India</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering Colleges in India</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering colleges accepting SRMJEE score</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering Colleges in India</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering colleges </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering colleges SRMJEE</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" target="_blank">Top Engineering Colleges in India</a>
                                        </li>

                                    </ul>
                                </div>
                                <div class="featuredArt" id="counsellor">
                                    <h3 class="heading"><span>Guru's Expert Counsellors</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <div class="careersBox">
                                        <div id="owl-carousel-three" class="career owl-carousel owl-theme">
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/dummypic.jpg" alt="Dummy Image" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="javascript:;">Reena Varshney</a></h5>
                                                        <small class="edDetail">IIT Delhi, MS & PhD Stanford University (USA)</small>
                                                        <small class="edDetail"><b>Advisor</b></small>
                                                        <em>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</em>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup">Contact Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/dummypic.jpg" alt="Dummy Image" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="javascript:;">Reena Varshney</a></h5>
                                                        <small class="edDetail">IIT Delhi, MS & PhD Stanford University (USA)</small>
                                                        <small class="edDetail"><b>Advisor</b></small>
                                                        <em>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</em>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup">Contact Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/dummypic.jpg" alt="Dummy Image" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="javascript:;">Reena Varshney</a></h5>
                                                        <small class="edDetail">IIT Delhi, MS & PhD Stanford University (USA)</small>
                                                        <small class="edDetail"><b>Advisor</b></small>
                                                        <em>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</em>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup">Contact Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/dummypic.jpg" alt="Dummy Image" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="javascript:;">Reena Varshney</a></h5>
                                                        <small class="edDetail">IIT Delhi, MS & PhD Stanford University (USA)</small>
                                                        <small class="edDetail"><b>Advisor</b></small>
                                                        <em>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</em>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="javascript:;" class="button btn-primary popup">Contact Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="featuredArt" id="howtoimprove">
                                    <h3 class="heading"><span>How to Improve Life Skills</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <div class="careersBox">
                                        <div id="owl-carousel-six" class="career owl-carousel owl-theme">
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Join a mastermind group</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Incorporate play into your life</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Join a mastermind group</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Incorporate play into your life</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div class="featuredArt" id="Potentia">
                                    <h3 class="heading"><span>Check Your Potential</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>
                                    <div class="careersBox">
                                        <div id="owl-carousel-seven" class="career owl-carousel owl-theme">
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Define Your Goals</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Define Your Goals</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Define Your Goals</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <h3>Define Your Goals</h3>
                                                    <p>
                                                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                                                        Aeronautical and astronautical engineering are two major branches of ...
                                                    </p>
                                                    <a class="button btn-primary" href="javascript:;">Read More</a>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>



                                {/* <!--<div class="featuredArt" id="samplepaper">-->
                    <!--    <h3 class="heading"><span>Sample Paper</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>-->
                    <!--    <div class="careersBox">-->
                    <!--        <div id="owl-carousel-three" class="career owl-carousel owl-theme">-->
                    <!--            <div class="item">-->
                    <!--                <div class="careersContent">-->
                    <!--                    <div class="thumb">-->
                    <!--                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="">-->
                    <!--                    </div>-->
                    <!--                    <div class="sampletext">-->
                    <!--                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>-->
                    <!--                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>-->
                    <!--                        <div class="dowloads ebook-download-button">-->
                    <!--                            <a href="javascript:;" class="button btn-primary popup">Free Download</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>    -->
                    <!--            </div>-->
                    <!--            <div class="item">-->
                    <!--                <div class="careersContent">-->
                    <!--                    <div class="thumb">-->
                    <!--                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="">-->
                    <!--                    </div>-->
                    <!--                    <div class="sampletext">-->
                    <!--                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>-->
                    <!--                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>-->
                    <!--                        <div class="dowloads ebook-download-button">-->
                    <!--                            <a href="javascript:;" class="button btn-primary popup">Free Download</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>    -->
                    <!--            </div>-->
                    <!--            <div class="item">-->
                    <!--                <div class="careersContent">-->
                    <!--                    <div class="thumb">-->
                    <!--                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="">-->
                    <!--                    </div>-->
                    <!--                    <div class="sampletext">-->
                    <!--                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>-->
                    <!--                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>-->
                    <!--                        <div class="dowloads ebook-download-button">-->
                    <!--                            <a href="javascript:;" class="button btn-primary popup">Free Download</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>    -->
                    <!--            </div>-->
                    <!--            <div class="item">-->
                    <!--                <div class="careersContent">-->
                    <!--                    <div class="thumb">-->
                    <!--                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="">-->
                    <!--                    </div>-->
                    <!--                    <div class="sampletext">-->
                    <!--                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>-->
                    <!--                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>-->
                    <!--                        <div class="dowloads ebook-download-button">-->
                    <!--                            <a href="javascript:;" class="button btn-primary popup">Free Download</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>    -->
                    <!--            </div>-->
                    <!--            <div class="item">-->
                    <!--                <div class="careersContent">-->
                    <!--                    <div class="thumb">-->
                    <!--                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="">-->
                    <!--                    </div>-->
                    <!--                    <div class="sampletext">-->
                    <!--                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>-->
                    <!--                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>-->
                    <!--                        <div class="dowloads ebook-download-button">-->
                    <!--                            <a href="javascript:;" class="button btn-primary popup">Free Download</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>    -->
                    <!--            </div>-->
                    <!--            <div class="item">-->
                    <!--                <div class="careersContent">-->
                    <!--                    <div class="thumb">-->
                    <!--                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="">-->
                    <!--                    </div>-->
                    <!--                    <div class="sampletext">-->
                    <!--                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>-->
                    <!--                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>-->
                    <!--                        <div class="dowloads ebook-download-button">-->
                    <!--                            <a href="javascript:;" class="button btn-primary popup">Free Download</a>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>    -->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--</div>-->
                    <!--<div class="featuredArt" id="admission">-->
                    <!--    <h3 class="heading"><span>Applications for Admissions 2021 are open.</span> <a href="javascript:;" target="_blank">View All Forms</a></h3>-->
                    <!--    <div class="row">-->
                    <!--        <div class="col-md-6">-->
                    <!--            <div class="admissionList">-->
                    <!--            <div class="Adimg"><img src="assets/images/innerpage-img/institute-logo/ins1.png"/></div>-->
                    <!--            <div class="content"><h5> UPES Dehradun | B.Tech Admissions 2021 </h5></div>-->
                    <!--            <div class="admisBtnDv"><a class="button btn-primary" target="_blank" href="javascript:;" >Apply</a></div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--        <div class="col-md-6">-->
                    <!--            <div class="admissionList">-->
                    <!--            <div class="Adimg"><img src="assets/images/innerpage-img/institute-logo/ins1.png"/></div>-->
                    <!--            <div class="content"><h5> UPES Dehradun | B.Tech Admissions 2021 </h5></div>-->
                    <!--            <div class="admisBtnDv"><a class="button btn-primary" target="_blank" href="javascript:;" >Apply</a></div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--        <div class="col-md-6">-->
                    <!--            <div class="admissionList">-->
                    <!--            <div class="Adimg"><img src="assets/images/innerpage-img/institute-logo/ins1.png"/></div>-->
                    <!--            <div class="content"><h5> UPES Dehradun | B.Tech Admissions 2021 </h5></div>-->
                    <!--            <div class="admisBtnDv"><a class="button btn-primary" target="_blank" href="javascript:;" >Apply</a></div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--        <div class="col-md-6">-->
                    <!--            <div class="admissionList">-->
                    <!--            <div class="Adimg"><img src="assets/images/innerpage-img/institute-logo/ins1.png"/></div>-->
                    <!--            <div class="content"><h5> UPES Dehradun | B.Tech Admissions 2021 </h5></div>-->
                    <!--            <div class="admisBtnDv"><a class="button btn-primary" target="_blank" href="javascript:;" >Apply</a></div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--        <div class="col-md-6">-->
                    <!--            <div class="admissionList">-->
                    <!--            <div class="Adimg"><img src="assets/images/innerpage-img/institute-logo/ins1.png"/></div>-->
                    <!--            <div class="content"><h5> UPES Dehradun | B.Tech Admissions 2021 </h5></div>-->
                    <!--            <div class="admisBtnDv"><a class="button btn-primary" target="_blank" href="javascript:;" >Apply</a></div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--        <div class="col-md-6">-->
                    <!--            <div class="admissionList">-->
                    <!--            <div class="Adimg"><img src="assets/images/innerpage-img/institute-logo/ins1.png"/></div>-->
                    <!--            <div class="content"><h5> UPES Dehradun | B.Tech Admissions 2021 </h5></div>-->
                    <!--            <div class="admisBtnDv"><a class="button btn-primary" target="_blank" href="javascript:;" >Apply</a></div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--    </div>-->
                        
                    <!--</div>--> */}



                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <!-- Banner Don't Know section --> */}

            {/* <!-- end section --> */}

            <div class="clearfix"></div>


            {/* <!-- ALL JS FILES -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/owlcarousel1/jquery.min.js"></script>
<script src="assets/owlcarousel1/owl.carousel.min.js"></script>
<!-- ALL PLUGINS -->
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/jquery.pogo-slider.min.js"></script>
<script src="assets/js/slider-index.js"></script>
<script src="assets/js/smoothscroll.js"></script>
<script src="assets/js/form-validator.min.js"></script>
<script src="assets/js/contact-form-script.js"></script>
<script src="assets/js/isotope.min.js"></script>
<script src="assets/js/images-loded.min.js"></script>
<script src="assets/js/custom.js"></script>
<script src="assets/js/main.js"></script> */}





        </body>
    </div>
)
}

export default InnerPage
