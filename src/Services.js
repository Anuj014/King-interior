import React from 'react';
import {BrowserRouter as Routes,Route,Link, useNavigate} from "react-router-dom";
import './Services.css';
import Header from './Header';
import Footer from './Footer';

const Services =() =>{
    const navigate=useNavigate();
    const gotohome=()=>{
        navigate("/");
    }
    const navigate1 = useNavigate();
    const gotoabout =()=>{
      navigate1("/about");
    }
    const navigate3 = useNavigate();
    const gotoproject =()=>{
      navigate3("/projects");
    }
    const navigate4= useNavigate();
    const gotocontact =()=>{
      navigate4("/contact");
    }
// function Services(){
    return(
    <>
      {/* ---------------------------------------Services----------------------------- */}
      {/* section-1 done */}
      <Header/>
      {/* ----------------------------------------sec-2------------------- */}
      <div className='Services'>
        {/* section-2 */}
        <div className='ssec-2'>
          <div className="ssec-2-overlay">
            <div className='container-fluid d-flex justify-content-between hspace'>
              <h4 className="banner-txt-containers3">Services</h4>
              <div>
                <Link to="/" className='navigatetohome'>Home</Link>
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <span className='navigatetohome'>Services</span>
              </div>
            </div>
          </div>
        </div>
        {/* section-3 */}
        <div className="c">
          <div className="ssec-3">
              <h4 className="text-center ssub-heading">Choose or customize- We're right here!</h4>
              <p className='text-center paragraph'>Customization and picking the best option for your personal and workplace is just a call away.Our highly qualified staff helps you pick the best available options and provides the most ideal customization catering to your needs.</p>
          </div>
        </div>
        {/* section-4 */}
        <div className="ssec-4">
          <div className='c'>
            <h4 className="heading">Our Services</h4>
            <div className="services">
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/kitchen_countertop.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>KITCHEN COUNTER TOPS</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s2.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>BATHROOM VANITIES</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s3.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>SHOWER ENCLOSURE</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s4.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>RETAIL COUNTERTOPS</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s5.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>TABLE TOPS</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s6.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>COLUMNS</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/customized_furniture.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>CUSTOMIZED FURNITURE</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/wall-cladding.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>WALL CLADDING AND FURNITURES</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s9.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>DECORATIVE ELEMENTS</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
              <div className="services-columns">
                <div className="services-inner">
                  <div className="icon-box"><img src="https://www.codeninja.in/assets/images/s10.png" alt="imgs1" /></div>
                  <div className="service-content">
                    <h6 className='service-title'>OTHER CUSTOM FABRICATION</h6>
                    <p className='paragraph content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    );
  };
export default Services;