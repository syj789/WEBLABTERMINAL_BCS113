import React from "react";
import Background from './images/background-image.jpg';
var styleimg = {
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to PSL Home</h1>
      <section style={ styleimg }>
      <img src={ Background } />
      </section>
      
    </div>
  );
};

export default Home;
