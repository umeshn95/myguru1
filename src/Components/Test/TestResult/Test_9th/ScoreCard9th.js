import React from 'react'
import { Dropdown } from 'react-bootstrap'

const ScoreCard6To9 = () => {
    return (
        <div>
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

                {/* <!-- Welcome My Guru section  --> */}
                <div class="section margin-top_7">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="full">
                                    <div class="mt-5">
                                        <i class="far fa-user-circle mt-2 float-left"></i>
                                        <div class="row float-left ml-2">
                                            <h5 class=" mt-4 fw-bold gray">Candidate Name:</h5>
                                            <h5 class=" fw-bold gray">Exam Name:</h5>
                                            <h5 class=" fw-bold gray">System No.:</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <h1 class="fw-bold text-center fs-2">Score Card</h1>
                                    {/* Table Starts */}
                                    <div className="col">
                                        {/* <table class="table ">
                                            <thead>
                                                <tr class="score_card">
                                                    <th scope="col"></th>
                                                    <th scope="col">Career Clusters</th>
                                                    <th scope="col">Score</th>
                                                    <th scope="col">Max. marks</th>
                                                    <th scope="col">Grade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Agriculture food and natural resources</td>
                                                    <td>8</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Architecture and Construction</td>
                                                    <td>7</td>
                                                    <td>17</td>
                                                    <td>Average</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Arts, A/v technology and communications</td>
                                                    <td>9</td>
                                                    <td>17</td>
                                                    <td>Average</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Business Management and administration</td>
                                                    <td>10</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Education and Training</td>
                                                    <td>6</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Finance</td>
                                                    <td>5</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td>Goverenment and Public Administration</td>
                                                    <td>4</td>
                                                    <td>17</td>
                                                    <td>Average</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Health Science</td>
                                                    <td>12</td>
                                                    <td>17</td>
                                                    <td>High</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td>Hospitality and Tourism</td>
                                                    <td>8</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">10</th>
                                                    <td>Human services</td>
                                                    <td>7</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">11</th>
                                                    <td>Information Technology</td>
                                                    <td>6</td>
                                                    <td>17</td>
                                                    <td>Average</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">12</th>
                                                    <td>law, Public Safety, Corrections and Security</td>
                                                    <td>11</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">13</th>
                                                    <td>Manufacturing</td>
                                                    <td>3</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">14</th>
                                                    <td>Marketing</td>
                                                    <td>5</td>
                                                    <td>17</td>
                                                    <td>Average</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">15</th>
                                                    <td>Science, Technology, Engineering and Mathematics</td>
                                                    <td>9</td>
                                                    <td>17</td>
                                                    <td>Average Below</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">16</th>
                                                    <td>Transportation, Distribution and logistics</td>
                                                    <td>4</td>
                                                    <td>17</td>
                                                    <td>Average</td>
                                                </tr>
                                            </tbody>
                                        </table> */}


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

export default ScoreCard6To9
