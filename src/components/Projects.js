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


function Projects(params) {
  

    return(
        <div className="p-body">
          <h1>PROJECTS</h1>
            <div className="projects-body">
                <div className="m3">
                <div className="m1">
                    <div className="p1">
                        <div className="q1">
                            <div className="o1">
                                <div className="n1"  > <img className='img' src={hangman} alt=""/>
                                <div className="hangman">
                                    <div className='pro-main'> <div className='title'>Hangman Game</div>
                                    <div className='sub'>Hangman game using vanilla Js</div>
                                    <div className='stack'>Tech Stack :HTML,CSS,JS</div>
                                    </div>
                                   
                                </div>
                                </div>
                                <div className="n2"><img className='img' src={mathmagician} alt=""/>
                                
                                <div className='mathmagician'>
                                <div className='pro-main'> <div className='title'>Math Magician</div>
                                    <div className='sub'>It is just a riddle app with calculator which fetches questions from json</div>
                                    <div className='stack'>Tech Stack :React ,Sass,JSON</div></div></div></div>
                            </div>
                            <div className="o2"><img className='img' src={imagefetch} alt=""/>
                            
                            <div className='imagefetch'>
                            <div className='pro-main'> <div className='title'>Image Fetch</div>
                                    <div className='sub'>A image finder application connected with Unsplash API</div>
                                    <div className='stack'>Tech Stack :HTML,CSS,JS,Axios</div></div></div></div>
                        </div>
                        <div className="q2"><img className='img' src={imagetoolkitport} alt=""/>
                        
                        <div className='imagetoolkit'><div className='pro-main'> <div className='title'>ImageToolKit</div>
                                    <div className='sub'>ImageToolkit is a image altering application that does fetches the image and converts it into required at the backend using JIMP</div>
                                    <div className='stack'>Tech Stack :React,Express,Jimp,Cors,...</div></div></div></div>
                    </div>
                    <div className="p2">
                        <img className='img' src={newspro} alt=""/>
                        <div className='newspro'><div className='pro-main'> <div className='title'>Newspro</div>
                                    <div className='sub'>News Reader Application Connected with API</div>
                                    <div className='stack'>Tech Stack :React,Axios,..</div>
                                    </div></div>
                    </div>
                </div>
                <div className="m2">
                    <img className="img" src={chatthruport} alt="none"/>
                    <div className='chatthru'><div className='pro-main'> <div className='title'>ChatThru</div>
                                    <div className='sub '>A Social Media Application that provides users with CRUD operations..</div>
                                    
                                    <div className='stack'>Tech Stack : React,Express,Mongoose,MongoDB,..</div></div></div>
                </div>
                </div>
                </div>
                </div>
        
      
    )
}
export default Projects