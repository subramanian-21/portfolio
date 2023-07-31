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
                                <div className="hangman"></div>
                                </div>
                                <div className="n2"><img className='img' src={handcricket} alt=""/>
                                
                                <div className='handcricket'></div></div>
                            </div>
                            <div className="o2"><img className='img' src={imagefetch} alt=""/>
                            
                            <div className='imagefetch'></div></div>
                        </div>
                        <div className="q2"><img className='img' src={imagetoolkitport} alt=""/>
                        
                        <div className='imagetoolkit'></div></div>
                    </div>
                    <div className="p2">
                        <img className='img' src={chatthru} alt=""/>
                        <div className='chatthru'></div>
                    </div>
                </div>
                <div className="m2">
                    <img className="img" src={mathmagicianport} alt="none"/>
                    <div className='mathmagician'></div>
                </div>
                </div>
                </div>
                </div>
        
      
    )
}
export default Projects