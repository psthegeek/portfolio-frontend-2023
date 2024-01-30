import React from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./projects.css"

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="screen-container fade-in projects-container" id={props.id || ""}>
        <div className="projects-parent">
             <h1>hello world</h1>

        </div>

        
    
    </div>
  )
}

