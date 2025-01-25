

import React from 'react'
import './main.css'
import ibrahim from '../../assets/ibrahim.png'
 import CV from '../../assets/CV.pdf'


function Main() {


  return (
   <section className='intro'>

    {/*  right side */}

 <div className='introcontent'>

 <span className='bgintrocontent'>
<span className='hello'> hello ,</span>
<span className='introtext'>im <span className='introname' >ibrahim</span> 
<br/> website designer</span>
<p className='intropar'> I am Ibrahim Wael, a high school student, 17 years old.<br/> I have skills in website design using HTML ,  CSS , JavaScript and react </p>
</span>
 
{/* <a href={CV} className='A_btn' download="My_CV.pdf"   ><button className='btn'> Download My CV</button></a> */}
 </div>

{/* left side */}

<span className='bgspan'></span> 
 <img className='bg' src={ibrahim}   alt=' '/>
   </section>
  )
}

export default Main
