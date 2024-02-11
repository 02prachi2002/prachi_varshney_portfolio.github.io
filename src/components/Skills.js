import React from 'react'
import data from '../data'
import './Skills.css';
import git from '../assets/github.png'
const Skills = () => {

  return (
    <div className='skillsection' id='skills'>
  
                <div className='skillheading'>My Projects</div>
                <div>
                  {
                    data.map((d)=>(
                      <div className='workmain'>
                          <div className='leftsec'>
                          <p className='workheading'>{d.name}</p>
                           <p className='workinfo'>{d.info}</p>
                           <div className='head'>TechStack Used :-</div>
                           <p className='worktech'>{d.techstack}</p>
                          <button><a href={d.link} className='linkwork'> View Project <img src={git} className='gitimg'/></a></button>
                          </div>
                         

                           <div><img src={d.image} className='imgproject'/></div>
                      </div>
                   
                     
                    ))
                  }
                </div>
           
    </div>
  )
}


export default Skills
