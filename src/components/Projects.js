// Projects.jsx
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dailyjournal from "../assets/img/dailyjournal.png";
import keepclone from "../assets/img/keepclone.png";
import flappybird from "../assets/img/flappybird.png";
import expense from "../assets/img/expense.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {
  const projects = [
     {
      title: "Daily Journal",
      description: "Design & Development",
      imgUrl: dailyjournal,
      link:"https://github.com/Anshika404err/Daily-Journal",
    },
    {
      title: "Google Keep Clone",
      description: "For mainting your daily taks",
      imgUrl: keepclone,
      link:"https://google-keep-clone-ruby.vercel.app/",
    },
    {
      title: "Bird Game",
      description: "A very basic birdy game ",
      imgUrl: flappybird,
      link:"https://github.com/Anshika404err/FLAPPY-YASSO",
    },
    {
      title:"Paisa_Vasooli",
      description:"A expense tracker web app that will maintain the individual savings and group splitting fro money as well",
      imgUrl:expense,
      
    }
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
