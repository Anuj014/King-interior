import React,{useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'
import './App.css';
import {BrowserRouter as Routes,Route,Link,useNavigate} from "react-router-dom";
import Gallerys from './Gallerys';
import Header from './Header';
import Footer from './Footer';

// function App() {
  const App = ()=>{
  return (
    <>
      <Header />
      {/* section-2 done */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner back-opacity">
                <div className="carousel-item carousel-1 active">
                   <div className="carousel-text">
                        <h1 className="heading-1">LEAVE AN EVERLASTING FIRST IMPRESSION</h1>
                        <p className="heading-1P">"Catch your client's attention from the first visit itself with our finest range of reception counters, unique lift flooring designs, state-of-the-art bathroom vanities, beautiful wall claddings, and much more.</p>
                    </div>
                </div>
                <div className="carousel-item carousel-2">
                    <div className="carousel-text">
                        <h1 className="heading-1">LEAVE YOUR GUESTS AWESTRUCK!</h1>
                        <p className="heading-1P">Elevate the guests' visit experience with our exquisite range of furniture & Table Tops, a wide variety of sinks,beautiful wall claddings, and much more.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
      </div>
      {/* section-3 done*/}
      <div className='sec-3'>
        <div className=' c'>
          <h3 className='heading'>About Us</h3>
          <div className='row'>
            <div className='col-md-6 txt-contain-S3'>
              <h6 className='sec-3sub-heading'>PASSION FOR EXCELLENCE.</h6>
              <p className='paragraph'>Now is the time to put that much awaited lasting impression and adorn your homes and workplaces with the finest of our productions. Our dedicated team at Ijazah, are not only a set of diligent workers but also offer some impeccable range of living, bathroom, kitchen and bathroom vanity solutions.</p>
            </div>
            <div className='col-md-6'>
              <div className="img-contain-S3">
                <img className='sec3img' src="./image/sec3img.jpeg" alt="sec3img"/>
                <img className='sec3img1' src="./image/sec3img.jpeg" alt="sec3img1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-4 done*/}
      <div className='sec-4'>
        <div className=' c'>
          <h3 className='heading'>Services</h3>
          <div className='paragraph text-center'>
            <p>Our team helps you bring your imagination to reality with bespoke designs made of solid surface along with the provision of a wide range of furniture and bathroom vanity solutions. Embellishing your leisure and workplace has never been this easy. We've got your back!</p>
          </div>
          <div className='boxcontainer'>
            <div className='box'>
              <div className='sec4img'><img src="./image/sec4img.png" alt="sec4img" /></div>
              <h6 className='column-title'>Reception Area</h6>
              <div className='carddefination'><p className='paragraph'>Aenean commodo nec ligula eget cum sociis dolor.</p></div>
            </div>
            <div className='box'>
              <div className='sec4img'><img src="./image/sec4img1.png" alt="sec4img1" /></div>
              <h6 className='column-title'>Kitchen Spaces</h6>
              <div className='carddefination'><p className='paragraph'>Aenean commodo nec ligula eget cum sociis dolor.</p></div>
            </div>
            <div className='box'>
              <div className='sec4img'><img src="./image/sec4img2.png" alt="sec4img2" /></div>
              <h6 className='column-title'>Bathroom Vanities</h6>
              <div className='carddefination'><p className='paragraph'>Aenean commodo nec ligula eget cum sociis dolor.</p></div>
            </div>
          </div>
        </div>
        <div className='text-center position-relative'>
          <Link className='button-1'>View All<i className=" fa-solid bi bi-arrow-right"></i></Link>
        </div>
      </div>
      {/* section-5 */}
      <div className='sec-5'>
        <div className=' c'>
          <h3 className='heading text-light'>The Core Company Values</h3>
          <div className="value-flex">
            <div className="value-column">
              <div className="progress-container">
                <div className='data'>
                  <div className="progress"><span>95%</span></div>
                </div>
              </div>
              <div className="pro-data">
                  <h4 className="value-heading text-center">Illustration</h4>
                  <p className='paragraph text-center'>Lorem ipsum dolor<br/> amet sociis dolor.</p>
              </div>
            </div>
            <div className="value-column">
              <div className="progress-container">
                <div className='data'>
                  <div className="progress-2"><span>50%</span></div>
                </div>
                <div className="pro-data">
                  <h4 className="value-heading text-center">Interior Design</h4>
                  <p className='paragraph text-center'>Lorem ipsum dolor<br/> amet sociis dolor.</p>
                </div>
              </div>
            </div>
            <div className="value-column">
              <div className="progress-container">
                <div className='data'>
                  <div className="progress-3"><span>100%</span></div>
                </div>
                <div className="pro-data">npm start
                  <h4 className="value-heading text-center">Architecture</h4>
                  <p className='paragraph text-center'>Lorem ipsum dolor<br/> amet sociis dolor.</p>
                </div>
              </div>
            </div>
            <div className="value-column">
              <div className="progress-container">
                <div className='data'>
                  <div className="progress-4"><span>75%</span></div>
                </div>
                <div className="pro-data">
                  <h4 className="value-heading text-center">3D Modeling</h4>
                  <p className='paragraph text-center'>Lorem ipsum dolor<br/> amet sociis dolor.</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      {/* <Gallerys/> */}
      <Footer/>
    </>
  );
}

export default App;
