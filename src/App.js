 
import React from 'react'
 

import Navbar from "./componants/navbar/navbar";
import Intro from "./componants/main/main";
import Skills from "./componants/skills/skills";
import Works from "./componants/works/works";
import Contact from "./componants/contact/contact";
import Footer from "./componants/footer/footer";
function App() {
  return (
    <main className="App">
  
<Navbar/>
 <Intro/> 
<Skills/>
<Works/>
<Contact/>
<Footer/>

    </main>
  );
}

export default App;
