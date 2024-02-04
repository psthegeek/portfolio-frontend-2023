import { Col } from "react-bootstrap";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import './projects.scss'

const ProjectCard = ({ title, description, imgUrl,gitUrl, deployUrl }) => {



  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={deployUrl} target="_blank" rel="noreferrer">
              <AiFillEye className="project-icon" />
          </a> 
          <a href={gitUrl} target="_blank" rel="noreferrer">
             <AiFillGithub className="project-icon" />
          </a> 
          
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard