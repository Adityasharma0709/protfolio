import React from "react";
import Navigation from "../components/Navigation";
import Squares from "../components/Squares";
import "../css/home.css"
function Home() {
  return (
    <div className="Filmsheet">
    <div className="canvas">
      <Navigation />
      <Squares
      direction='diagonal' 
      squareSize={40}
      />
    </div>
    </div>
  );
}

export default Home;
