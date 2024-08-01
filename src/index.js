import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
// import Gallery from './Gallery';
// import PrivacyPolicy from './PrivacyPolicy';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>=
        {/* <Route exact path="/gallery" element={<Gallery />}></Route> */}
        {/* <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route> */}
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log resultsy (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();