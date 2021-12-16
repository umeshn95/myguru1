import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'

const ExamList = () => {
    return (
        <div>

            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

                {/* <!-- Start Banner --> */}
                {/* margin-top_7 */}
                <section class="section insideBanner ">
                    <div class="row justify-content-md-center">
                        <div class="col-md-8">
                            <div class="BannerContent">
                                <h1>CMAT Exam 2021 - Admit Card, Latest News, Exam Date (Announced), Syllabus, Pattern, Result, Cutoff</h1>
                                <small>Updated on 24th Mar, 2021</small>
                                <div class="DateBlock">
                                    <span class="left"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                    <span class="right"><span class="type_of_card">Exam Date</span> <i class="date">31 Mar, 2021</i> </span>
                                </div>
                                <div class="btnGroup">
                                    <a href="" class="button btn-primary">Download Brochure</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="clearfix"></div>
                {/* <!-- End Banner --> */}
                {/* <!--Exam Sub Nav Bar Start--> */}
                <section class="section ExamNav">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="ExamSubNav">
                                    <li>
                                        <a href="#admit">Admit Card</a>
                                    </li>
                                    <li>
                                        <a href="#date">Dates</a>
                                    </li>
                                    <li>
                                        <a href="#eligiblity">Eligibility</a>
                                    </li>
                                    <li>
                                        <a href="#application">Application</a>
                                    </li>
                                    <li>
                                        <a href="#syllabus">Syllabus</a>
                                    </li>
                                    <li>
                                        <a href="#preparation">Preparation Tips</a>
                                    </li>
                                    <li>
                                        <a href="#pattern">Pattern</a>
                                    </li>
                                    <li>
                                        <a href="#answer">Answer key</a>
                                    </li>
                                    <li>
                                        <a href="#result">Result</a>
                                    </li>
                                    <li>
                                        <a href="#cutoff">Cutoff</a>
                                    </li>
                                    {/* <!--<li>--> */}
                                    {/* <!--    <a href="javascript:;">FAQs</a>--> */}
                                    {/* <!--</li>--> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section --> */}

                <section class="section ExamDetails">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="LatestUpdate">
                                    <div class="latest-Block">
                                        <strong>Latest Update for CMAT</strong>
                                        <ul>
                                            <li><b>2 days ago:</b> <p><a href="javascript:;">CMAT 2021 Admit Card</a> released on March 24 at 5 pm. CMAT exam date 2021 is March 31.</p> </li>

                                            <li><b>2 days ago:</b> <p>Click to avail <a href="javascript:;">CMAT admit card 2021 download link</a></p> </li>

                                            <li><b>2 days ago:</b>
                                                <p>Check the <a href="javascript:;">New CMAT exam pattern 2021</a>. Also read
                                                    <a href="javascript:;">CMAT 2021 Last Week Tips to Ace the Test</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="AdmitCard" id="">
                                    <h1>
                                        About CMAT 2021
                                    </h1>
                                    <div class="viewMoreContent">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                                            nisi lorem egestas vitae scel<span id="dots">...</span></p>

                                        <div class="hiddenContent" id="more">
                                            <p>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                                                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                                                sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
                                                Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
                                                Sed dapibus pulvinar nibh tempor porta.</p>
                                            <h2>What is the CMAT exam?</h2>
                                            <p>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                                                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                                                sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
                                                Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
                                                Sed dapibus pulvinar nibh tempor porta.</p>
                                            <h2>What is the CMAT exam?</h2>
                                            <p>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                                                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                                                sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
                                                Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
                                                Sed dapibus pulvinar nibh tempor porta.</p>

                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="myFunction()" id="myBtn" class="float-right">Read more</a>
                                </div>

                                <div class="AdmitCard" id="admit">
                                    <h1>
                                        CMAT 2021 Admit Card
                                    </h1>

                                    <div class="viewMoreContent">

                                        <p>The National Testing Agency (NTA) has released the CMAT admit card 2021 in online mode on March 24, 2021 (5:00 PM) at cmat.nta.nic.in. Applicants can download the admit card of CMAT 2021 by entering their CMAT login credentials like application number and date of birth. Candidates must keep the CMAT 2021 admit card safe till admissions are completed as a duplicate one will not be issued. CMAT self declaration form is necessary to carry alongwith CMAT 2021 admit card to the test centre.
                                            <span id="dots2">...</span></p>

                                        <div class="hiddenContent" id="more2">
                                            <p><b>Also read-</b> Know how to prepare for CMAT 2021?</p>
                                            <p>Notice Issued by NTA Regarding CMAT Exam and CMAT Admit Card 2021 Details</p>
                                            <strong>How to download CMAT admit card 2021?</strong>
                                            <p><b>Step 1:</b> Go to cmat.nta.nic.in </p>
                                            <p><b>Step 2: </b>Click on the CMAT 2021 admit card link </p>
                                            <p><b>Step 3: </b>Enter Application No and Password or Date of Birth.</p>
                                            <p><b>Step 4: </b>Click on the "Download Admit Card" button on the page.</p>
                                            <p><b>Step 5: </b>Check details and save the admit card in PDF format and take a printout of the same.</p>
                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContent()" id="myBtn2" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard">
                                    <h1>CMAT 2021 Exam Centers</h1>
                                    <div class="viewMoreContent">

                                        <p>

                                            <span id="dots5">...</span>
                                        </p>

                                        <div class="hiddenContent" id="more5">

                                            <div class="clearfix"></div>

                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>State</th>
                                                        <th>City</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowspan="10">Gujarat</td>
                                                        <td>Ahmedabad</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bhavnagar</td>
                                                        {/* <!--<td>3 hours and 30 minutes Students writing </td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Bhuj</td>
                                                        {/* <!--<td>30 minutes</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Rajkot</td>
                                                        {/* <!--<td>100. Students attempting the additional section will have to answer 125 questions</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Surat</td>
                                                        {/* <!--<td>25</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Vadodara</td>
                                                        {/* <!--<td>400. The total marks is 500 for students who attempt the Innovation and Entrepreneurship section in CMAT 2021</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Mehsana</td>
                                                        {/* <!--<td>Two</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Himmatnagar</td>
                                                        {/* <!--<td>1st shift - 9:00 AM to 12:00 PM<br> 2nd shift - 3:00  to 6:00 PM</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Jamnagar</td>
                                                        {/* <!--<td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Valsad</td>
                                                        {/* <!--<td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>--> */}
                                                    </tr>

                                                    <tr>
                                                        <td rowspan="13">Maharashtra</td>
                                                        <td>Ahmednagar</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Amravati</td>
                                                        {/* <!--<td>3 hours and 30 minutes Students writing </td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Aurangabad</td>
                                                        {/* <!--<td>30 minutes</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Thane</td>
                                                        {/* <!--<td>100. Students attempting the additional section will have to answer 125 questions</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Dhule</td>
                                                        {/* <!--<td>25</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Solapur</td>
                                                        {/* <!--<td>400. The total marks is 500 for students who attempt the Innovation and Entrepreneurship section in CMAT 2021</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Kolhapur</td>
                                                        {/* <!--<td>Two</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Mumbai</td>
                                                        {/* <!--<td>1st shift - 9:00 AM to 12:00 PM<br> 2nd shift - 3:00  to 6:00 PM</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Nagpur</td>
                                                        {/* <!--<td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Nashik</td>
                                                        {/* <!--<td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Navi Mumbai</td>
                                                        {/* <!--<td>1st shift - 9:00 AM to 12:00 PM<br> 2nd shift - 3:00  to 6:00 PM</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Nanded</td>
                                                        {/* <!--<td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>--> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Pune</td>
                                                        {/* <!--<td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>--> */}
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentfour()" id="myBtn5" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard">
                                    <h1>Documents Required at Exam</h1>
                                    <ul class="syllabusList">
                                        <li>CMAT 2021 admit card</li>
                                        <li>Photo identity proof</li>
                                    </ul>
                                </div>
                                <div class="AdmitCard" id="date">
                                    <h1>
                                        CMAT 2021 Important Dates
                                    </h1>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th colspan="2">Past Dates and Events</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>24 Mar, 2021 - 31 Mar, 2021</td>
                                                <td>Admit Card | Mode: Online</td>

                                            </tr>
                                            <tr>
                                                <td>31 Mar, 2021</td>
                                                <td>Exam - Shift 1 | Mode: Online</td>

                                            </tr>
                                            <tr>
                                                <td>31 Mar, 2021</td>
                                                <td>Exam - Shift 2 | Mode: Online</td>

                                            </tr>
                                            <tr>
                                                <td>04 Mar, 2021 - 07 Mar, 2021</td>
                                                <td>Application form correction | Mode: Online</td>
                                            </tr>
                                            <tr>
                                                <td>04 Feb, 2021 - 02 Mar, 2021</td>
                                                <td>Re-opening of application fee payment window | Mode: Online</td>
                                            </tr>
                                            <tr>
                                                <td>10 Feb, 2021 - 01 Mar, 2021</td>
                                                <td>Application - Re-opening of registration | Mode: Online</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                                <div class="AdmitCard" id="eligiblity">
                                    <h1>
                                        CMAT 2021 Eligibility Criteria
                                    </h1>

                                    <div class="viewMoreContent">
                                        <p>National Testing Agency has released the CMAT eligibility criteria in the official notification. The CMAT 2021 eligibility criteria are also mentioned on the CMAT official website. Applicants who fulfill the academic qualifications, age limit as specified in CMAT eligibility criteria can apply for the entrance exam. </p>
                                        <strong>CMAT 2021 eligibility criteria:</strong>
                                        <p class="exmDetail"><b>1. Nationality: </b>To apply for CMAT 2021, candidates must be citizens of India.</p>
                                        <p class="exmDetail"><b>2. Academic qualifications: </b>Graduates in any discipline from recognized institutes can apply for the CMAT exam. Final-year students can also apply for the computer-based online CMAT 2021.</p>
                                        <p class="exmDetail"><b>3. Age limit: </b>There is no age limit for appearing in CMAT.<span id="dots9">...</span></p>
                                        <div class="hiddenContent" id="more9">
                                            <strong>Also Read:</strong>
                                            <ul>
                                                <li><a href="javascript:;">How to Prepare for CMAT 2021?</a></li>
                                                <li><a href="javascript:;">CMAT Question Papers</a></li>
                                                <li><a href="javascript:;">CMAT 2021 Exam Day Guideline and Strategies to Crack the Test</a></li>
                                            </ul>
                                            <strong>CMAT 2021 Eligibility Criteria - Course Wise:</strong>
                                            <ul>
                                                <li><b>For PGCM -</b> A bachelor’s in any discipline.</li>
                                                <li><b>For Executive PGDM -</b> Candidate must have completed their graduate degree in any discipline with a minimum of five years of work experience.</li>
                                                <li><b>For MBA & PGDM - </b> He/ She should have finished their graduate degree in any discipline.</li>
                                            </ul>

                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContenteight()" id="myBtn9" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard" id="application">
                                    <h1>
                                        CMAT 2021 Application Process
                                    </h1>
                                    <p class="exmDetail">Mode of Application : <span>Online</span></p>
                                    <p class="exmDetail">Mode of Payment : <span>Net Banking | Credit Card | Debit Card | Other</span></p>
                                    <div class="viewMoreContent">

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                                            nisi lorem egestas vitae scel<span id="dots10">...</span></p>

                                        <div class="hiddenContent" id="more10">
                                            <p>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                                                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                                                sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
                                                Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
                                                Sed dapibus pulvinar nibh tempor porta.</p>
                                            <h2>What is the CMAT exam?</h2>
                                            <p>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                                                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                                                sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
                                                Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
                                                Sed dapibus pulvinar nibh tempor porta.</p>
                                            <h2>What is the CMAT exam?</h2>
                                            <p>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                                                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                                                sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
                                                Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
                                                Sed dapibus pulvinar nibh tempor porta.</p>

                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreNine()" id="myBtn10" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard" id="syllabus">
                                    <h1>CMAT 2021 Syllabus</h1>
                                    <ul class="syllabusList">
                                        <li>Quantitative techniques and data interpretation</li>
                                        <li>Logical reasoning</li>
                                        <li>Language comprehension</li>
                                        <li>General awareness</li>
                                        <li>Entrepreneurship</li>
                                    </ul>
                                </div>
                                <div class="AdmitCard">
                                    <h1>CMAT E-books and Sample Papers</h1>
                                    <div class="careersBox">
                                        <div id="owl-carousel-three" class="career owl-carousel owl-theme">
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="" class="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="" class="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="" class="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="" class="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="" class="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="careersContent">
                                                    <div class="thumb">
                                                        <img src="assets/images/innerpage-img/sample-img/samp1.png" alt="" />
                                                    </div>
                                                    <div class="sampletext">
                                                        <h5><a href="">JEE Main 2021 March 17 question paper...</a></h5>
                                                        <p class="breif"><i class="fa fa-download" aria-hidden="true"></i> 73+ Downloads</p>
                                                        <div class="dowloads ebook-download-button">
                                                            <a href="" class="button btn-primary popup">Free Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="AdmitCard">
                                    <h1>Student Appearing Vs Seat Available</h1>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Year</th>
                                                <th>Student Appeared</th>
                                                <th>Seats Available</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2021</td>
                                                <td>63297</td>
                                                <td>None</td>
                                            </tr>
                                            <tr>
                                                <td>2020</td>
                                                <td>70989</td>
                                                <td>None</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div class="AdmitCard" id="preparation">
                                    <h1>CMAT 2021 Preparation Tips</h1>
                                    <div class="viewMoreContent">

                                        <p>Since the examination is approaching, the candidates must check the CMAT 2021 preparation tips, important books, and topics that can improve study preparation of CMAT 2021. Before starting the exam preparation, it is important to go through the syllabus and exam pattern thoroughly. A proper CMAT 2021 planning and regular preparation needed to crack the Common Management Admission Test. Candidates who are appearing for the exam can also check the best books to prepare for CMAT 2021.<span id="dots3">...</span></p>

                                        <div class="hiddenContent" id="more3">
                                            <strong>Also Read:</strong>
                                            <ul>
                                                <li>How to Prepare for CMAT 2021?</li>
                                                <li>What are the Best Books for Preparation of CMAT 2021</li>
                                                <li>How to prepare for the GK section of CMAT, IIFT, and XAT 2021</li>
                                                <li>CMAT 2021: Last Week Tips to Ace the Test</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <b>Best books for Comprehension, Vocabulary, and Grammar (CMAT 2021)</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Name of the book</th>
                                                        <th>Name of the author</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Word Power Made Easy</td>
                                                        <td>Norman Lewis</td>
                                                    </tr>
                                                    <tr>
                                                        <td>English Grammar</td>
                                                        <td>Wren &amp; Martin</td>
                                                    </tr>
                                                    <tr>
                                                        <td>30 Days to a More Powerful Vocabulary</td>
                                                        <td>Norman Lewis</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Business English and Communication</td>
                                                        <td>John O E Clark</td>
                                                    </tr>
                                                    <tr>
                                                        <td>A Communicative Grammar of English</td>
                                                        <td>Geoffrey Leech and Jan Svartvik</td>
                                                    </tr>
                                                    <tr>
                                                        <td>The Students Companion</td>
                                                        <td>Wilfred D Best</td>
                                                    </tr>
                                                    <tr>
                                                        <td>The Pearson Guide to Verbal Ability and Logical Reasoning for the CAT</td>
                                                        <td>Nishit K Sinha</td>
                                                    </tr>
                                                    <tr>
                                                        <td>How to Prepare for Verbal Ability and Reading Comprehension for the CAT</td>
                                                        <td>Arun Sharma (McGraw Hill Education</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Trishna’s Verbal Ability and Logical Reasoning for the CAT and other MBA Examinations</td>
                                                        <td>TIME</td>
                                                    </tr>
                                                    <tr>
                                                        <td>A Modern Approach to Verbal &amp; Non-Verbal Reasoning</td>
                                                        <td>Dr. R S Aggarwal</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="clearfix"></div>
                                            <b>Books on Data Interpretation and Logical Reasoning (CMAT 2021)</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Book Name</th>
                                                        <th>Author/ Publisher Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Logical Reasoning and Data Interpretation for the CAT</td>
                                                        <td>Nishit K Sinha (Pearson)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>How to Prepare for Logical Reasoning for the CAT</td>
                                                        <td>Arun Sharma (McGraw Hill Education)</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentTwo()" id="myBtn3" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard" id="pattern">
                                    <h1>CMAT 2021 Exam Pattern</h1>
                                    <div class="viewMoreContent">

                                        <p>National Testing Agency (NTA) has introduced a new section in CMAT 2021. Students interested in Innovation and Entrepreneurship programmes can now opt for this new section in addition to the regular sections in CMAT exam. Know details of the CMAT exam pattern below.
                                            <span id="dots4">...</span></p>

                                        <div class="hiddenContent" id="more4">

                                            <div class="clearfix"></div>
                                            <b>CMAT Exam Pattern 2021</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Particulars</th>
                                                        <th>Events</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Mode of exam</td>
                                                        <td>Computer Based Test (CBT)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Duration</td>
                                                        <td>3 hours and 30 minutes Students writing </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Additional time for Innovation and Entrepreneurship</td>
                                                        <td>30 minutes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Number of Questions</td>
                                                        <td>100. Students attempting the additional section will have to answer 125 questions</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Section-wise Questions</td>
                                                        <td>25</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Marks</td>
                                                        <td>400. The total marks is 500 for students who attempt the Innovation and Entrepreneurship section in CMAT 2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Slots/Shifts</td>
                                                        <td>Two</td>
                                                    </tr>
                                                    <tr>
                                                        <td>CMAT Exam Time</td>
                                                        <td>1st shift - 9:00 AM to 12:00 PM<br /> 2nd shift - 3:00  to 6:00 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Marking Scheme</td>
                                                        <td>4 Marks for Each Right Answer -1 Mark for Incorrect Answer</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <div class="clearfix"></div>
                                            <b>Section Wise CMAT 2021 Exam Pattern</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Sections</th>
                                                        <th>Number  of Questions</th>
                                                        <th>Total marks</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Quantitative Techniques & Data Interpretation  </td>
                                                        <td>25</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>General Awareness  </td>
                                                        <td>25</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logical Reasoning </td>
                                                        <td>25</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Language Comprehension</td>
                                                        <td>25</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Total</b></td>
                                                        <td><b>100</b></td>
                                                        <td><b>400</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Innovation & Entrepreneurship (additional section)</td>
                                                        <td>25</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Total</b> (CMAT + additional Innovation and Entrepreneurship)  </td>
                                                        <td>125</td>
                                                        <td>500</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="clearfix"></div>
                                            <b>CMAT Previous Year Question Papers</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Year</th>
                                                        <th>Question Paper</th>
                                                        <th>Answer Key</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>2020 </td>
                                                        <td><a href="javascript:;">CMAT 2020 Question Paper</a></td>
                                                        <td><a href="javascript:;">CMAT 2020 Answer Key pdf</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2019 </td>
                                                        <td><a href="javascript:;">CMAT 2020 Question Paper</a></td>
                                                        <td><a href="javascript:;">CMAT 2020 Answer Key pdf</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018 </td>
                                                        <td><a href="javascript:;">CMAT 2020 Question Paper</a></td>
                                                        <td><a href="javascript:;">CMAT 2020 Answer Key pdf</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentThree()" id="myBtn4" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard" id="answer">
                                    <h1>CMAT 2021 Answer Key</h1>
                                    <div class="viewMoreContent">

                                        <p>
                                            National Testing Agency has conduct the CMAT on March 31 in CBT mode. Once the CMAT exam concluded, the authority will release the provisional answer key of the Common Management Aptitude Test i.e. CMAT 2021 answer key tentatively in the first week of April 2021. The answer key of CMAT 2021 will be released in the form of a response sheet in online mode.
                                        </p>
                                        <p>
                                            Candidates will be able to challenge the CMAT 2021 answer key within the prescribed date by paying the required fee (Non-Refundable). After the answer key challenge window closed, authorities will release the final answer key of CMAT 2021 in the second week of April 2021 along with the CMAT 2021 result. Candidates will be able to download the answer key of CMAT 2021 by entering their login credentials which will be created at the time of registration.
                                            <span id="dots11">...</span></p>

                                        <div class="hiddenContent" id="more11">

                                            <b>CMAT Answer Key</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Year</th>
                                                        <th>Answer Key</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>2021</td>
                                                        <td>to be released</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2020</td>
                                                        <td><a href="javascript:;">CMAT 2020 Answer Key pdf</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2019</td>
                                                        <td><a href="javascript:;">CMAT 2020 Answer Key pdf</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018</td>
                                                        <td><a href="javascript:;">CMAT 2020 Answer Key pdf</a></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentten()" id="myBtn11" class="float-right">Read more</a>
                                </div>

                                <div class="AdmitCard" id="result">
                                    <h1>CMAT 2021 Result</h1>
                                    <div class="viewMoreContent">

                                        <p>
                                            The National Testing Agency (NTA) will release the result of CMAT at cmat.nta.nic.in. To check result of CMAT 2021 and download the scorecard, candidates must enter their ID and Password. Admissions to institutes accepting CMAT scores are on the basis of the scores obtained in CMAT 2021.
                                            <span id="dots6">...</span></p>

                                        <div class="hiddenContent" id="more6">
                                            <strong>How to Check CMAT Result 2021</strong>
                                            <span>The result of CMAT will be checked by following the steps as under,</span>
                                            <ul>
                                                <li>Visit the CMAT website - (Link will be provided when activated)</li>
                                                <li>Click on the ‘View Result/Score Card’ button on the web page.</li>
                                                <li>On the login page, enter the details includes the Application number, Date of birth, and Security Pin.</li>
                                                <li>Click on the ‘submit’ tab.</li>
                                                <li>The screen will display the CMAT 2021 scorecard.</li>
                                                <li>Save it as a PDF file for future use.</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <strong>Details mentioned in CMAT 2021 Scorecard</strong>
                                            <ul>
                                                <li>Candidate's Roll number</li>
                                                <li>Personal Details of candidate</li>
                                                <li>Section-wise and overall scores obtained in CMAT exam</li>
                                                <li>CMAT percentile score </li>
                                                <li>All India Rank</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <strong>Also Read:</strong>
                                            <ul>
                                                <li>CMAT Score Vs Percentile</li>
                                                <li>Top B-schools Accepting CMAT Scores</li>
                                                <li>Know Previous Year's CMAT Topper List</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <b>CMAT Toppers List - Previous Year's</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Rank</th>
                                                        <th>Name</th>
                                                        <th>Total Marks</th>
                                                        <th>Overall Percentile</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>1</td>
                                                        <td>Gopaljee Jha</td>
                                                        <td>347</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Gopaljee Jha</td>
                                                        <td>347</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Gopaljee Jha</td>
                                                        <td>347</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Gopaljee Jha</td>
                                                        <td>347</td>
                                                        <td>100</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentFive()" id="myBtn6" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard" id="cutoff">
                                    <h1>CMAT 2021 Cutoff</h1>
                                    <div class="viewMoreContent">

                                        <p>
                                            National Testing Agency will not release CMAT cutoff to shortlist candidates for the selection procedure; however, the affiliated institutes will declare their respective CMAT cutoff 2021 after the result gets officially announced. The cutoff of CMAT 2021 is the minimum score or percentile candidates need to obtain for attaining admission into MBA and PGDM courses offered by management institutes across India.
                                            <span id="dots7">...</span></p>

                                        <div class="hiddenContent" id="more7">
                                            <strong>The factors that will determine the CMAT 2021 cutoff are-</strong>
                                            <ul>
                                                <li>Total number of candidates appeared in the exam</li>
                                                <li>Number of seats available</li>
                                                <li>Number of qualified candidates</li>
                                                <li>Level of difficulty pertaining to exam</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <b>CMAT Accepting Colleges with their cut off</b>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Institute Name</th>
                                                        <th>Cut off Percentile</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td><a href="javascript:;">JBIMS Mumbai</a></td>
                                                        <td>99.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">JBIMS Mumbai</a></td>
                                                        <td>99.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">JBIMS Mumbai</a></td>
                                                        <td>99.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">JBIMS Mumbai</a></td>
                                                        <td>99.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">JBIMS Mumbai</a></td>
                                                        <td>99.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">JBIMS Mumbai</a></td>
                                                        <td>99.99</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentSix()" id="myBtn7" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard">
                                    <h1>CMAT 2021 Selection Process</h1>
                                    <div class="viewMoreContent">

                                        <p>
                                            All India Council for Technical Education (AICTE) approved institutes will conduct the
                                            CMAT 2021 selection process after the declaration of the result/merit list. As per the officials,
                                            the CMAT participating institutes will conduct their respective selection procedures for the candidates
                                            who obtain the cutoff scores. The CMAT 2021 selection procedure varies within institutes.
                                            The selection procedure of CMAT 2021 mostly comprised of GD (Group Discussion),
                                            PI (Personal Interview) or WAT (Written Ability Test).<span id="dots8">...</span></p>

                                        <div class="hiddenContent" id="more8">
                                            <strong>CMAT 2021 Selection Process</strong>
                                            <p>The CMAT Selection Process 2021 has four main stages,</p>

                                            <p><b>Taking CMAT Exam 2021:</b> The first part of the CMAT 2021 exam is based on the candidate's
                                                performance in the CMAT 2021 exam, which can be measured by the overall score, percentage score, and section score in the CMAT 2021 exam.</p>

                                            <p><b>Declaration of Result:</b> The CMAT Result 2021 will be available in online mode.
                                                The CMAT scorecard includes the overall raw score, sectional score, overall percentile,
                                                and sectional percentile. CMAT 2021 selection process depends on your place in the National Merit List.
                                                The candidate must also submit their CMAT 2021 exam score to the respective B-School where they have already applied or plan to apply now.</p>

                                            <p><b>Shortlisting by B-Schools:</b> The next stage of the CMAT selection process is a shortlist
                                                for the final admission round based on the CMAT exam score of the B-School where you applied for MBA
                                                Admission 2021. Each participating institute will publish their respective CMAT cutoff 2021, candidates
                                                must meet to qualify to join the particular institute. Upon qualification, the candidates must appear for
                                                the selection procedure of CMAT 2021 of the particular institution including Group Discussion (GD) and Personal Interview (PI).</p>

                                            <p><b>Participate in GD and PI:</b> Many MBA colleges conduct their own GD and PI process for selecting
                                                candidates through the CMAT selection procedure for MBA admission. CMAT 2021 selection procedure for final
                                                counselling based on entrance exam score, academic performance, work experience, and GD & PI round performance.
                                                Final admission offers will be successfully made by B-Schools in May/ June 2021.</p>

                                            <strong>CMAT 2021 Participating Institutes</strong>
                                            <p>The CMAT 2021 score will be used by more than 1000 MBA colleges that accept the CMAT score for MBA Admission 2021. The admission process 2021 will be made on the basis of CMAT score/ percentile for the MBA 2021-23 batch at many top MBA and PGDM colleges. Here, we provide a list of CMAT accepting colleges in India.</p>
                                            <ul>
                                                <li>Xavier Institute of Management and Entrepreneurship, Bangalore</li>

                                                <li>Jamnalal Bajaj Institute of Management Studies (JBIMS), Mumbai</li>

                                                <li>Asia Pacific Institute of Management, New Delhi</li>

                                                <li>Goa Institute of Management, Goa</li>

                                                <li>Great Lakes Institute of Management, Chennai</li>

                                                <li>Balaji Institute of Modern Management, Pune</li>

                                                <li>MYRA School of Business, Mysore</li>

                                                <li>Birla Institute of Technology, Mesra</li>

                                                <li>TERI University, Delhi</li>

                                                <li>WeSchool Mumbai & Bangalore</li>

                                                <li>Indian Institute of Social Welfare and Business (IISWBM), Kolkata</li>

                                                <li>Jaipuria Institute of Management, Noida</li>

                                                <li>Future Business School, Kolkata</li>

                                                <li>Jaipuria Institute of Management, Lucknow</li>

                                                <li>Acharya Bangalore Business School, Bangalore</li>

                                                <li>ITM Business School, Bangalore</li>

                                                <li>KJ Somaiya Institute of Management Studies and Research, Mumbai</li>

                                                <li>Shri Dharmasthala Manjunatheshwara Institute for Management Development, Mysore</li>

                                                <li>Dr. DY Patil Institute of Management, Pune</li>

                                                <li>Indira School of Business Studies, Pune</li>

                                                <li>Pune University MBA (PUMBA) Department of Management Sciences</li>

                                                <li>Doon Business School, Dehradun</li>

                                                <li>Indian Institute of Plantation Management, Bangalore</li>

                                                <li>Sydenham Institute of Management Studies Research and Entrepreneurship Education (SIMSREE), Mumbai</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <strong>MBA colleges accepting CMAT score</strong>
                                            <table class="table">

                                                <tbody>

                                                    <tr>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in India </a></td>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in Delhi</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in India </a></td>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in Delhi</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in India </a></td>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in Delhi</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in India </a></td>
                                                        <td><a href="javascript:;">MBA colleges accepting CMAT score in Delhi</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="javascript:;" onclick="readMoreContentSeven()" id="myBtn8" class="float-right">Read more</a>
                                </div>
                                <div class="AdmitCard">
                                    <h1>Documents Required at Counselling</h1>
                                    <ul class="syllabusList">
                                        <li>Class 10 or Secondary exam mark sheets and certificates</li>
                                        <li>Class 12 or Higher Secondary exam mark sheets and certificates</li>
                                        <li>CMAT 2021 admit card</li>
                                        <li>Any professional degree certificate, if any</li>
                                        <li>Work experience certificate, if any</li>
                                        <li>Photo ID Proof</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 zero-left">
                                <div class="ExamRight">
                                    <h1>MBA/PGDM Admissions2021 OPEN</h1>
                                    <div class="content">
                                        <div class="contImage"><img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" /></div>
                                        <div class="contText">
                                            <strong class="textWid">UPES Dehradun | MBA Admission...</strong>
                                            <a href="javascript:;" class="button2">Apply</a>
                                            <p>92% Placements | 1st Indian University to be awarded QS 5 Stars Rating for Employability</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="contImage"><img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" /></div>
                                        <div class="contText">
                                            <strong class="textWid">UPES Dehradun | MBA Admission...</strong>
                                            <a href="javascript:;" class="button2">Apply</a>
                                            <p>92% Placements | 1st Indian University to be awarded QS 5 Stars Rating for Employability</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="contImage"><img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" /></div>
                                        <div class="contText">
                                            <strong class="textWid">UPES Dehradun | MBA Admission...</strong>
                                            <a href="javascript:;" class="button2">Apply</a>
                                            <p>92% Placements | 1st Indian University to be awarded QS 5 Stars Rating for Employability</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="contImage"><img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" /></div>
                                        <div class="contText">
                                            <strong class="textWid">UPES Dehradun | MBA Admission...</strong>
                                            <a href="javascript:;" class="button2">Apply</a>
                                            <p>92% Placements | 1st Indian University to be awarded QS 5 Stars Rating for Employability</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="contImage"><img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" /></div>
                                        <div class="contText">
                                            <strong class="textWid">UPES Dehradun | MBA Admission...</strong>
                                            <a href="javascript:;" class="button2">Apply</a>
                                            <p>92% Placements | 1st Indian University to be awarded QS 5 Stars Rating for Employability</p>
                                        </div>
                                    </div>
                                    <a href="javascript:;" class="viewAll">View All Application Forms</a>
                                </div>
                                <div class="ExamRight">
                                    <h1>CMAT Updates and Notifications</h1>
                                    <ul class="rightNoti">
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">CMAT 2021 Exam Over: Answer key and CMAT Result soon at cmat.nta.nic.in</a>
                                        </li>
                                    </ul>
                                    <a href="javascript:;" class="viewAll">View All Notifications Forms</a>
                                </div>
                                <div class="ExamRight">
                                    <h1>Trending Articles around CMAT</h1>
                                    <ul class="righArti">
                                        <li>
                                            <a href="javascript:;">
                                                <div class="leftImg">
                                                    <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                </div>
                                                <div class="rightCont">
                                                    <b>MAT Result 2021 (Anytime Soon) - Get Scorecard for February 2021 (IBT/PBT/CBT)</b>
                                                    <small>1 day ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div class="leftImg">
                                                    <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                </div>
                                                <div class="rightCont">
                                                    <b>MAT Result 2021 (Anytime Soon) - Get Scorecard for February 2021 (IBT/PBT/CBT)</b>
                                                    <small>1 day ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div class="leftImg">
                                                    <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                </div>
                                                <div class="rightCont">
                                                    <b>MAT Result 2021 (Anytime Soon) - Get Scorecard for February 2021 (IBT/PBT/CBT)</b>
                                                    <small>1 day ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div class="leftImg">
                                                    <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                </div>
                                                <div class="rightCont">
                                                    <b>MAT Result 2021 (Anytime Soon) - Get Scorecard for February 2021 (IBT/PBT/CBT)</b>
                                                    <small>1 day ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div class="leftImg">
                                                    <img src="assets/images/innerpage-img/institute-logo/ins1.png" alt="" />
                                                </div>
                                                <div class="rightCont">
                                                    <b>MAT Result 2021 (Anytime Soon) - Get Scorecard for February 2021 (IBT/PBT/CBT)</b>
                                                    <small>1 day ago</small>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="javascript:;" class="viewAll">View All Articles Forms</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

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

export default ExamList
