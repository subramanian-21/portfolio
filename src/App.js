import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hola from './components/Hola';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
    <Navbar/>
  
    <Hola/>

    <Projects/>

    <Footer/>


    </div>
  );
}

export default App;
