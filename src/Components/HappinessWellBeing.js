import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'

const HappinessWellBeing = () => {
    return (
        <div>
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

                {/* margin-top_7 */}

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
                <section className="ActingList ">
                    <div className="container">
                        <div className="row">

                            {/* <!--<div className="col-md-3">-->
            <!--    <div className="InnerLeft ">-->
            <!--        <div className="asideNav">-->
            <!--            <a href="#featured"><i className="fa fa-list" aria-hidden="true"></i> Featured Articles</a>-->
            <!--            <a href="#videoGuru"><i className="fa fa-video-camera" aria-hidden="true"></i> Guru's Expert Videos</a>-->
            <!--            <a href="#6-8className"><i className="fa fa-suitcase" aria-hidden="true"></i> 6th-8th className</a>-->
            <!--            <a href="#9-10className"><i className="fa fa-suitcase" aria-hidden="true"></i> 9th-10th className</a>-->
            <!--            <a href="#11-12className"><i className="fa fa-suitcase" aria-hidden="true"></i> 11th-12th className</a>-->
            <!--            <a href="#working"><i className="fa fa-graduation-cap" aria-hidden="true"></i> College/ Working Professional</a>-->
            <!--            <a href="#howtoimprove"><i className="fa fa-cogs" aria-hidden="true"></i> How to Improve Life Skills</a>-->
            <!--            <a href="#happiness"><i className="fa fa-smile-o" aria-hidden="true"></i> Happiness/ Well Being </a>-->
            <!--        </div>-->
            <!--    </div>-->
            <!--</div>--> */}
                            <div className="col-md-12">
                                <div className="happiness">
                                    <h1 className="headH">Activity Tools for Improving Tools Wellbeing, Positivity and Happiness</h1>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Building the Basics</h3>
                                                <ul className="happinessList">
                                                    <li>Reflecting on happiness</li>
                                                    <li>Working with happiness quotes</li>
                                                    <li>Scientific conceptions of happiness</li>
                                                    <li>Questionnaire completion</li>
                                                    <li>Findings on the importance of happiness</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Just for Fun</h3>
                                                <ul className="happinessList">
                                                    <li>Sharing a funny story and discussion of the purpose of Humor</li>
                                                    <li>Introduction to the theories of humor</li>
                                                    <li>Humor projects (portrait, TV advert, extraordinary lies)</li>
                                                    <li>Brief laughter session</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Understanding Emotions</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding and labelling emotions</li>
                                                    <li>The emotional thermometer activity</li>
                                                    <li>Find the ratio activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Positive Emotions</h3>
                                                <ul className="happinessList">
                                                    <li>Labelling and importance of positive emotions</li>
                                                    <li>Interventions for enhancing positive emotions (ACT – active, calming, thinking)</li>
                                                    <li>Experimenting with interventions (e.g. physical activity, breathing, reframing)</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Reducing Negative Feelings</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding the negativity bias</li>
                                                    <li>Exploring one’s negative triggers</li>
                                                    <li>The ‘sticky path’ activity (negative spiral)</li>
                                                    <li>Noticing emotions activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Hope</h3>
                                                <ul className="happinessList">
                                                    <li>Sentence completion activity ‘I hope…’</li>
                                                    <li>The importance of hope</li>
                                                    <li>The importance of hope</li>
                                                    <li>‘Finding the way’ activity</li>
                                                    <li>‘Finding the will’ activity</li>
                                                    <li>‘Hope talk’ reframing activity</li>

                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Building on the Positives Part 1</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding savoring</li>
                                                    <li>Savoring questionnaire completion</li>
                                                    <li>Savoring activity</li>
                                                    <li>Creating a ‘savoring menu’</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Building on the Positives Part 2</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding positive reminiscence and associated strategies</li>
                                                    <li>‘Positive mental time travel’ activity</li>
                                                    <li>‘Sharing an experience’ activity</li>
                                                    <li>‘Visual reminiscence’ activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>The Flow Zone</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding flow</li>
                                                    <li>Flow zone matrix activity</li>
                                                    <li>The paperclip exercise</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Happiness Across Cultures</h3>
                                                <ul className="happinessList">
                                                    <li>Introduction</li>
                                                    <li>‘How happy is your country?’ activity</li>
                                                    <li>Happiness debate</li>
                                                    <li>Happiness in India today</li>
                                                    <li>A ‘happiness manifesto’</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>The Happiness Equation</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding happiness</li>
                                                    <li>‘Happiness is related to’ activity</li>
                                                    <li>Poster creation activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Positive Relationships</h3>
                                                <ul className="happinessList">
                                                    <li>The importance of healthy relationships</li>
                                                    <li>‘Tonic versus toxic’ activity</li>
                                                    <li>Conflict resolution strategies</li>
                                                    <li>‘Bumpy road’ activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Everyone is Different</h3>
                                                <ul className="happinessList">
                                                    <li>Introduction to strengths</li>
                                                    <li>The strengths cards activity in small groups</li>
                                                    <li>‘My strengths portfolio’ activity ‘Strengths feedback’ activity</li>
                                                    <li>Using strengths in a different way</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Strengths Stories</h3>
                                                <ul className="happinessList">
                                                    <li>The strengths stories and songbook</li>
                                                    <li>Creating the songbook (decorating the CD, gathering the contents, songbook credits)</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Listening to Others</h3>
                                                <ul className="happinessList">
                                                    <li>Exploring listening and empathy</li>
                                                    <li>‘Can you hear me?’ paired activity</li>
                                                    <li>Active-constructive responding</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Forgiveness</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding the importance of forgiveness</li>
                                                    <li>Practising letting go of grudges</li>
                                                    <li>The ‘forgiveness letter’ activity</li>
                                                    <li>‘Wishing others well’ activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Kindness and Gratitude</h3>
                                                <ul className="happinessList">
                                                    <li>Understanding kindness and gratitude</li>
                                                    <li>‘Three good things’ activity</li>
                                                    <li>‘Thank you letter’ activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="happinessBox">
                                                <h3>Putting it Together</h3>
                                                <ul className="happinessList">
                                                    <li>‘Key facts’ recall</li>
                                                    <li>‘The how of happiness’ – a visual summary of learning</li>
                                                    <li>(mind map, leaflet, poster or PowerPoint presentation)</li>
                                                    <li>‘Thank you’ activity</li>
                                                </ul>
                                                <a className="button btn-primary" href="javascript:;">Know More</a>
                                            </div>
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

export default HappinessWellBeing
