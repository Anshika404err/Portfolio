import { NavBar } from "./components/NavBar";

import './App.css';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/Footer';

function App() {
  return (
    <>
  <NavBar />
  <main>
    <Banner />
    <Skills />
    <Projects />
  </main>
  <Footer />
</>

  );
}

export default App;
