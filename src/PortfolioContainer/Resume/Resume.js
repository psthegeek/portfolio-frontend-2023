import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
            {/* <span>{props.description? props.description : ""}</span>
             */}
             
             <span>
              {
                props.description ? props.description.map((data, id) => (
                  <div key={data.id}>
                       {
                        data.projectData?.map((item,index) => (
                          <ul>
                            <li>- {item}</li>
                          </ul>
                        ))
                       }
                  </div>
            
                )) : ""
              }             
            </span>
             
        </div>
        <br />
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db/SQL", ratingPercentage: 70 },
    { skill: "HTML/CSS", ratingPercentage: 80 },
    { skill: "GraphQL", ratingPercentage: 50 },
    { skill: "Problem Solver", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Core Java", ratingPercentage: 60 },
    { skill: "C/C++", ratingPercentage: 60 },
    { skill: "Linux", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      id:1,
      title: "Propplayers-V2",
      duration: { fromDate: "Feb 2023", toDate: "Dec 2023" },
      description: [
        {
          projectId: 1,
          projectData: [
            "A medium to connect buyers and sellers according to their needs to find a great deal in the real estate market.",
            "Used React JS for templating for faster compilation and developing reusable components, Redux for state management , and writing APIs in Nodejs serving data for frontend, tailwind CSS for designing and responsiveness and Trello for Task Management",
            "To fetch specific details for properties used GraphQL queries and Apollo Client GraphQL library",
            "Worked on authentication , authorization with refresh tokens and route protection(both server and client) using JWT",
            "Integration front-end development with back-end system, Called the RESTful web services calls for POST,PUT,GET,DELETE Methods",
            "Created user dashboard for both buyers and sellers with ads update, delete and load more feature, implemented the Drag and Drop functionality using React-Draggable,and used flickity is for creating carousel-images",
            "Added advance search with multiple filters including geolocation, multiple image upload with AWS S3",
            "Worked on sellers’ public profile to fetch all real estate agent with public profile.",
            "User registration and login with Email Configuration using AWS SES (server)",
            "worked with backend engineers to optimize existing API calls to create efficiencies by deprecating unneeded API calls"
          ]
        }
        
      ],
      subHeading: "Skills: ReactJs| Nodejs| Redux | MERN |JEST | Tailwind | GraphQL | AWS S3,IAM,SES |RESTful API",
    },
    {
      id:2,
      title: "Mrkt365",
      duration: { fromDate: "Aug 2022", toDate: "Feb 2023" },
      description: [
          {
            projectId:2,
            projectData: [
              "Worked on the company's main product and optimized code.",
      "A marketplace to connect freelancers and interns, Businesses with Businesses.",
      "Developed various screens for front end part of many components using various predefined modules from npm and build scalable and reusable components using ReactJS and redux for state management, typescript for type safety and tailwind for styling.",
      "Handled cross browser/platform compatibility issues(IE, Firefox) on both windows."
            ],
          }

      ],   
      subHeading:
        "Skills: ReactJS |Redux | NextJS| Tailwind| JEST",
    },
    {
      id:3,
      title: "Video Streaming Platform",
      duration: { fromDate: "Jan 2021", toDate: "Jul 2022" },
      description: [{
        projectId:3,
        projectData:[
          "A video streaming platform for a teacher having a bunch of students connected with him online.",
            "Handled, debugged, and maintained frontend of this project using ReactJS, NextJs and Tailwind CSS. for more than a year with a senior backend developer",
"One of the standout features of this app is the search function, which not only provides suggestions as you type, but also includes debouncing to reduce the number of API calls made, resulting in improved performance and live chat feature that utilizes API polling to ensure efficient performance.",
"The app is smart enough to remove older comments from the chat to avoid app freezing when a lot of chat has taken place. Users can add comments to the chat in real-time.",
"To fetch videos, I used the APIs provided by the backend developer, and for video playback, I incorporated iframes. The app also supports n-level nested comments."
        ],
      }],
      subHeading:
        "Skills: ReactJS |NextJS| Tailwind",
    },
    {
      id:4,
      title: "CoreFitPlus",
      duration: { fromDate: "Oct 2021", toDate: "Dec 2023" },
      description:
      [{
        projectId:4,
        projectData:[
          "A gym website initially created using wordpress then later on developed again using ReactJs.",
  "Developed and maintained this website individually. Improved performance over the time."],
      }],
      
      subHeading:
        "Skills : HTML | CSS| JS| ReactJS",
    },
    {
      id:5,
      title: "Sg-lifestyle",
      duration: { fromDate: "2020", toDate: "2021" },
      description:[
        {
          projectId:5,
          projectData: [
            "Developed and maintained a WordPress ecommerce website using WooCommerce,",
            "Implemented product catalog management, including product descriptions, images, and pricing, Configured payment gateways and shipping methods,",
            "Design a streamlined order processing workflow that guides customers through the checkout process seamlessly,",
            "Integrate secure payment gateways to accept online payments from various credit cards and digital wallets,",
            "Provide order tracking and status updates to keep customers informed about their purchases,",
            "Provided ongoing website maintenance and support."],
    
        }
        
      ],
            subHeading:
        "Skills : HTML5 |CSS | JS | Wordpress | AJAX | PHP",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Indira Gandhi National Open University , Dehradun"}
        subHeading={"Master's in History"}
        fromDate={"2019"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Phonics Group of Institutions(UTU), Roorkee"}
        subHeading={"B.tech in Computer Science and Engineering"}
        fromDate={"2014"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Senior Secondary "}
        subHeading={"SVM Mayapur, Haridwar"}
        fromDate={"2013"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"PropPlayers Infrastructure Pvt. Ltd."}
          subHeading={"Software Engineer (Full Time)"}
          fromDate={"Feb 2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          - Worked on a full stack application where I was responsible for both Frontend and Backend following the Agile model.
          </span>
          <br />
          <span className="resume-description-text">
          - Contributed to the continual improvement of the design and development process, maintaining strong aspects while
researching and providing recommendations for areas of improvement.
          </span>
          <br />
          <span className="resume-description-text">
          - Identified web-based user interactions and developed highly-responsive user interface components via React concepts
          </span>
          <br />
        </div>
        <hr />
        <br />
        <ResumeHeading
          heading={"Highbreed Development India Pvt. Ltd."}
          subHeading={"Front End Developer(Intern)"}
          fromDate={"Aug 2022"}
          toDate={"Feb 2023"}
        />
           <span className="resume-description-text">
          - Worked as part of the core platform team
          </span>
           <span className="resume-description-text">
          - Collaborated with senior team members to upgrade the website and worked on an Agile (Scrum) Development Team to deliver regular updates to business team and
project managers and provided end-to-end solutions for clients.
          </span>
           <span className="resume-description-text">
          - Used Jira for Task Management
          </span>
          <hr/>
          <br />
         <ResumeHeading
          heading={"Freelancer"}
          subHeading={"Web Developer"}
          fromDate={"Jan 2021"}
          toDate={"July 2022"}
        />
          <div className="experience-description">
          <span className="resume-description-text">
            - Designed, developed and maintained 15+ static websites for multiple clients.
          </span>
          <br />
          <span className="resume-description-text">
            -Worked on <b>3 major</b> projects individually as well as with a team.
          </span>
          <br />
          <span className="resume-description-text">
            - Preparing for IB & UPSC.
          </span>     
        </div>
         <hr/>
         <br />
         <ResumeHeading
          heading={"Freelancer"}
          subHeading={"Content Writer/ Moderator"}
          fromDate={"Oct 2018"}
          toDate={"July 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Created and edited high-quality content for a variety of audiences, including blog posts, articles, social media posts, and website copy .
          </span>
          <br />
          <span className="resume-description-text">
            - Developed and implemented content strategies to increase website traffic and engagement
Optimized content for search engines (SEO){" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Researched and wrote about a wide range of topics, including technology, business, and current events
          </span>   
          <br/>  
          <span className="resume-description-text">
            - Monitored and moderated user-generated content on social media, forums, and other online platforms
          </span>   
          <br/>  
          <span className="resume-description-text">
            - Enforced community guidelines and removed inappropriate content
          </span>   
          <br/>  
          <span className="resume-description-text">
            - Escalated potential safety or security risks to appropriate teams
          </span> 
          <br/>    
          <span className="resume-description-text">
            - Developed a content calendar to ensure consistent publishing and maintained a high editorial standard resulting in increased reader engagement and retention
          </span> 
          <br/>    
          <span className="resume-description-text">
            - Utilized analytics tools to track content performance, identify trends, and make data-driven decisions to enhance content strategy and user experience
          </span>     
        </div>
      </div>
    </div>,
    

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <div className="experience-container">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Software Development"
      />
      <ResumeHeading
        heading="Problem Solving"
      />
      <ResumeHeading
        heading="Reading"
      />
      <ResumeHeading
        heading="Writing"
      />
      <ResumeHeading
        heading="Music"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
