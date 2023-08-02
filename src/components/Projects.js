import chatthruport from '../images/chatthrupotrait.png'
import chatthru from '../images/chatthrublack.png'
import imagefetch from '../images/imagefinder.png'
import imagefetchport from '../images/imagefinderportrait.png'
import hangman from '../images/hangman.png'
import hangmanport from '../images/hangmanportrait.png'
import handcricket from '../images/handcricket.png'
import imagetoolkit from '../images/imagetoolkit.png'
import imagetoolkitport from '../images/imagetoolkitportrait.png'
import mathmagician from '../images/mathmagician.png'
import mathmagicianport from '../images/mathmagicianportrait.png'
import newspro from '../images/newspro.png'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'


const Projects = React.forwardRef((props,ref)=>{

      GitHubCalendar(".calendar", "thugperfect", { responsive: true })
return(
    <div ref={ref} className="p-body">
      <h1 className='main-headings'>PROJECTS</h1>
        <div className="projects-body">
            <div className="m3">
            <div className="m1">
                <div className="p1">
                    <div className="q1">
                        <div className="o1">
                            <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/hangman-game' className="n1"  > <img className='img' src={hangman} alt=""/>
                            <div className="hangman">
                                <div className='pro-main'> <div className='title'>Hangman Game</div>
                                <div className='sub'>Hangman game using vanilla Js</div>
                                <div className='stack'>Tech Stack :HTML,CSS,JS</div>
                                </div>
                               
                            </div>
                            </a>
                            <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/math-magicians' className="n2"><img className='img' src={mathmagician} alt=""/>
                            
                            <div className='mathmagician'>
                            <div className='pro-main'> <div className='title'>Math Magician</div>
                                <div className='sub'>It is just a riddle app with calculator which fetches questions from json</div>
                                <div className='stack'>Tech Stack :React ,Sass,JSON</div></div></div></a>
                        </div>
                        <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/ImageSearcher' className="o2"><img className='img' src={imagefetch} alt=""/>
                        
                        <div className='imagefetch'>
                        <div className='pro-main'> <div className='title'>Image Fetch</div>
                                <div className='sub'>A image finder application connected with Unsplash API</div>
                                <div className='stack'>Tech Stack :HTML,CSS,JS,Axios</div></div></div></a>
                    </div>
                    <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/ImageToolKit' className="q2"><img className='img' src={imagetoolkitport} alt=""/>
                    
                    <div className='imagetoolkit'><div className='pro-main'> <div className='title'>ImageToolKit</div>
                                <div className='sub'>ImageToolkit is a image altering application that does fetches the image and converts it into required at the backend using JIMP</div>
                                <div className='stack'>Tech Stack :React,Express,Jimp,Cors,...</div></div></div></a>
                </div>
                <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/newsPro' className="p2">
                    <img className='img' src={newspro} alt=""/>
                    <div className='newspro'><div className='pro-main'> <div className='title'>Newspro</div>
                                <div className='sub'>News Reader Application Connected with API</div>
                                <div className='stack'>Tech Stack :React,Axios,..</div>
                                </div></div>
                </a>
            </div>
            <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/chatThru' className="m2">
                <img className="img" src={chatthruport} alt="none"/>
                <div className='chatthru'><div className='pro-main'> <div className='title'>ChatThru</div>
                                <div className='sub '>A Social Media Application that provides users with CRUD operations..</div>
                                
                                <div className='stack'>Tech Stack : React,Express,Mongoose,MongoDB,..</div></div></div>
            </a>
            </div>
            </div>
            <a href='https://github.com/thugperfect?tab=repositories'>

            <button className='viewmore'>View More Projetcs...</button>
            </a>
            <script
  src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
</script>
            <div className='calendar'>
               calendar
            </div>
           
            
            </div>
    //https://github.com/thugperfect?tab=repositories
  
)
}) 
  

export default Projects