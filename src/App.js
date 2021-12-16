import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import ExamList from './Components/ExamList';
import GuruExpertVideos from './Components/GuruExpertVideos';
import HappinessWellBeing from './Components/HappinessWellBeing';
import InnerPage from './Components/InnerPage';
import login from './Components/login';
import myGuruHome from './Components/myGuruHome';
import signup from './Components/signup';
import header from './Components/Header';
import footer from './Components/Footer';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Prodected from './Prodected'
import VocationalImages from './Components/VocationalImages';
import ResultPage from './Components/Test/TestResult/Test_11th/ResultPage'
import PageNotFound from './Components/PageNotFound';

// 11 th
import test from './Components/test';
import PaymentSummary from './Components/Test/TestResult/Test_11th/PaymentSummary';
import PaymentConfirm from './Components/Test/TestResult/Test_11th/PaymentConfirm';
import Assessment from './Components/Test/TestResult/Test_11th/Assessment';
import Testpage from './Components/Test/TestResult/Test_11th/Testpage';
import ScoreCard from './Components/Test/TestResult/Test_11th/ScoreCard';

////6 to 9 th
import PaymentSummary6To9 from './Components/Test/TestResult/Test_6To9/PaymentSummary6To9';
import PaymentConfirm6To9 from './Components/Test/TestResult/Test_6To9/PaymentConfirm6To9';
import Assessment6To9 from './Components/Test/TestResult/Test_6To9/Assessment6To9';
import Testpage6To9 from './Components/Test/TestResult/Test_6To9/Testpage6To9';
import ScoreCard6To9 from './Components/Test/TestResult/Test_6To9/ScoreCard6To9';
import ResultPage6To9 from './Components/Test/TestResult/Test_6To9/ResultPage6To9';

////7 th
import PaymentSummary7th from './Components/Test/TestResult/Test_7th/PaymentSummary7th';
import PaymentConfirm7th from './Components/Test/TestResult/Test_7th/PaymentConfirm7th';
import Assessment7th from './Components/Test/TestResult/Test_7th/Assessment7th';
import Testpage7th from './Components/Test/TestResult/Test_7th/Testpage7th';
import ResultPage7th from './Components/Test/TestResult/Test_7th/ResultPage7th';

////8 th
import PaymentSummary8th from './Components/Test/TestResult/Test_8th/PaymentSummary8th';
import PaymentConfirm8th from './Components/Test/TestResult/Test_8th/PaymentConfirm8th';
import Assessment8th from './Components/Test/TestResult/Test_8th/Assessment8th';
import Testpage8th from './Components/Test/TestResult/Test_8th/Testpage8th';
import ResultPage8th from './Components/Test/TestResult/Test_8th/ResultPage8th';

////9 th
import PaymentSummary9th from './Components/Test/TestResult/Test_9th/PaymentSummary9th';
import PaymentConfirm9th from './Components/Test/TestResult/Test_9th/PaymentConfirm9th';
import Assessment9th from './Components/Test/TestResult/Test_9th/Assessment9th';
import Testpage9th from './Components/Test/TestResult/Test_9th/Testpage9th';
import ResultPage9th from './Components/Test/TestResult/Test_9th/ResultPage9th';

////10 th
import PaymentSummary10th from './Components/Test/TestResult/Test_10th/PaymentSummary10th';
import PaymentConfirm10th from './Components/Test/TestResult/Test_10th/PaymentConfirm10th';
import Assessment10th from './Components/Test/TestResult/Test_10th/Assessment10th';
import Testpage10th from './Components/Test/TestResult/Test_10th/Testpage10th';
import ResultPage10th from './Components/Test/TestResult/Test_10th/ResultPage10th';

////10 th Interset
import PaymentSummary10thint from './Components/Test/TestResult/Test_10th_int/PaymentSummary10thint';
import PaymentConfirm10thint from './Components/Test/TestResult/Test_10th_int/PaymentConfirm10thint';
import Assessment10thint from './Components/Test/TestResult/Test_10th_int/Assessment10thint';
import Testpage10thint from './Components/Test/TestResult/Test_10th_int/Testpage10thint';
import ResultPage10thint from './Components/Test/TestResult/Test_10th_int/ResultPage10thint';

//environment variable
import dotenv from 'dotenv'

// import timer from './Components/Test/timer';

