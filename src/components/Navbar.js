import React from 'react'
import "./Navbar.css"
import { Link } from "react-scroll";

const Navbar = () => {
  return (

      <div className='nav'>
      <div className='navmenu'>
     
        <ul>
        <li><Link to='home' spy={true} smooth={true} duration={500} offset={50}  >Home</Link></li>
       <li><Link to='about' spy={true} smooth={true} duration={500} offset={50}>About</Link></li>
       <li><Link to='skills' spy={true} smooth={true} duration={600} offset={50}>My Project</Link></li>
       <li><Link to='techstack' spy={true} smooth={true} duration={700} offset={50}>My Techstack</Link></li>
        </ul>
      
        <div class="btnnav" id="btn"><Link to='contact' spy={true} smooth={true} duration={800} offset={50} className='con'>Contact Me</Link></div>
      
       </div>
       {/* <button className='navbutton'>Contact Me</button> */}
       
      </div>
     
   
  )
}

export default Navbar