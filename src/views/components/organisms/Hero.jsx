import React from "react";
import Grow from '@material-ui/core/Grow'


const Hero = (props) => {
  const bgUrl = props.image

  return (
    <div className="hero">
      <div className="hero-bg" style={{
        backgroundImage: "url(" + bgUrl + ")"
      }}></div>
      <div className="hero-text">
        <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={1500}>
          <p>{props.text}</p>
        </Grow>
        <Grow in={true} style={{ transformOrigin: "50% 50%" }} timeout={3500}>
          <p>{props.bottom}</p>
        </Grow>
      </div>
    </div>
  );
};

export default Hero;
