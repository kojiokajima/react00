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
        text={"Strong passion to learn something new always make me excited. I'll keep learning and putting what I've learned into practice."}
        isContact={false}
        />

      <AboutContent
        name={"Hit me up"}
        link={'/contact'}
        title={"Web Developer"}
        url={require('../../../assets/img/appetizer1.jpg')}
        bgColor={"#ad875e"}
        text={"From design to coding, I am always happy to put my passion into products. If you  want to work with me, click the link below to get in touch!"}
        isContact={false}
        />

      <AboutContent
        name={"See what i created"}
        link={'/work'}
        title={"Painter"}
        url={require('../../../assets/img/about_painter.png')}
        bgColor={"#41d187"}
        text={"Painting is designing. Designing helps web development. I am pretty sure painting helps me keep myself creativite."}
        isContact={false}
        />

      <AboutContent
        name={"learn more"}
        link={'/construction'}
        title={"Traveler"}
        url={require('../../../assets/img/about_traveler.jpg')}
        bgColor={"#d1be41"}
        text={"Visiting where I have never been always inspires me. Food, smell, and people that I never experienced or met give me hints for products."}
        isContact={false}
      />
    </div>
  );
};


export default About;
