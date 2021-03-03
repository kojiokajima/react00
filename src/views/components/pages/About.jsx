import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import { AboutContent, Hero } from "../index";

const About = () => {
  const images = [
    "src/assets/img/appetizer1.jpg"
  ]


  return (
    <div className="about">

      {/* <div className="about-top">
        <div className="about-top-bg"></div>
        <div className="about-top-text">
          <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={1500}>
            <p>This is who I am</p>
          </Grow>
          <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={2500}>
            <p>Scroll to learn more</p>
          </Grow>
        </div>
      </div> */}
      <Hero
        text={"This is who I am"}
      />

      <AboutContent
        title={"Student"}
        url={require('../../../assets/img/appetizer1.jpg')}
        bgColor={"#ad875e"}
        text={"Cornerstone International Commitny Collage of Canada"}
      />

      <AboutContent
        title={"Student"}
        url={require('../../../assets/img/appetizer1.jpg')}
        bgColor={"#ad875e"}
        text={"yo yo ooo yoyo oy oyo yo yyo upp pp p p ppp pp p pp"}
      />
    </div>
  );
};


export default About;
