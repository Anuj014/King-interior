import React, { useState } from 'react';
import 'lightgallery/css/lightgallery.css';
import LightGallery from "lightgallery/react/Lightgallery.es5";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {PhotoAlbum} from "react-photo-album";
// import {BrowserRouter as Routes,Route,Link,useNavigate} from "react-router-dom";
import './Gallery.css';



const images=[
  {src:"https://www.codeninja.in/assets/gallery/g1.jpg", title:'images' },
  {src:"https://www.codeninja.in/assets/gallery/g2.jpg", title:'images-2' },
  {src:"https://www.codeninja.in/assets/gallery/g3.jpg", title:'images-3' },
  {src:"https://www.codeninja.in/assets/gallery/g4.jpg", title:'images-4' },
  // {src:"https://www.codeninja.in/assets/gallery/g5.jpg", title:'image-5' },
  // {src:"https://www.codeninja.in/assets/gallery/g6.jpg", title:'image-6' },
  // {src:"https://www.codeninja.in/assets/gallery/g7.jpg", title:'image-7' },
  // {src:"https://www.codeninja.in/assets/gallery/g8.jpg", title:'image-8' },
  // {src:"https://www.codeninja.in/assets/gallery/g9.jpg", title:'image-9' },
  // {src:"https://www.codeninja.in/assets/gallery/g10.jpg", title:'image-10' },
  // {src:"https://www.codeninja.in/assets/gallery/g11.jpg", title:'image-11' },
  // {src:"https://www.codeninja.in/assets/gallery/g12.jpg", title:'image-12' },
  // {src:"https://www.codeninja.in/assets/gallery/g13.jpg", title:'image-13' },
  // {src:"https://www.codeninja.in/assets/gallery/g14.jpg", title:'image-14' },
  // {src:"https://www.codeninja.in/assets/gallery/g15.jpg", title:'image-15' },
  // {src:"https://www.codeninja.in/assets/gallery/g16.jpg", title:'image-16' },
  // {src:"https://www.codeninja.in/assets/gallery/g17.jpg", title:'image-17' },
];
function Gallerys(){
  const [isOpen, setIsOpen]=useState(false);
  const [index, setIndex] = useState(0);
  const openLightbox = (i) => {
    setIndex(i);
    setIsOpen(true);
  };
  return(
    <>
    <div className="container">
        <LightGallery
        speed={500}
        plugins={[]}>
        <a href="https://www.codeninja.in/assets/gallery/g1.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g1.jpg" alt="1" /></a>
        <a href="https://www.codeninja.in/assets/gallery/g2.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g2.jpg" alt="2" /></a>
        <a href="https://www.codeninja.in/assets/gallery/g3.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g3.jpg" alt="3" /></a>
        <a href="https://www.codeninja.in/assets/gallery/g4.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g4.jpg" alt="4" /></a>
        {/* <a href="https://www.codeninja.in/assets/gallery/g5.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g5.jpg" alt="5" /></a>
        <a href="https://www.codeninja.in/assets/gallery/g6.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g6.jpg" alt="" /></a>
        <a href="https://www.codeninja.in/assets/gallery/g7.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g7.jpg" alt="" /></a>
        <a href="https://www.codeninja.in/assets/gallery/g8.jpg"><img className='libox' src="https://www.codeninja.in/assets/gallery/g8.jpg" alt="" /></a> */}
        </LightGallery>
        <PhotoAlbum
        photos={{src:"https://www.codeninja.in/assets/gallery/g1.jpg", title:'images' }}
        targetRowHeight={180}
          />
        <div>
          <button onClick={()=> setIsOpen(true)}>Open Gallery</button>
              {/* Render the lightbox */}
              {isOpen && (
                <Lightbox slides={images}   
                onClose={()=>setIsOpen(false)}/> 
              )}
        </div>
        <div>
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  alt={image.title}
                  onClick={() => { setIsOpen(true); setIndex(i); }}
                  style={{ cursor: 'pointer', margin: '4px', width: '180px', height: '200px'}}
                />
              ))}
              {isOpen && (
                <Lightbox
                  slides={images}
                  onClose={() => setIsOpen(false)}
                  index={index}
                  animationDuration={500}
                />)}
            </div>
    </div>
    </>
  );
}
export default Gallerys;