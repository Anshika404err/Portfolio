import { NavBar } from "./components/NavBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      
      <Projects />
      <Skills />
      <Footer />
      <Routes>
    
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
