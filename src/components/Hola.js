import React, {useState} from "react"

import scroll from '../images/1921075-200.png'
const Hola = React.forwardRef((props,ref)=>{
  const [hover,setHover] = useState(false)
  const toggleHover =()=>{
setHover(!hover)
      
  }
  console.log(hover);
  return( <div ref={ref} className='body'>
  <div className='innerbody color-change bg-slate-700 outline outline-1 outline-gray-600'>

      <div className="minnerbody">
      <div className='myname  text-white px-3'>Subramanian M</div>
      <h3 className='edu px-3 text-gray-400'>Final Year Computer Science Engineering</h3>
      <h4 className='objective  text-gray-400 px-3'>A Highly motivated and fully oriented Full-Stack Developer</h4>

      <a href="mailto: meenamani9444@gmail.com" className="ml-3 mt-5" id="contact-me">Start Collaboration</a>
      </div>
     

   
      <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className='scroll' >
     <img id='scroll' className={hover ? 'downdown':''}  src={scroll} alt="none"/>
   <div className='projects text-gray-300'>Projects</div>
  </div>
  </div>

</div>)

}) 
   

export default Hola