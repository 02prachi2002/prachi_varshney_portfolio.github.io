import React from 'react'
import cpp from '../techlogos/c++.png'
import css from '../techlogos/css.png'
import express from '../techlogos/Express.png'
import git from '../techlogos/git.png'
import github from '../techlogos/github.png'
import html from '../techlogos/html.png'
import java from '../techlogos/java.png'
import js from '../techlogos/js.png'
import mongo from '../techlogos/Mongodb.png'
import node from '../techlogos/nodejs.png'
import py from '../techlogos/python.png'
import react from '../techlogos/react.png'
import redux from '../techlogos/redux.png'
import tail from '../techlogos/tailwind.png'
import './Techstack.css'
const Techstack = () => {
  return (
    <div>
 <div className='teachstacksection' id='techstack'>
   <div className="heading">
                <div className='techheading'>My TechStack</div></div>
                <div className='logomain'>
                  <img src={cpp} className='logoimg'/>
                  <img src={css} className='logoimg'/>
                  <img src={express} className='logoimg'/>
                  <img src={git} className='logoimg'/>
                  <img src={github} className='logoimg'/>
                  <img src={html} className='logoimg'/>
                  <img src={java} className='logoimg'/>
                  <img src={js} className='logoimg'/>
                  <img src={mongo} className='logoimg'/>
                  <img src={node} className='logoimg'/>
                  <img src={py} className='logoimg'/>
                  <img src={react} className='logoimg'/>
                  <img src={redux} className='logoimg'/>
                  <img src={tail} className='logoimg'/>
                </div>
           
    </div>
    </div>
  )
}

export default Techstack