import React from 'react';
import {BrowserRouter as Routes,Route,Link,useNavigate} from "react-router-dom";
import './Header.css';

function Header(){
    // const navigate =useNavigate();
    // const gotohome=()=>{
    //     navigate("/");
    // }
    const navigate1 = useNavigate();
    const gotoabout =()=>{
      navigate1("/about");
    }
    const navigate2 = useNavigate();
    const gotoservices =()=>{
      navigate2("/services");
    }
    const navigate3 = useNavigate();
    const gotoproject =()=>{
      navigate3("/projects");
    }
    const navigate4= useNavigate();
    const gotocontact =()=>{
      navigate4("/contact");
    }
    return(
        <>
            {/* section-1 done */}
            <header className='header fixed-top'>
                <nav>
                    <div className="navbar navbar-expand-md navbar-light bg-white hspace">
                        <Link className="navbar-brand" to="#"><span className='logo'>Kingsdxb</span></Link>
                        <button class="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav-btn-container" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link className="nav-link active" to="/" >HOME</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about" onClick={gotoabout}>ABOUT US</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/services" onClick={gotoservices}>SERVICES</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/projects" onClick={gotoproject}>PROJECTS</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact" onClick={gotocontact}>CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="header-space"></div>
        </>
    )
}
export default Header;
