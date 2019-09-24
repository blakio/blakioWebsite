

import React, { useState, useEffect } from 'react';

import Description from "./DescriptionComponent";
import About from "./About";
import Contact from "./Contact";
import { descriptionText } from "./description";

function Homepage() {

  const [openMenu, setOpenMenu] = useState(false);
  const [description, setDescription] = useState("plan");
  const [direction, setDirection] = useState("forward")

  const menuStyle = {
    top: openMenu ? "-4em" : "0em",
    left: openMenu ? "-4em" : "-30em"
  }

  const trackerStlye = () => {
    if (description === "plan") {
      return { left: 0, backgroundColor: "#FF7A76" };
    } else if (description === "build") {
      return { left: "33.33%", backgroundColor: "#A29491" };
    } else if (description === "deliver") {
      return { left: "66.66%", backgroundColor: "#2DB4B4" };
    }
  }

  const setDescriptionHolder = (type) => {
    const order = ["plan", "build", "deliver"];
    const index = order.indexOf(description);
    const newIndex = order.indexOf(type);
    if(index < newIndex){
      setDirection("forward")
      setDescription(type)
    } else if (index > newIndex) {
      setDirection("backwards")
      setDescription(type)
    }
  }

  return (<div>
    <div id="home_Page" className="flex">
      <div id="home_PageLeftPanel">
        {/*<i id="home_menu" className="fas fa-bars" onClick={() => setOpenMenu(true)}></i>*/}
        <div id="arrow"></div>
        <div id="home_menu_list" className="flex" style={menuStyle}>
          <p>home</p>
          <p>development</p>
          <p>contact us</p>
          <i className="fas fa-times" onClick={() => setOpenMenu(false)}></i>
        </div>
        <div id="home_sideBar" className="flex">
          <p>Software Solutions</p>
          <p>blakio LLC 2019</p>
        </div>
        <div id="home_TopBar" className="flex">
          <p id="i">i</p>
          <p id="o">o</p>
        </div>
        <div id="home_Title">
          <p>We believe in good ideas, flexibility and precision.</p>
        </div>
        <div id="home_Body">
          <p>At blak<span className="i">i</span>o we take your repetitive tasks, examine the processes that make them whole, and develop a seamless solution you will love.</p>
        </div>
        <div id="home_AnimationBoxes">
          <div className="components one"></div>
          <div className="components two"></div>
          <div className="components three flex">
            <p>components</p>
          </div>
        </div>
      </div>
      <div id="home_PageRightPanel" className="flex remove">
        <div className="flex">
          <span className="home_largePanelText">software</span>
        </div>
      </div>
    </div>

    <div id="development_Page" className="flex">
      <div id="development_selector" className="flex">
        <div className="development_selectorBox one flex" onClick={() => setDescriptionHolder("plan")}>
          <i className="fas fa-user-tie"></i>
        </div>
        <div className="development_selectorBox two flex" onClick={() => setDescriptionHolder("build")}>
          <i className="fas fa-hard-hat"></i>
        </div>
        <div className="development_selectorBox three flex" onClick={() => setDescriptionHolder("deliver")}>
          <i className="fas fa-shipping-fast"></i>
        </div>
      </div>
      <div id="development_description" className="flex">
        <div id="development_selector_tracker" style={trackerStlye()}></div>
        <Description
          imageColor={descriptionText[description].imageColor}
          imageClass={descriptionText[description].imageClass}
          title={descriptionText[description].title}
          text={descriptionText[description].text}
          direction={direction}
        />
      </div>
    </div>

    <About />

    <Contact />
  </div>);
}

export default Homepage;
