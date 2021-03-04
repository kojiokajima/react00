import React from "react";
import Grow from '@material-ui/core/Grow'

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-text">
        <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={1500}>
          {/* <p>This is who I am</p> */}
          <p>{props.text}</p>
        </Grow>
        <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={3500}>
          <p>Scroll to learn more</p>
        </Grow>
      </div>
    </div>
  );
};

export default Hero;
