import React, { useState } from 'react';
import './navbar.css'
import Logo from '../../assets/profile-user.png'
import navmenu from '../../assets/menu.png'
import contantimg from '../../assets/linkedin.png'
import {Link} from 'react-scroll'

const Navbar = () => {

const [showmenu ,setshowmenu] = useState(0)
 
 
  return (
<section className='navbar'>
  <Link  to='intro' spy={true} smooth={true} offset={-100} duration={500} > 
       <img src={Logo} alt='sad' className='logo'/>
  </Link>
  
    <div className='desktopmenu' >
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='dexktopmenulistitem' >Main</Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500}  className='dexktopmenulistitem'>About</Link>
<Link  activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500}  className='dexktopmenulistitem'>Projects</Link>
 
  </div>

<Link  className='desktopmenubtn' activeClass='active' to='client' spy={true} smooth={true} offset={-60} duration={500}   >
  <p> Contact</p>
  <span className='deskmenubtnbg'> </span>
  </Link>
 


{/* navbar */}

  <img src={navmenu} alt='menu' className='mobmenu' onClick={()=> setshowmenu(!showmenu) }/>



<div className='navmenu'style={{scale:showmenu?'1' : '0' , width:showmenu? '15rem' : '0',   height:showmenu? 'fit-content' : '0'}}>

<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem'  onClick={()=> setshowmenu(0)} >Main</Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500}  className='listitem' onClick={()=> setshowmenu(0)}>About</Link>
<Link  activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500}  className='listitem' onClick={()=> setshowmenu(0)}>Projects</Link>
<Link  activeClass='active' to='client' spy={true} smooth={true} offset={-60} duration={500}   className='listitem' onClick={()=> setshowmenu(0)}>Contact</Link>
 
</div>

</section>
  )
}

export default Navbar
