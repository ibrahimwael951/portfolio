import React, { useRef, useState , onChange } from 'react';
import "./contact.css"


//emailjs

import emailjs from '@emailjs/browser';
//images
import linkedin from "../../assets/linkedin.png"
import mostaqel from "../../assets/mostacel.png"
import freelancer from "../../assets/freelancer.png"
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
 
function Contact() {

//del when sudmit
const [text, settext] = useState('');
const [email, setemail] = useState('');
const [msg, setmsg] = useState('');

 


//sendstatue part

const [SUCCESS, setSUCCESS] = useState(0)
const [ERROR, setERROR] = useState(0)


  // emailjs part
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hjyztc9', 'template_vozr06l', form.current, {
        publicKey: 'JzILicQ9jfkl87C6U',
      })
      .then(
        () => {
        setSUCCESS(1);
        settext('');
        setemail('');
        setmsg('');
        },
        (error) => {
       setERROR(1);
       settext('');
       setemail('');
       setmsg('');
        },
      );
  };
  


 




  return (
    <section id='contactpage'>
        <div id='client'>

            <h1 className='contactpagetitle'>my client</h1 >
            <p className='clientdesc'>
             u can connect with me at this website </p> 

        <div className='clientimgs'>
 
 <a href='https://www.freelancer.com/u/Ibrahimwael95'target='_blank'><img style={{background: 'white'}} src={freelancer} alt='img' className='clintimg'/></a>
          
          
          
            <a href='https://mostaql.com/u/Ibr0lol' target='_blank'> <img src={mostaqel} alt='img' className='clintimg'/></a>
        
        </div>

          </div>


      <div id='contact'>
<h1 className='contactpagetitle'>contact me</h1>
<span className='contactdesc'> ples fill to contact by email</span>

{/* form */}
<form className='contactform' ref={form} onSubmit={sendEmail} >
    <input type='text' value={text}  onChange={(e) => settext(e.target.value)} className='name'  name="user_name" placeholder=' your Name' required/>
    <input type='email' value={email}  onChange={(e) => setemail(e.target.value)}  className='email' name="user_email" placeholder=' your Email' checked required/>
    <textarea className='msg' value={msg}  onChange={(e) => setmsg(e.target.value)} name="message" rows="5" placeholder='type your message' required ></textarea>
    <button type='submit' value='send' className='submitbtn'  >submit</button>

    {/* sendstatue */}
    
    <h2 className='sendstatue SUCCESS' style={{transform: `scale(${SUCCESS})`}} > sent </h2>
    <h2 className='sendstatue ERROR' style={{transform: `scale(${ERROR})`}} >try again </h2>


{/* links */}
{/* <div className='links'  >  
            <img src={linkedin} alt='img' className='link'/>
            <img src={youtube} alt='img' className='link'/>
            <img src={instagram} alt='img' className='link'/>
            <img src={facebook} alt='img' className='link'/>
    
</div> */}

</form>

      </div>
    </section>
  )
}

export default Contact
