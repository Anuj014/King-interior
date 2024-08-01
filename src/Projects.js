import React from 'react';
import {BrowserRouter as Routes,Route,Link, useNavigate} from "react-router-dom";
import './Projects.css';
import Footer from './Footer';
// import Gallerys from './Gallerys';
import Header from './Header'

function Projects(){
    return(
        <>
          {/* ---------------------------------------Projects----------------------------- */}
          {/* section-1 done */}
            <Header/>
          {/* ----------------------------------------sec-2------------------- */}
          <div className='Projects'>
            {/* section-2 */}
            <div className='psec-2'>
              <div className="psec-2-overlay">
                <div className='container-fluid d-flex justify-content-between hspace'>
                  <h4 className="banner-txt-containers3">Projects</h4>
                  <div>
                    <a href="/" className='navigatetohome'>Home</a>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <span className='navigatetohome'>Projects</span>
                  </div>
                </div>
              </div>
            </div>
              {/* <Gallerys/> */}
          </div>
        <Footer/>
      </>
    );
};
export default Projects;