function App() {
    dotenv.config()
    return (
        <div className="App">
            <BrowserRouter>
            {/* <Header /> */}
                <Switch>
                <Route exact path="/" component={myGuruHome} />
                    <Route exact path="/vocational-career" component={VocationalImages} />
                    <Route exact path="/signup" component={signup} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/carrer/:id" component={InnerPage} />
                    <Route exact path="/happiness" component={HappinessWellBeing} />
                    <Route exact path="/guruexpert" component={GuruExpertVideos} />
                    <Route exact path="/examlist" component={ExamList} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    
                    {/* /11Test/ */}
                    <Route exact path="/test"> <Prodected Cmp={test} /> </Route>
                    <Route exact={true} path="/paymentsummary"> <Prodected Cmp={PaymentSummary} /> </Route>
                    <Route exact path="/paymentconfirm"> <Prodected Cmp={PaymentConfirm} /> </Route>
                    <Route exact path="/paymentassessment"> <Prodected Cmp={Assessment} /> </Route>
                    <Route exact path="/result"> <Prodected Cmp={ResultPage} /> </Route>
                    <Route exact path="/testpage" component={Testpage} countdownTimestampMs={1643673600000} />
                    <Route exact path="/scorecard" component={ScoreCard} />

                    {/* /6 to 9 Test/ */}
                    <Route exact path="/test"> <Prodected Cmp={test} /> </Route>
                    <Route exact={true} path="/6th/paymentsummary"> <Prodected Cmp={PaymentSummary6To9} /> </Route>
                    <Route exact path="/6th/paymentconfirm"> <Prodected Cmp={PaymentConfirm6To9} /> </Route>
                    <Route exact path="/6th/paymentassessment"> <Prodected Cmp={Assessment6To9} /> </Route>
                    <Route exact path="/6th/result"> <Prodected Cmp={ResultPage6To9} /> </Route>
                    <Route exact path="/6th/testpage" component={Testpage6To9} countdownTimestampMs={1643673600000} />
                    <Route exact path="/6th/scorecard" component={ScoreCard6To9} />

                    {/* /7 Test/ */}
                    <Route exact={true} path="/7th/paymentsummary"> <Prodected Cmp={PaymentSummary7th} /> </Route>
                    <Route exact path="/7th/paymentconfirm"> <Prodected Cmp={PaymentConfirm7th} /> </Route>
                    <Route exact path="/7th/paymentassessment"> <Prodected Cmp={Assessment7th} /> </Route>
                    <Route exact path="/7th/result"> <Prodected Cmp={ResultPage7th} /> </Route>
                    <Route exact path="/7th/testpage" component={Testpage7th} countdownTimestampMs={1643673600000} />

                    {/* /8 Test/ */}
                    <Route exact={true} path="/8th/paymentsummary"> <Prodected Cmp={PaymentSummary8th} /> </Route>
                    <Route exact path="/8th/paymentconfirm"> <Prodected Cmp={PaymentConfirm8th} /> </Route>
                    <Route exact path="/8th/paymentassessment"> <Prodected Cmp={Assessment8th} /> </Route>
                    <Route exact path="/8th/result"> <Prodected Cmp={ResultPage8th} /> </Route>
                    <Route exact path="/8th/testpage" component={Testpage8th} countdownTimestampMs={1643673600000} />

                    {/* /9 Test/ */}
                    <Route exact={true} path="/9th/paymentsummary"> <Prodected Cmp={PaymentSummary9th} /> </Route>
                    <Route exact path="/9th/paymentconfirm"> <Prodected Cmp={PaymentConfirm9th} /> </Route>
                    <Route exact path="/9th/paymentassessment"> <Prodected Cmp={Assessment9th} /> </Route>
                    <Route exact path="/9th/result"> <Prodected Cmp={ResultPage9th} /> </Route>
                    <Route exact path="/9th/testpage" component={Testpage9th} countdownTimestampMs={1643673600000} />

                    {/* 10th Test/ */}
                    <Route exact={true} path="/10th/paymentsummary"> <Prodected Cmp={PaymentSummary10th} /> </Route>
                    <Route exact path="/10th/paymentconfirm"> <Prodected Cmp={PaymentConfirm10th} /> </Route>
                    <Route exact path="/10th/paymentassessment"> <Prodected Cmp={Assessment10th} /> </Route>
                    <Route exact path="/10th/result"> <Prodected Cmp={ResultPage10th} /> </Route>
                    <Route exact path="/10th/testpage" component={Testpage10th} countdownTimestampMs={1643673600000} />

                      {/* 10th Test Interst/ */}
                    <Route exact={true} path="/10th/int/paymentsummary"> <Prodected Cmp={PaymentSummary10thint} /> </Route>
                    <Route exact path="/10th/int/paymentconfirm"> <Prodected Cmp={PaymentConfirm10thint} /> </Route>
                    <Route exact path="/10th/int/paymentassessment"> <Prodected Cmp={Assessment10thint} /> </Route>
                    <Route exact path="/10th/int/result"> <Prodected Cmp={ResultPage10thint} /> </Route>
                    <Route exact path="/10th/int/testpage" component={Testpage10thint} />



                    {/* <Route component={PageNotFound} /> */}
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;