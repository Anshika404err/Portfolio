// Projects.jsx
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dailyjournal from "../assets/img/dailyjournal.png";
import keepclone from "../assets/img/keepclone.png";
import flappybird from "../assets/img/flappybird.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
     {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: dailyjournal,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: keepclone,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: flappybird,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are a few of my recent works.</p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center">
               
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <p>More projects coming soon!</p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <p>Stay tuned for updates.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
