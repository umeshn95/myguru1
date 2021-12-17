import React, { useState } from "react";
import "./css/bootstrap.min.css";
import "./css/pogo-slider.min.css";
import "./css/style.css";
import "./css/custom.css";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "./Loader/Loader";
import Header from "./Header";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import dotenv from 'dotenv'
const Login = () => {
  //============================================== Hooks & Variables ===================================================//
  const history = useHistory();
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();
  const [passwordShown, setPasswordShown] = useState(false);
  //============================================== Show Password Toggle Function ===================================================//
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  dotenv.config()
console.log(process.env)
  //============================================== Show Password Toggle Function ===================================================//
  const login = () => {
    let item = { username, password};
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/api/account/login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      // console.log("Result", result.status)
      if (result.status !== 401) {
        alert.success("Login Successful!");
      }
      result.json().then((resp) => {
        // console.log(resp)
        setLoading(false);
        if (result.status !== 200) {
          alert.error("User name password incorrect!!!");
        }
        if (result.status === 200) {
          localStorage.setItem("user-details", JSON.stringify(resp));
          history.push("/");
          setUsername("");
          setPassword("");
        }
      });
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <body
        id="home"
        data-spy="scroll"
        data-target="#navbar-wd"
        data-offset="98"
      >
        {/* <!-- LOADER --> */}
        {/* <div id="preloader">
                    <div className="loader">
                        <img src="assets/images/loader.gif" alt="#" />
                    </div>
                </div> */}
        {/* <!-- end loader -->
<!-- END LOADER -->

<!-- Start header --> */}

        {/* <!-- End header --> */}
        <section className="inner_banner margin-top_7">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="full">
                  <h3>Login/Signup</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Popular Programs section --> */}

        {/* <!-- margin-top_50 --> */}
        <div className="section layout_padding Login">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="why_us_login">
                  <div className="text">Benefits of Registration with us:-</div>
                  <div className="why_us_login_inner">
                    <ul>
                      <li>Manage your Orders</li>
                      <li>Manage your Tests easily</li>
                      <li>Connect with your campus</li>
                      <li>
                        Save Videos and watch whenever you want in one click
                      </li>
                      <li>Manage your appointments with our counsellors</li>
                      <li>
                        Save Videos and watch whenever you want in one click
                      </li>
                      <li>Manage your appointments with our counsellors</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-info mt-3"
                      onclick="window.location.href='about-us.html';"
                    >
                      Learn More
                    </button>
                  </div>
                  <p className="mt-3 mb-1">
                    <b>For more details you can contact us at:-</b>
                  </p>
                  <ul className="login_contact">
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <span>ABC, Laxmi Nagar, New Delhi-110001. India</span>
                    </li>
                    <li>
                      <i className="fa fa-process.env.Relope"></i>
                      <span>info@gmail.com</span>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <span>+91-9876543210</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="loginform">
                  <div className="text">Login</div>
                  <div className="field">
                    {" "}
                    <i className="fa fa-user"></i>
                    <select name="profile" id="profile">
                      <option value="select" selected>
                        Select User Profile
                      </option>
                      <option value="student">Student</option>
                      <option value="campus">Campus</option>
                      <option value="counsellor">
                        Counsellor/Educationist
                      </option>
                      <option value="superadmin">Super Admin</option>
                      <option value="admin">Admin</option>
                      <option value="editor">Editor</option>
                    </select>
                  </div>
                  <div className="field">
                    {" "}
                    <i classNameName="fa fa-process.env.Relope-o"></i>
                    <input
                      type="text"
                      placeholder="Email & Username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {passwordShown ? (
                    <>
                      <div className="field">
                        {" "}
                        <i classNameName="fa fa-key"></i>{" "}
                        <div className="eyeIcon">
                          <i classNameName="fa fa-eye" onClick={togglePassword}></i>
                        </div>{" "}
                        <input
                          type={passwordShown ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />{" "}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="field">
                        {" "}
                        <i classNameName="fa fa-key"></i>{" "}
                        <div className="eyeIcon">
                          <i
                            classNameName="fa fa-eye-slash"
                            onClick={togglePassword}
                          ></i>
                        </div>{" "}
                        <input
                          type={passwordShown ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />{" "}
                      </div>
                    </>
                  )}
                  {/* <button onClick={togglePassword}>Show Password</button> */}
                  <button className="login_btn" onClick={login}>
                    Login
                  </button>
                  <Link to="/signup" className="float-left">
                    Not Register? Signup Now
                  </Link>
                  <a href="javascript:;" className="float-right">
                    Forgot Password?
                  </a>
                  <div className="clearfix"></div>
                  <div className="social-buttons">
                    <b>Or You can Login with</b>
                    <button className="neo-button">
                      <i className="fa fa-facebook fa-1x"></i>{" "}
                    </button>
                    <button className="neo-button">
                      <i className="fa fa-linkedin fa-1x"></i>
                    </button>
                    <button className="neo-button">
                      <i className="fa fa-google fa-1x"></i>{" "}
                    </button>
                    <button className="neo-button">
                      <i className="fa fa-youtube fa-1x"></i>{" "}
                    </button>
                    <button className="neo-button">
                      <i className="fa fa-twitter fa-1x"></i>{" "}
                    </button>
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
  );
};

export default Login;
