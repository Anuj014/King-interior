import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BrowserRouter as Routes,Route,Link, useNavigate} from "react-router-dom";
import './Footer.css';
function Footer(){
    const option={
        margin:36 ,
        dots: true,
        nav:false,
        // items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        animationOut:'slideOutUp',
        responsive:{
            0:{
                items:2
            },
            574:{
                item:1
            },
            766:{
                items:2
            },
            1200:{
                items:4
            },
            1500:{
                items:4
            },
            1800:{
                items:4
            },
        },
      };

    return(
        <>
            {/* section-7 done */}
            <div className='sec-7'>
                <div className='c'>
                <h3 className='heading'>OUR SUPPLIERS</h3>
                <div className='section'>
                    <OwlCarousel className='owl-theme' {...option} nav>
                        <div className='item'><img className='sec7img1' src="./image/sec7img1.png" alt="sec-7img-1" /></div>              
                        <div className='item'><img className='sec7img1' src="./image/sec7img2.png" alt="sec-7img-2" /></div>
                        <div className='item'><img className='sec7img1' src="./image/sec7img3.png" alt="sec-7img-3" /></div>
                        <div className='item'><img className='sec7img1' src="./image/sec7img4.png" alt="sec-7img-4" /></div>
                    </OwlCarousel>
                </div>
                </div>
            </div>
            <div className='button-container'>
                <div className='text-center'>
                <Link className='button1'>Work Together<i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
            {/* sec-8 footer */}
            <div className='sec-8 footer'>
                <div className='c'>
                <div className='row'>
                    <div className='col-md-7 text-light'>
                    <div className='row'>
                        <div className='col-sm-8'>
                        <span className='logo'>Kingsdxb</span>
                        <p className='paragraph'>Our dedicated team at Kingsdxb, are not only a set of diligent workers but also offer some impeccable range of living, bathroom, kitchen and bathroom vanity solutions.</p>
                        <div className='footer-contact'>
                            <span><i className="icon bi bi-telephone"></i></span>
                            <address>+971-54-7898526</address>
                        </div>
                        <div className='footer-contact'>
                            <span><i className="icon bi bi-geo-alt"></i></span>
                            <address>Al Qusais Indusrial Area 4, Dubai, UAE</address>
                        </div>
                        </div>
                        <div className='col-sm-4'>
                        <h3 className='sub-heading'>QUICK LINKS</h3>
                        <ul className='footer-item'>
                            <li className='footer-link'>Home</li>
                            <li className='footer-link'>About Us</li>
                            <li className='footer-link'>Services</li>
                            <li className='footer-link'>Projects</li>
                            <li className='footer-link'>Contact</li>
                            <li className='footer-link'>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-5 text-light'>
                    <form>
                        <div className='row m-0 p-0'>
                        <div className="col-sm-12"> <h3 className='sub-heading'>GET IN TOUCH</h3></div>
                        <div className="col-sm-6"><div className="input-box"><input className='inputs' type="text" placeholder='Name* '/></div></div>
                        <div className="col-sm-6"><div className="input-box"><input className='inputs' type="text" placeholder='Phone:' /></div></div>
                        <div className="col-sm-6"><div className="input-box"><input className='inputs' type="text" placeholder='Email*' /></div></div>
                        <div className="col-sm-6"><div className="input-box"><input className='inputs' type="text" placeholder='Company'/></div></div>
                        <div className="col-sm-12"><div className="input-box"><textarea className='inputs' name="" rows={3} placeholder='Message'/></div></div>
                        </div>
                        
                        <div className='text-center'>
                        <Link className='button2 ' to="button2">Submit<i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className='text-center copyright'>
                <p className='copy'>© Kingsdxb 2024. All Rights Reserved.</p>
            </div> 
        </>
    )
}
export default Footer;
