import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grow from "@material-ui/core/Grow";
import { AboutContent, Hero } from "../index";

const About = () => {


  return (
    <div className="about">
      <Hero text={"This is who I am"} />

      <AboutContent
        title={"Student"}
        url={require('../../../assets/img/appetizer1.jpg')}
        // url={require('/assets/img/appetizer1.jpg')}
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
