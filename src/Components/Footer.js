import React from 'react'

const Footer = () => {
    return (
        <div>

            {/* <!-- Start Footer --> */}
            <footer className="footer-box mt-3">
                <div className="container">

                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_blog">
                                <div className="footerimg margin-bottom_30">
                                    <a href="/"> <img className="w-75" src="assets/images/footer_logo.png" alt="#" /></a>
                                </div>
                                <div className="full white_fonts">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_blog footer_menu white_fonts">
                                <h3>Quick links</h3>
                                <ul>
                                    <li><a href="/aboutus"> About Us</a></li>
                                    <li><a href="/examlist"> Exam List</a></li>
                                    <li><a href="#"> Lorem ipsum</a></li>
                                    <li><a href="#"> Lorem ipsum</a></li>
                                    <li><a href="#"> Lorem ipsum</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_blog full white_fonts">
                                <h3>Newsletter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <div className="newsletter_form">
                                    <form action="index.html">
                                        <input type="email" placeholder="Your Email" name="#" required />
                                        <button>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_blog full white_fonts">
                                <h3>Contact us</h3>
                                <ul className="full">
                                    <li><img src="assets/images/i5.png" /><span>Delhi 145, India</span></li>
                                    <li><img src="assets/images/i6.png" /><span><a href="mailto:info@myguru.co.in">info@myguru.co.in</a></span></li>
                                    <li><img src="assets/images/i7.png" /><span><a href="tel:+919876543210">+91 9876543210</a></span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </footer>
            {/* <!-- End Footer --> */}

            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="crp">© Copyrights 2021 by My Guru</p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up"></i></a>
        </div>
    )
}

export default Footer
