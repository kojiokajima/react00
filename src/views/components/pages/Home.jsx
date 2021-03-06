import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grow from "@material-ui/core/Grow";
import { Hero } from "..";

const Home = () => {
  const infoText = `Hello World<br/>This is Koji Okajima`;
  const renderedText = () => {
        return infoText.split("<br/>").map((item, index) => {
            return <span key={index}>{item}<br/></span>
        })
    }

  const imageUrl = require('../../../assets/img/hero_home.jpg').default

  return (
    <div className="home">
      <Hero text={renderedText()} bottom={"Explore now"} image={imageUrl}/>
          {/* <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1500}>
              <p>
                Hello World
                <br />
                This is Koji Okajima
              </p>
          </Grow> */}
    </div>
  );
};

export default Home;
