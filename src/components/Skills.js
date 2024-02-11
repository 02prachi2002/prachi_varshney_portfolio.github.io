import React from 'react'
import './Skills.css';
import git from '../assets/github.png'
import image1 from '../assets/Screenshot 2024-02-01 222356.png'
import image2 from '../assets/Screenshot 2024-02-01 221336.png'
import image3 from '../assets/Screenshot 2024-02-01 221741.png'
import image4 from '../assets/code_python.jpg'
const Skills = () => {

  return (
    <div className='skillsection' id='skills'>
  
                <div className='skillheading'>My Projects</div>
                <div>
                  
                    
                      <div className='workmain'>
                          <div className='leftsec'>
                          <p className='workheading'>Crime Hotspot Mapping</p>
                           <p className='workinfo'>This project addresses the limitations of current property listing apps by proposing a comprehensive method to assess and provide customers with detailed information on crime, safety, and other crucial factors around a property. The goal is to enhance homebuyers' decision-making and suggest safer and more suitable living options in a digitally transformed real estate industry.</p>
                           <div className='head'>TechStack Used :-</div>
                           <p className='worktech'>Python, HTML, CSS3, JavaScript, Machine Learning Algorithms</p>
                          <button><a href="https://github.com/02prachi2002/daa_project_crime_mapping" className='linkwork'> View Project <img src={git} className='gitimg'/></a></button>
                          </div>
                         

                           <div><img src={image1} className='imgproject'/></div>
                      </div>
                      <div className='workmain'>
                          <div className='leftsec'>
                          <p className='workheading'>JYC Website</p>
                           <p className='workinfo'>This is the website for the governing body of all the events that take place in Jaypee University of Information and Technology </p>
                           <div className='head'>TechStack Used :-</div>
                           <p className='worktech'>ReactJs, HTML, CSS, JavaScript, Nodejs, ExpressJs, MongoDb</p>
                          <button><a href="https://jyc.co.in/" className='linkwork'> View Project <img src={git} className='gitimg'/></a></button>
                          </div>
                         

                           <div><img src={image2} className='imgproject'/></div>
                      </div>
                   
                      <div className='workmain'>
                          <div className='leftsec'>
                          <p className='workheading'>Razorpay Clone</p>
                           <p className='workinfo'>This is the clone of the Razorpay Website</p>
                           <div className='head'>TechStack Used :-</div>
                           <p className='worktech'>HTML, CSS3, JavaScript, Tailwind</p>
                          <button><a href="https://github.com/02prachi2002/Razorpay_clone" className='linkwork'> View Project <img src={git} className='gitimg'/></a></button>
                          </div>
                         

                           <div><img src={image3} className='imgproject'/></div>
                      </div>
                    
                      <div className='workmain'>
                          <div className='leftsec'>
                          <p className='workheading'>Other Minor Projects</p>
                           <p className='workinfo'>It contains all the projects that I have created for the learning purposes.</p>
                           <div className='head'>TechStack Used :-</div>
                           <p className='worktech'>Python, HTML, CSS3, JavaScript,Tailwind, Nodejs, ExpressJs, MongoDb, ReactJs, C++, C , CSS , Redux</p>
                          <button><a href="https://github.com/02prachi2002?tab=repositories" className='linkwork'> View Project <img src={git} className='gitimg'/></a></button>
                          </div>
                         

                           <div><img src={image4} className='imgproject'/></div>
                      </div>
                  
                </div>
           
    </div>
  )
}


export default Skills
