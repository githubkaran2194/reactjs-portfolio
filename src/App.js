
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Education from './pages/Education';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Footer } from './Components/Footer';
import SingleProject from './pages/SingleProject';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<About/>} /> 
          <Route path="/projects" element={<Projects/>}>
            <Route path='singleproject' element={<SingleProject/>}/>
            </Route>
          <Route path="/education" element={<Education/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
