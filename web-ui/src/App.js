import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/About'
import CV from './components/CV'
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ="/Home" element={<Home/>}/>
        <Route path ="/About me" element={<About/>}/>
        <Route path ="/Projects" element={<Projects/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/CV" element={<CV/>}/>
        <Route path ="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
