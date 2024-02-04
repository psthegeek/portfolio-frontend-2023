import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import colorSharp2 from "../../assets/Projects/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard'
import './projects.scss'
import {majors} from '../../minors' 
import minors from '../../minors'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

const Projects = (props) => {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  return (
    <div className="projects-container screen-container fade-in" id={props.id || ""}>
      <div className="projects-parent">
          <ScreenHeading
        title={"Projects"}
        subHeading={"My Creative Portfolio Section"}
      />
      <div className="project-box">
      <Container className=" project">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mt-5 m-6 mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Minor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Major</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Upcoming</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp"  className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          minors.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {
                              majors.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Work is in Progress.....</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      </div>
     
      {/* <img className="background-image-right" src={colorSharp2} alt=""></img> */}
          </div>

    </div>
    
    
  )
}

export default Projects