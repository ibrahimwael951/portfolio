import React from 'react'
import "./footer.css"


import linkedin from "../../assets/linkedin.png"
import instagram from '../../assets/instagram.png'
 
function Footer() {
  return (
    <footer className='footer'>
 
Copyright &#169; 2025. all right received



<div className='links'  >  


          <a href='https://www.linkedin.com/in/ibrahim-wael-204091310/'> 
                      <img src={linkedin} alt='img' className='link'/>
          </a>
           
          <a href='https://www.instagram.com/ibrahimwael409/'> 
            <img src={instagram} alt='img' className='link'/>
         </a>
    
</div>  
    </footer>
  )
}

export default Footer;
