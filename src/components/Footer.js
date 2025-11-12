import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import mail from '../assets/img/mail.svg';
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
               <a
        href="https://www.linkedin.com/in/anshika-mishra-ans/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/Anshika404err"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
      <a
        href="mailto:anshika99blends@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mail} alt="Email" />
      </a>
            </div>
    
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
