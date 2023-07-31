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
    footer.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
   <div className="header">

<div onClick={handleHelloClick} className='btns'>Me</div>
<div onClick={handleProjectClick} className='btns'>Projects</div>
<div onClick={handleAboutClick} className='btns'>About</div>

<div onClick={handleFooterClick} className="btns">Contact</div>
</div>
  
    <Hola ref={hello}/>

    <Projects ref={project}/>

    <About ref={about}/>

    <Footer ref={footer}/>


    </div>
  );
}

export default App;
