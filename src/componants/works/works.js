import React, { useState } from 'react';
import './works.css';
import style from './works.css';
import project1 from "../../assets/pro 1.png";
import project2 from "../../assets/pro 2.png";
import project3 from "../../assets/pro 3.png";
import soon from "../../assets/soon.jpg";

function Works() {
  const [currentImage, setCurrentImage] = useState(null);
  const [details, setDetails] = useState({
    title: '',
    description: '',
    time : ''

  });
//   const [showDetails, setShowDetails] = useState( false );
const [width, setwidth] = useState(0);
const [height, setheight] = useState(0);
  const [scale, setscale] = useState(0);
  const [showbg , setshowbg] = useState(0);

   

  const images = [
    {
      src: project1,
      title: 'Car modification company',
      description: 'A site about the car modification company and the site explains its services and modifications available and how to communicate with them The site is designed and designed by html, css and javascript',
      time:' one weak to finish'
    },
    {
      src: project2,
      title: 'shoes shop',
      description: 'Designing a website for shop shoes and designed to display the details of the company and to log in to the site and purchase designed in html, css and javascript and is still under development',
          time:'1 days to finish'
    },
    {
      src: project3,
      title: 'storage',
      description: 'A site that is a table in which the products enter and you can delete and update the product and is dedicated to all screens and there is a button to change the site from dark mode to light mode . and made by using html , css and javascript',
          time:'4 days to finish'
    },
    {
      src: soon,
      title: 'Coming Soon',
      description: 'This project is coming soon',
      
    }
  ];

  const handleImageClick = (image) => {
    setCurrentImage(image.src); 
    setscale( 1  );
    setheight(80)
    setwidth(80)
    setshowbg(1)
    setDetails({
      title: image.title,
      description: image.description ,
      time: image.time
    });
   
    
  };

  const handleCloseDetails = () => {
    setscale(0)
    setshowbg(0)
    setheight(0)
    setwidth(0)
  };



  return (
    <section id='works'>
      <h2 className='workstitle'>My Portfolio</h2>
      <span className='worksdesc'>
       these are my works i hope you like it 
      </span>

      {setscale && (
        <div className='centerelement'>
      <div className='detailsbg' onClick={handleCloseDetails} style={{ transform : `scale(${showbg})`}}>
        </div> 

           <div className='detailshow' style={{ transform: `scale(${scale})` ,   width:`${width}%`,  height:`${height}%`}}>

                    <div className='detailspage'>
                                 <div className='detailspage-left'>
                                        <img src={currentImage} alt='Current Image' />
                                 </div>
                                 <div className='detailspage-right'>
                                    <h2>{details.title}</h2>
                                   <p>{details.time}</p>
                               
                                   <button onClick={handleCloseDetails }>x</button>
                                   
                            </div>
                    </div>
                 <h2>about project</h2>
                 <p>{details.description} </p>
             </div>
     </div>
      ) }

      <div className='worksimgside'>
        {images.map((image, index) => (
          <img
            key={index}
            alt='img'
            src={image.src}
            className='worksimg'
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
 
     


    </section>
  );
}

export default Works;
