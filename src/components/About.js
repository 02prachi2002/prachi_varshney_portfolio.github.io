
import './About.css'
import me from '../assets/mepic.png'
const About = () => {
  return (
    <div className='abtpage' id='about' >
       
      <div className='abtsection'>
     <div className='leftsection'>
     <div className='heading'>About Me</div>
    
      <p className='parasection'>
        
        Hello! <br></br><br></br>
 I'm Prachi Varshney , a seasoned software and web developer. 
 Proficient in HTML , CSS JavaScript , ReactJs Mern Stack ,
  Python , Machine Learning , I specialize in crafting
   innovative solutions and user-friendly websites.
    My journey includes diverse projects, showcasing my 
    expertise in problem-solving and collaboration with cross-functional 
    teams. Fueled by a passion for technology, I stay ahead of industry 
    trends through continuous learning. I'm not just a developer; 
    I'm a dedicated professional ready to bring fresh ideas to your projects. 
    Let's connect and explore how my skills can contribute to elevating your software 
    architecture or creating compelling web experiences.</p>
    <br></br>
   
     </div>
     
    <img src={me} className='myimg'/>
      </div>
     
    </div>
  )
}

export default About