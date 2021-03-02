import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

const Home = () => {

  return (
    <div className="home">
          <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1500}>
              <p>
                Hello World
                <br />
                This is Koji Okajima
              </p>
          </Grow>
    </div>
  );
};

export default Home;
