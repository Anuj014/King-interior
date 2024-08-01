import React from 'react';
import {BrowserRouter as Routes,Route,Link, useNavigate} from "react-router-dom";
import './About.css';
import Header from './Header';
import Footer from './Footer';


function About(){
    return(
        <>
        {/* ---------------------------------------Aboutus----------------------------- */}
            <Header/>
            {/* -------------sec-2----------- */}
            {/* <div className='aboutus'> */}
                <div className='asec-2'>
                    <div className="asec-2-overlay">
                    <div className='container-fluid d-flex justify-content-between hspace'>
                        <h4 className="banner-txt-containers3">About Us</h4>
                        <div>
                            <Link to="/" className='navigatetohome'>Home</Link>
                            &nbsp;&nbsp;/&nbsp;&nbsp;
                            <span className='navigatetohome'>About Us</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="c">
                    <div className="asec-3">
                        <div className="row m-0 p-0 align-items-center">
                            <div className="col-lg-6">
                                <h4 className="asub-heading">We amp your personal & professional space.</h4>
                                <p className='paragraph'>Al Ijazah, with over 10 years of experience in the field of fabrication in the United Arab Emirates market, we not only believe in customer satisfaction but production of the utmost quality.</p>
                                <p className='paragraph'>A group of highly skilled professionals with a proven record and having chosen after thorough demonstration of their fabrication skills and previous work, our team members work like magicians n in their respective scope of work whether it is fabricating a custom-made vanity or a contemporary kitchen island. As the tagline rightly says, we are the Master of Solid Surfaces handling our projects with fervor and exquisite delicacy.</p>
                                <h4 className="asub-heading">OUR VISION</h4>
                                <p className='paragraph'>We believe that an appealing office and home space is everyone’s right. Thus, with our expertise, and experienced staff we provide you furniture and bathroom vanity solutions that fit your budget and exceed your expectations.</p>
                            </div>
                            <div className="col-lg-6">
                                <img className='img-1about' src="https://www.codeninja.in/assets/images/about-page.png" alt="img-1about" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            {/* </div> */}
        </>
        
    );
};
export default About;