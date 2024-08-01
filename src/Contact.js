
import React from 'react';
import {BrowserRouter as Routes,Route,Link, useNavigate} from "react-router-dom";
import './Contact.css';
import Header from './Header';
import Footer from './Footer';

function Contact(){
    return(
        <>
          {/* ---------------------------------------contact----------------------------- */}
           {/* section-1 done */}
           <Header/>
          {/* ----------------------------------------sec-2------------------- */}
          <div className='contact'>
            {/* section-2 */}
            <div className='csec-2'>
              <div className="csec-2-overlay">
                <div className='container-fluid d-flex justify-content-between hspace'>
                  <h4 className="banner-txt-containers3">contact</h4>
                  <div>
                    <a href="/" className='navigatetohome'>Home</a>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <span className='navigatetohome'>contact</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="csec-3">
              <div className="c">
                <div className="contact-flex">
                  <div className="contact-box">
                    <div className="iconc text-center"><img src="https://www.codeninja.in/assets/images/phone-black.png" alt="phone" /></div>
                    <div className="contact-content text-center">
                      <h4 className='contact-head'>phone</h4>
                      <p className='links mb-0'> +971-54-7898526</p>
                    </div>
                  </div>
                  <div className="contact-box">
                    <div className="iconc text-center"><img src="https://www.codeninja.in/assets/images/email-black.png" alt="mail" /></div>
                    <div className="contact-content text-center">
                      <h4 className='contact-head'>E-mail</h4>
                      <a href="mailto:admin@al-ijazah.com" className='links mb-0'>admin@al-ijazah.com</a>
                    </div>
                  </div>
                  <div className="contact-box">
                    <div className="iconc text-center"><img src="https://www.codeninja.in/assets/images/home-black.png" alt="home" /></div>
                    <div className="contact-content text-center">
                      <h4 className='contact-head'>Location</h4>
                      <p className='links mb-0'>Al Qusais Indusrial Area 4, Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csec-4">
              <div className="c">
                <div className=' map-container'>
                  <div className='map-icon text-center'><img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="contact" /></div>
                  <div className='map-txt'>Oops! Something went wrong.</div>
                  <div className='map-para'>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    );
};
export default Contact;