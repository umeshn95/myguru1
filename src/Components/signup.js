import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'
import React, { useEffect, useState } from 'react'
import Loader from './Loader/Loader'
import { Link, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert'
import Header from './Header'
// import process.env.R from 'react-dotprocess.env.R'


const Signup = () => {

//============================================== Hooks & Variables ===================================================//
    const history = useHistory();
    const [loading, setLoading] = useState()
    const [campus, setCampus] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const alert = useAlert()
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);

//============================================== UseEffect ===================================================//
    useEffect(() => {
        setLoading(false)
    }, [])

//========================================= Show Password Toggle Buttons Fuction ===================================================//
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const togglePassword2 = () => {
        setPasswordShown2(!passwordShown2);
    };

//============================================== Register Function ===================================================//
    const register = () => {
        let item = { campus, name, email, password }
        if (password.length < 8 || confirmPassword.length < 8) {
            // return alert.error("Password should be 8 digit!")
            return alert.error("Password should be 8 digit!")
        }
        if (password !== confirmPassword) {
            return alert.error("Password did not Match!")
        }
        setLoading(true)
        // fetch("https://myguruonline.herokuapp.com${process.env.R.API_URL}/api/account/register/", {
        fetch(`${process.env.R.API_URL}/api/account/register/`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        }).then((result) => {
            // console.log("Result", result.status)
            if (result.status !== 400) {
                alert.success("Registration Successfully!")
                setLoading(false)
            }
            result.json().then((resp) => {
                // console.log(resp)
                setLoading(false)
                if (result.status !== 200) {
                    alert.error(resp.detail)
                }
                if (result.status === 200) {
                    localStorage.setItem("user-details", JSON.stringify(resp));
                    history.push("/login")
                    setCampus("")
                    setName("")
                    setEmail("")
                    setPassword("")
                    setConfirmPassword("")
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

            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
                <Header />
                {/* <!-- Popular Programs section --> */}


                <div className="section layout_padding Login margn-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="loginform">
                                    <div className="text">Signup</div>
                                    <div className="field"> <i className="fa fa-user"></i> <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} /></div>
                                    <div className="field"> <i className="fa fa-user"></i>
                                        <select name="profile" id="profile" required value={campus} onChange={(e) => setCampus(e.target.value)}>
                                            <option value="select" selected>Select User Profile</option>
                                            <option value="student">Student</option>
                                            <option value="campus" >Campus </option>
                                            <option value="corporate">Corporate</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                    <div className="field"> <i className="fa fa-process.env.Relope-o"></i> <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} /> </div>
                                    {/* <div className="field"> <i className="fa fa-key"></i> <input type="text" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/></div> */}
                                    {
                                        passwordShown ?
                                            <>
                                                <div className="field"> <i classNameName="fa fa-key"></i> <div className='eyeIcon2'><i classNameName="fa fa-eye" onClick={togglePassword}></i></div> <input type={passwordShown ? "text" : "password"} placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} /> </div>
                                            </>
                                            :
                                            <>
                                                <div className="field"> <i classNameName="fa fa-key"></i> <div className='eyeIcon2'><i classNameName="fa fa-eye-slash" onClick={togglePassword}></i></div> <input type={passwordShown ? "text" : "password"} placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} /> </div>
                                            </>
                                    }
                                    {
                                        passwordShown2 ?
                                            <>
                                                <div className="field"> <i classNameName="fa fa-key"></i> <div className='eyeIcon2'><i classNameName="fa fa-eye" onClick={togglePassword2}></i></div> <input type={passwordShown2 ? "text" : "password"} placeholder="Re-Enter Password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} /> </div>
                                            </>
                                            :
                                            <>
                                                <div className="field"> <i classNameName="fa fa-key"></i> <div className='eyeIcon2'><i classNameName="fa fa-eye-slash" onClick={togglePassword2}></i></div> <input type={passwordShown2 ? "text" : "password"} placeholder="Re-Enter Password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} /> </div>
                                            </>
                                    }

                                    {/* <div className="field"> <i className="fa fa-key"></i> <input type="text" placeholder="Re-Enter Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></div> */}

                                    <button className="login_btn" onClick={register}>Signup</button>
                                    <Link to='/login'><a className="float-left">Already Register? Login Now</a></Link>
                                    <a href="javascript:;" className="float-right">Forgot Password?</a>
                                    <div className="clearfix"></div>
                                    <div className="social-buttons">
                                        <b>Or You can Signup with</b>
                                        <button className="neo-button"><i className="fa fa-facebook fa-1x"></i> </button>
                                        <button className="neo-button"><i className="fa fa-linkedin fa-1x"></i></button>
                                        <button className="neo-button"><i className="fa fa-google fa-1x"></i> </button>
                                        <button className="neo-button"><i className="fa fa-youtube fa-1x"></i> </button>
                                        <button className="neo-button"><i className="fa fa-twitter fa-1x"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end section --> */}

                <div className="clearfix"></div>
            </body>
        </div>


    )
}


export default Signup;
