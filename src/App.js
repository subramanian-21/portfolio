import logo from './logo.svg';
import './App.css';

import Hola from './components/Hola';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import { useRef } from 'react';


function App() {

  
  const hello = useRef(null)
  const project = useRef(null)
  const about = useRef(null)
  const footer = useRef(null)

  const handleHelloClick = () => {
    hello.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleProjectClick = () => {
    project.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutClick = () => {
    about.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleFooterClick = () => {
    footer.current?.scrollIntoView({behavior:'smooth'})
  };
  const handleRef = (ref) =>{
    ref.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className="App">
   <div className="header bg-neutral-800 outline outline-1 outline-gray-600">

<div onClick={handleHelloClick} className='btns'>Me</div>
<div onClick={handleProjectClick} className='btns'>Projects</div>
<div onClick={handleAboutClick} className='btns'>About</div>

<div onClick={handleFooterClick} className="btns">Contact</div>


</div>

<div className='w-full'>

<div ref={hello}><Hola  handleChange={handleProjectClick}/></div>
<div  ref={project}><Projects /></div>
<div ref={about}><About /></div>
<div ref={footer}><Footer /></div>

</div> 
 

    </div>
  );
}

export default App;
