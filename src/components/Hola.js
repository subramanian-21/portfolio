import {useState} from "react"

import scroll from '../images/1921075-200.png'
function Hola() {
    const [hover,setHover] = useState(false)
    const toggleHover =()=>{
setHover(!hover)
        
    }
    console.log(hover);
    return( <div className='body'>
    <div className='innerbody'>

        <div className="minnerbody">
        <div className='myname'>Subramanian M</div>
        <h3 className='edu'>Final Year Computer Science Engineering</h3>
        <h4 className='objective'>A Highly motivated and fully oriented Full-Stack Developer</h4>

        <div id="contact-me">Contact Me</div>
        </div>
       

     
        <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className='scroll' >
       <img id='scroll' className={hover ? 'downdown':''}  src={scroll} alt="none"/>
     <div className='projects'>Projects</div>
    </div>
    </div>
 
  </div>)
}
export default Hola