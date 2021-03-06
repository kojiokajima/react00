import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grow from "@material-ui/core/Grow";
import { AboutContent, Hero } from "../index";

const About = () => {

  const imageUrl = require('../../../assets/img/hero_about.png').default

  return (
    <div className="about">
      <Hero text={"This is who I am"} bottom={"All about me is as below"} image={imageUrl} />

      <AboutContent
        name={"learn more"}
        title={"Student"}
        link={'https://ciccc.ca/'}
        url={require('../../../assets/img/about_student.png')}
        // bgColor={"#415ed1"}
        bgColor={"#74d2e4"}
        text={"Strong passion to learn something new always make"}
        isContact={false}
        />

      <AboutContent
        name={"Hit me up"}
        link={'/contact'}
        title={"Web Developer"}
        url={require('../../../assets/img/appetizer1.jpg')}
        bgColor={"#ad875e"}
        text={"yo yo ooo yoyo oy oyo yo yyo upp pp p p ppp pp p ppppp"}
        isContact={false}
        />

      <AboutContent
        name={"See what i created"}
        link={'/work'}
        title={"Painter"}
        url={require('../../../assets/img/about_painter.png')}
        bgColor={"#41d187"}
        text={"yo yo ooo yoyo oy oyo yo yyo upp pp p pppp pp p pp"}
        isContact={false}
        />

      <AboutContent
        name={"learn more"}
        link={'/construction'}
        title={"Traveler"}
        url={require('../../../assets/img/about_traveler.jpg')}
        bgColor={"#d1be41"}
        text={"yo yo ooo yoyo oy oyo yo yyo upp pp p p ppp pp p pp"}
        isContact={false}
      />
    </div>
  );
};


export default About;
