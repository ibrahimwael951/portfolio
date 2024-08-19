

import React from 'react'
import './intro.css'
import ibrahim from '../../assets/ibrahim.png'
import {Link} from 'react-scroll'
import btnimg from '../../assets/linkedin.png'

function Intro() {


  return (
   <section className='intro'>

    {/*  right side */}

 <div className='introcontent'>

 <span className='bgintrocontent'>
<span className='hello'> hello ,</span>
<span className='introtext'>im <span className='introname' >ibrahim</span> 
<br/> website designer</span>
<p className='intropar'> I am Ibrahim Wael, a high school student, 17 years old.<br/> I have skills in website design using HTML ,  CSS and JavaScript</p>
</span>

<Link><button className='btn'><img className='btnimg' src={btnimg}width={20} alt=''/> hire me</button></Link>
 </div>

{/* left side */}

<span className='bgspan'></span> 
 <img className='bg' src={ibrahim}   alt=' '/>
   </section>
  )
}

export default Intro
