import { Dropdown } from 'react-bootstrap';
import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from './images/logo.png'

const Header2 = () => {
    const history = useHistory();
    
    function logout() {
        localStorage.clear();
        history.push("./login")
    }
   
    return (
        <div>
            {/* <!-- Start header --> */}
            <header className="top-header">
                <nav className="navbar header-nav navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img className="pb-5" src={logo} alt="image" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">

                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-start mt-2" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav careerBtn">
                                <li className="dropdown">
                    
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-center" id="navbar-wd">
                            <ul className="navbar-nav">
                                <li className="dropdown">
                                    <Dropdown>
                                        {/* <Dropdown.Toggle style={{ background: "none", color: "#000", border: "none" }} className="dropdown-toggle" data-toggle="dropdown" ><a className="nav-link dropdown-toggle">
                                                Collaboration</a>
                                            </Dropdown.Toggle> */}
                                        <Dropdown.Toggle style={{ background: "none", color: "#fff", border: "none" }} id="dropdown-basic" data-toggle="dropdown"><a className="nav-link dropdown-toggle" href="javascript:;">
                                            <b className=""></b>Collaboration</a>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><a className="dropdown-item" href="#">School/ Education</a></li>
                                            <li><a className="dropdown-item" href="#">Counsellor</a></li>
                                            <li><a className="dropdown-item" href="#">Corporate</a></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* <a type="button" className="dropdown-toggle" data-toggle="dropdown">Collaboration </a> */}
                                </li>
                                <Link to='/'><li><a className="nav-link active mt-1">Home</a></li></Link>
                                <Link to='/aboutus'><li><a className="nav-link mt-1">About us</a></li></Link>
                                {
                                    localStorage.getItem("user-details") ?
                                        <>
                                            <li><Link className="nav-link mt-1" to='/paymentsummary'>Test</Link></li>
                                        </>
                                        :
                                        <>
                                            <li><Link className="nav-link mt-1" to='/login'>Test</Link></li>
                                        </>
                                }
                                <li className="dropdown">
                                    <Dropdown>
                                        {/* <Dropdown.Toggle style={{ background: "none", color: "#000", border: "none" }} className="dropdown-toggle" data-toggle="dropdown"><a className="nav-link dropdown-toggle">
                                                Contact Us</a>
                                            </Dropdown.Toggle> */}
                                        <Dropdown.Toggle style={{ background: "none", color: "#fff", border: "none" }} id="dropdown-basic" data-toggle="dropdown"><a className="nav-link dropdown-toggle" href="javascript:;">
                                            <b className=""></b>Contact us</a>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><a className="dropdown-item" href="#">Email Us</a></li>
                                            <li><a className="dropdown-item" href="#">Call Us</a></li>
                                            <li><a className="dropdown-item" href="#">WhatsApp Us</a></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* <a type="button" className="dropdown-toggle" data-toggle="dropdown">Contact us </a> */}
                                </li>
                                {
                                    localStorage.getItem("user-details") ?
                                        <>
                                            {/* <li><button className="nav-link mt-1"  onClick={logout}>Logout</button></li> */}
                                            <Link to='/login'><li> <a className="nav-link mt-1" onClick={logout}>Logout</a> </li></Link>
                                        </>
                                        :
                                        <>
                                            <Link to="/login"><li><a className="nav-link mt-1">Login/Signup</a></li></Link>
                                        </>
                                }
                                {/* <li><a className="nav-link mt-1" href="/login">Login/Signup</a></li>
                                <li><a className="nav-link mt-1" href="#">Logout</a></li> */}
                                <li>
                                    <div className="search-box">
                                        <input type="text" className="search-txt" placeholder="Search" />
                                        <a className="search-btn">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- End header --> */}
        </div>
    )
}

export default Header2
