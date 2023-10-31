import background1 from '../images/hast.png'
import background3 from '../images/ic_skills.svg'

import icfr from '../images/icfr.jpg'
import icfr1 from "../images/icfr1.jpg"
import React from 'react'

const  About = (props)=>{
    return(<div  className="abody">
        <div className="mabout"> <h1 className="main-headings">ABOUT</h1>
        <div className="sabout text-gray-400">
            Iam a MERN stack developer . I am interested in Full Stack positions, here you have seen some of my projects, if you like what you see do not hesitate to contact me.

        </div>
        <a href='mailto: meenamani9444@gmail.com' id="contact-me">Start Collaboration</a>
        </div>
       
        <div className="tech-stack">
            <div className="all-tech-stack">
                <div className="top-stack">
                     <div className="top-left" style={{ backgroundImage: `url(${background1})` }}>
                        <div className='about-heading'>Languages</div>
                        <ul className='bold '>
                        <li>C</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        </ul>
                     </div>
                     <div className="top-right " style={{ backgroundImage: `url(${icfr})` }}>

                     <div className='about-heading '>Skills</div>
                     <ul className=' bold'>

                        <li>Git & Github</li>
                        <li>Render</li>
                        <li>Netlify</li>
                        <li>Heruko</li>
                        <li>Linux Terminal</li>
                        <li>Postman</li>
                    </ul>
                     </div>
                </div>
                <div className="bottom-stack">
                        
                    <div className="bottom-left" style={{ backgroundImage: `url(${icfr1})` }}>
                    <div className='about-heading'>Frameworks and libraries</div>
                    <ul className='bold'>
                    <li>Node.js</li>
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>Redux.js</li>
                        <li>Angular</li>
                        <li>Tailwindcss</li>
                        <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="bottom-right bg-red-500" style={{ backgroundImage: `url(${background3})` }}>
                    <div className='about-heading '>DataBase</div>
                    <ul className=' bold' >
                        <li>SQL</li>
                        <li>MongoDB</li>
                       
                      
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>

    </div>)
}
export default About