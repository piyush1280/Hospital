
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Contact from './components/Contect';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Doctors/>
      <Services/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App;
