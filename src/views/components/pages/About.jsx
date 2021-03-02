import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import { AboutContent } from "../index";

const About = () => {
  const images = [
    "src/assets/img/appetizer1.jpg"
  ]


  return (
    <div className="about">

      <div className="about-top">
        <div className="about-top-bg"></div>
        <div className="about-top-text">
          <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={1500}>
            <p>This is who I am</p>
          </Grow>
          <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={2500}>
            <p>Scroll to learn more</p>
          </Grow>
        </div>
      </div>

      <AboutContent
        title={"Student"}
        // url={'src/assets/img/appetizer1.jpg'}
        // url={'../../../assets/img/appetizer1.jpg'}
        url={require('../../../assets/img/appetizer1.jpg')}
        // url={images[0]}
        bgColor={"red"}
        text={"Cornerstone International Commitny Collage of Canada"}
      />
      
      <AboutContent
        title={"Student"}
        // url={'src/assets/img/appetizer1.jpg'}
        // url={'../../../assets/img/appetizer1.jpg'}
        url={require('../../../assets/img/appetizer1.jpg')}
        // url={images[0]}
        bgColor={"red"}
        text={"Cornerstone International Commitny Collage of Canada"}
      />
    </div>
  );
};


export default About;
