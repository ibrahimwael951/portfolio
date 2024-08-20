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
    <img src={Logo} alt='sad' className='logo'/>

    <div className='desktopmenu' >
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='dexktopmenulistitem' >menu</Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500}  className='dexktopmenulistitem'>about</Link>
<Link  activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500}  className='dexktopmenulistitem'>portfolio</Link>
 
  </div>

<Link  className='desktopmenubtn' activeClass='active' to='client' spy={true} smooth={true} offset={-60} duration={500}   >
  <p> conect me</p>
  <span className='deskmenubtnbg'> </span>
  </Link>
 


{/* navbar */}

  <img src={navmenu} alt='menu' className='mobmenu' onClick={()=> setshowmenu(!showmenu) }/>



<div className='navmenu'style={{scale:showmenu?'1' : '0' , width:showmenu? '15rem' : '0',   height:showmenu? 'fit-content' : '0'}}>

<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem'  onClick={()=> setshowmenu(0)} >menu</Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500}  className='listitem' onClick={()=> setshowmenu(0)}>about</Link>
<Link  activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500}  className='listitem' onClick={()=> setshowmenu(0)}>portfolio</Link>
<Link  activeClass='active' to='client' spy={true} smooth={true} offset={-60} duration={500}   className='listitem' onClick={()=> setshowmenu(0)}>contact</Link>
 
</div>

</section>
  )
}

export default Navbar
