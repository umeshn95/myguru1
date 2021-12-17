import React from 'react'
import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'
import Header from './Header'

const test = () => {
    return (
        <div>
        <Header />
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">


                <section className="guruVideosList  margin-top_7">
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

                <section className="testPage">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="left-content-Test">
                                    <h2>IDEAL CAREER TEST</h2>
                                    <strong>Identifying Your Ideal Career Starts Here</strong>
                                    <p>
                                        If you are feeling that your present career is not providing you a sense
                                        of fulfillment and leaving you frustrated then take an Ideal Career Test™ and find your true calling.
                                    </p>
                                    <p>
                                        Ideal Career Test™ is suitable for person of any age group who is interested to discovering the right career options.
                                        The test report will help you to identify and explore career in order to get started in career search or change of career,
                                        it helps to identify strengths and potential weaknesses for the career search. To plan career goals and action steps.
                                    </p>
                                    <a className="button btn-primary" href="javascript:;"><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Start Ideal Career Tests</a>
                                    <a href="javascript:;" className="padLeft15"><i className="fa fa-file-pdf-o" aria-hidden="true"></i> Sample Report for Ideal Career Test</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="rightImage">
                                    <img src="assets/images/test-image/1.png" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end section --> */}


                <section className="AdvantageSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="bottomBg"><span>Advantage</span> of Test</h2>
                            </div>
                            <div className="col-md-4">
                                <div className="advantageBox">
                                    <div className="IconL">
                                        {/* <!--<i className="fa fa-file-pdf-o" aria-hidden="true"></i>--> */}
                                        <div className="Advanimage">
                                            <img src="assets/images/test-image/ad1.png" width="" />
                                        </div>
                                    </div>
                                    <div className="AdvanText">
                                        <h3>Advantage Name</h3>
                                        <p>
                                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                        </p>
                                        <ul className="list">
                                            <li>Lorem Ipsum es simplemente</li>
                                            <li>Lorem Ipsum es simplemente el texto</li>
                                            <li>Lorem Ipsum es simplemente las</li>
                                            <li>Lorem Ipsum es simplementeel texto las</li>
                                            <li>Lorem Ipsum es simplemente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="advantageBox">
                                    <div className="IconL">
                                        {/* <!--<i className="fa fa-file-pdf-o" aria-hidden="true"></i>--> */}
                                        <div className="Advanimage">
                                            <img src="assets/images/test-image/ad1.png" width="" />
                                        </div>
                                    </div>
                                    <div className="AdvanText">
                                        <h3>Advantage Name</h3>
                                        <p>
                                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                        </p>
                                        <ul className="list">
                                            <li>Lorem Ipsum es simplemente</li>
                                            <li>Lorem Ipsum es simplemente el texto</li>
                                            <li>Lorem Ipsum es simplemente las</li>
                                            <li>Lorem Ipsum es simplementeel texto las</li>
                                            <li>Lorem Ipsum es simplemente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="advantageBox">
                                    <div className="IconL">
                                        {/* <!--<i className="fa fa-file-pdf-o" aria-hidden="true"></i>--> */}
                                        <div className="Advanimage">
                                            <img src="assets/images/test-image/ad1.png" width="" />
                                        </div>
                                    </div>
                                    <div className="AdvanText">
                                        <h3>Advantage Name</h3>
                                        <p>
                                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                        </p>
                                        <ul className="list">
                                            <li>Lorem Ipsum es simplemente</li>
                                            <li>Lorem Ipsum es simplemente el texto</li>
                                            <li>Lorem Ipsum es simplemente las</li>
                                            <li>Lorem Ipsum es simplementeel texto las</li>
                                            <li>Lorem Ipsum es simplemente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="samplePaper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="featuredArt" >
                                    <h2 className="bottomBg"><span>Sample</span> Papers <a href="javascript:;" target="_blank">VIEW ALL</a></h2>
                                    {/* <!--<h3 className="heading"><span>Sample Paper</span> <a href="javascript:;" target="_blank">VIEW ALL</a></h3>--> */}
                                    <div className="clearfix"></div>
                                    <div className="careersBox">
                                        <div id="owl-carousel-advantage" className="career owl-carousel owl-theme">
                                            <div className="item">
                                                <div className="careersContent">
                                                    <div className="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div className="sampletext">
                                                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p className="breif"><i className="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div className="dowloads ebook-download-button">
                                                            <a href="javascript:;" className="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="careersContent">
                                                    <div className="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div className="sampletext">
                                                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p className="breif"><i className="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div className="dowloads ebook-download-button">
                                                            <a href="javascript:;" className="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="careersContent">
                                                    <div className="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div className="sampletext">
                                                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p className="breif"><i className="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div className="dowloads ebook-download-button">
                                                            <a href="javascript:;" className="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="careersContent">
                                                    <div className="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div className="sampletext">
                                                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p className="breif"><i className="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div className="dowloads ebook-download-button">
                                                            <a href="javascript:;" className="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="careersContent">
                                                    <div className="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div className="sampletext">
                                                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p className="breif"><i className="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div className="dowloads ebook-download-button">
                                                            <a href="javascript:;" className="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="careersContent">
                                                    <div className="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div className="sampletext">
                                                        <h5><a href="javascript:;">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p className="breif"><i className="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div className="dowloads ebook-download-button">
                                                            <a href="javascript:;" className="button btn-primary popup">Free Download</a>
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
                </section>



                <div className="clearfix"></div>

            </body>
        </div>
    )
}

export default test
