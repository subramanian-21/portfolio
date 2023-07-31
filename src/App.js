import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hola from './components/Hola';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';


function App() {
  return (
    <div className="App">
    <Navbar/>
  
    <Hola/>

    <Projects/>
    
    <About/>

    <Footer/>


    </div>
  );
}

export default App;
