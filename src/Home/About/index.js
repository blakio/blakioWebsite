

import React from 'react';

function About() {

  return (<div id="about" className="flex">
    <div id="about_leftPanel" className="about flex">
      <div id="home_Body" className="about">
        <p style={{
          fontWeight: 900,
          fontSize: "3.6em",
          width: "80%"
        }}>Blakio LLC Is A Black-Owned Tech Company<span className="icolor">...</span></p>
        <p><span className="icolor">...</span>Offering customers a custom software solution for their needs<span className="icolor">.</span></p>
        <p>The future is digital<span className="icolor">.</span> We are here to make your company digital as well by evolving your system so you can focus on your business<span className="icolor">.</span></p>
        <p>Our knowledge and experience translate to added value and peace of mind for our customers<span className="icolor">.</span></p>
      </div>
    </div>
    <div id="about_rightPanel"></div>
  </div>);
}

export default About;
