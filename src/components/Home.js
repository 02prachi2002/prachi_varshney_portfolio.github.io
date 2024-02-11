import React from 'react'
import homeintro from '../assets/home_intro_image.png'
import resume from '../../src/PRACHI VARSHNEY.pdf'
import './Home.css'
const Home = () => {
  return (
    <div className='home' id='home'>
     
      <div className='mainhome'>
        <img src={homeintro} className='mainhomeimg'/>
        <div className='rightside'>
        <p className='homepara'><span className='spanbig'>H</span>i , <span className='spanbig' >I</span><span className='spanyellow'>'</span>m 
        <br></br>
       <span className='name'><span className='spanbig'>P</span>rachi <span className='spanbig'>V</span>arshney</span>  a<br></br>
       Full<span className='spanyellow'>-</span>Stack Web Developer</p>
      
     <div class="btn-pink" id="btn"><a href={resume} className='hire'>Hire Me</a></div>
        </div>
        
      </div>
    
    </div>
  )
}

export default Home