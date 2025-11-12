import {useState,useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import mail from '../assets/img/mail.svg';
export const NavBar = () =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);
    useEffect (()=>{
        const onScroll = ()=>{
            if (window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
  /*this function will tell what will happen on scroll*/      
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return (
         <Navbar expand="lg"  className={scrolled?"scrolled":""}>
      <Container>
       <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" height="24" />
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">  {/*this is when navbar gets minimized if we are using mobile*/}
        <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav> {/*for social call outss etc.etc. on other side*/}
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#https://www.linkedin.com/in/anshika-mishra-ans/"><img src={linkedin} alt=""/> </a>
              <a href="#https://github.com/Anshika404err"><img src={github} alt=""/>  </a>
              <a href="#anshika99blends@gmail.com"><img src={mail} alt=""/>   </a>
              </div>
            <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
/*to manage  on which class we are at the moment let's create useState hook to hold that information*/