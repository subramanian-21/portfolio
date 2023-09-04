import React, {useState} from "react"

import scroll from '../images/1921075-200.png'
const Hola = React.forwardRef((props,ref)=>{
  const [hover,setHover] = useState(false)
  const toggleHover =()=>{
setHover(!hover)
      
  }
  console.log(hover);
  return( <div ref={ref} className='body'>
  <div className='innerbody color-change bg-black outline outline-1 outline-gray-600'>
  <div className="w-4/5 mt-4  text-xl text-white mr-5 flex justify-end ">
    <div className="bg-[#282c34] pt-2 pb-2 pl-5 pr-5 hover:bg-slate-100 hover:text-black rounded-full">bored?</div></div>
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