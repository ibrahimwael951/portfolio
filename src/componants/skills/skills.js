import React from 'react'
import './skills.css'
import htmllogo from '../../assets/html.png'
import reactlogo from '../../assets/react.png'
import phplogo from '../../assets/php.png'
function skills() {
  return (

   <section id='skills'>
 <span className='skillstitle'>what i do</span> <br/>
<span className='skillsdesc'>  In fact, I work hard to satisfy the client and make him satisfied with the result, and I hope that you like it too.<br/> thats my skills ... </span>

<div className='skillsbar'> 

            
        <div className='bar'>
               <img src={htmllogo} alt='' className='skillbarimg'/>
            
            <span className='skillstext'>
            <h2>web design</h2>
            
                <p>  I have the experience to design responsive websites and simple and beautiful designs in html, css, javascript </p>
   
   <span className='timeexperienss'> <p className='textte'>2 years </p> </span>
      </span> 
      
       </div>

                  


        <div className='bar'>
               <img src={reactlogo} alt='' className='skillbarimg'/>
               <span className='skillstext'>
            <h2>website app </h2>
                <p>   I have experience designing a website application by React and node.js </p>
      </span> 
       </div>




              
        <div className='bar'>
               <img src={phplogo} alt='' className='skillbarimg'/>
               <span className='skillstext'>
            <h2>back-end (under training )</h2>
                <p>  I'm still under training to become full stack development to make the site safer.</p>
      </span> 
      
        </div>

</div>

   </section>
  )
}

export default skills
