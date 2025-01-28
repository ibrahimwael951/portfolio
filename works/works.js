
import React, { useState } from 'react';
import './works.css';
 
import project1 from "../../assets/pro 1.png";
import project2 from "../../assets/pro 2.png";
import project3 from "../../assets/pro 3.png";
import project4 from "../../assets/pro 4.png";
import project5 from "../../assets/pro 5.png";
import project6 from "../../assets/pro 6.png";
 

function Works() {
  const [currentImage, setCurrentImage] = useState(null);
  const [details, setDetails] = useState({
    title: '',
    description: ''
  });
//   const [showDetails, setShowDetails] = useState( false );
const [width, setwidth] = useState(0);
const [height, setheight] = useState(0);
  const [scale, setscale] = useState(0);
  const [showbg , setshowbg] = useState(0);

   

  const images = [
    {
      src: project1,
      title: 'Flix App',
      description: 'A movie streaming app that allows users to watch movies and TV shows. The app is built using React, Redux, Firebase, and Styled using Tailwind CSS. The app is responsive and has a dark mode feature. The app is still under development.',
      LinkPage: "https://flix.kareemadel.com/en",
      LinkGithub: "https://github.com/KareemAdelAwwad/flix",
      responsive: "yes",
      youTubeLink: "none",
      underdevelopment: "NO",
    },
    {
      src: project2,
      title: 'School App',
      description: 'A school management app that allows teachers to manage students, subjects, and grades. The app is built using React, Redux, Firebase, and Styled using Tailwind CSS. The app is responsive and has a dark mode feature. The app is still under development.',
      LinkGithub: "https://github.com/ibrahimwael951/school-repo",
      LinkPage: "https://appschool.vercel.app/",
      responsive: "yes",
      youTubeLink: "none",
      underdevelopment: "yes",

    },
    {
      src: project3,
      title: 'Car modification company',
      description: 'A site about the car modification company and the site explains its services and modifications available and how to communicate with them. The site is designed and developed using HTML, CSS, and JavaScript.',
      LinkPage: "none",
      LinkGithub: "https://github.com/ibrahimwael951/Car-Company",
      responsive: "yes",
      youTubeLink: "https://youtu.be/lKjGEWjFxvA",
      underdevelopment: "NO",

    },
    {
      src: project4,
      title: 'Shoes Shop',
      description: 'Designing a website for a shoe shop to display company details and allow users to log in and purchase. Designed using HTML, CSS, and JavaScript, and is still under development.',
      LinkPage: "none",
      LinkGithub: "https://github.com/ibrahimwael951/shoes-shop/",
      responsive: "NO",
      youTubeLink: "https://youtu.be/WZPxhautt9g",
      underdevelopment: "NO",

    },
    {
      src: project5,
      title: 'Storage Site',
      description: 'A site that allows users to enter, delete, and update products. It is responsive and includes a button to switch between dark mode and light mode, built using HTML, CSS, and JavaScript.',
      LinkPage: "https://ibrahimwael951.github.io/calc-js/",
      LinkGithub: "https://github.com/ibrahimwael951/calc-js",
      responsive: "yes",
      youTubeLink: "https://youtu.be/UmB1GldJ6pI",
      underdevelopment: "NO",

    },
    // {
    //   src: project6,
    //   title: 'Content Creator Portfolio',
    //   description: 'A site that displays the content creator portfolio, designed using HTML, CSS, and JavaScript, and is still under development.',
    //   LinkPage: "none",
    //   LinkGithub: "none",
    //   responsive: "No",
    //   youTubeLink: "none",
    //   underdevelopment: "yes",

    // }
  ];

  const handleImageClick = (image) => {
    setCurrentImage(image.src); 
    setscale( 1  );
    setheight(80)
    setwidth(80)
    setshowbg(1)
    setDetails({
      title: image.title,
      description: image.description,
      LinkGithub: image.LinkGithub,
      LinkPage: image.LinkPage,
      Responsive: image.responsive,
      youTubeLink: image.youTubeLink,
      underdevelopment: image.underdevelopment
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
      <h2 className='workstitle'>My projects</h2>
      <span className='worksdesc'>
       these are my project, i hope you like it 
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
                       



            {/* Under development state  */}
            {details.underdevelopment === "NO" ?  "" : <p style={{backgroundColor:"red"}}>Under Development</p>}


                        {/* Github Link */}
            {details.LinkGithub === "none" ? (
                <p style={{backgroundColor:"red"}}>no Link Github : Private</p>
              ) : (
                <a href={details.LinkGithub}>Link Github : Click Me</a>
              )}


                    {/* Page Link */}
                  {details.LinkPage === "none" ? (
                 ""
              ) : (
                <a href={details.LinkPage}>Link Page : Click Me</a>
              )} 

                          {/* youtube Links*/}   
              { details.youTubeLink === "none" ?
              (""):
                    (
                        <a href={details.youTubeLink}>youTube Link : Click Me</a>
                    )
              }
              
                    {/* Responsive Web */}
                 {details.Responsive === "yes" ? (                
                      <p style={{backgroundColor:"green"}}>Responsive : Yes</p>
                    ):
                      (
                       <p style={{backgroundColor:"red"}}>Not Responsive</p>
                      )
                }

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
