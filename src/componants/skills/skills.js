import React from 'react'
import './skills.css'
import htmllogo from '../../assets/html.png'
import reactlogo from '../../assets/react.png'
import tailwind from '../../assets/php.png'
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
                <img src="https://cdn-icons-png.flaticon.com/128/10435/10435040.png" alt='' className='skillbarimg'/>
              <span className='skillstext'>
                    <h2>Tailwind CSS</h2>
                        <p> i have experience on tailwind css and i can make a website with tailwind css </p>
              </span> 
      
        </div>

</div>

   </section>
  )
}

export default skills
