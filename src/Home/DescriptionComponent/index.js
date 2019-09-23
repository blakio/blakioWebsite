

import React, { useState, useEffect } from 'react';

function Description(props) {

  const [left, setLeft] = useState()

  const {
    imageClass,
    title,
    text,
    imageColor,
    direction
  } = props;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLeft("0em");
  //   }, 1000);
  // }, [imageColor]);
  //
  // const initialPosition = (direction === "forward") ? "-4em" : "4em";

  return (<div id="description_componentContainer" style={{height: "100%", width: "100%"}} className="flex">
    <div className="development_descriptionImage flex" style={{color: imageColor}}>
      <i className={imageClass}></i>
      <i className="fas fa-check checkmark"></i>
    </div>
    <div className="development_descriptionBody flex"  style={{color: imageColor}}>
      <div className="development_descriptionTitle flex">
        <p>{title}</p>
      </div>
      <div className="development_descriptionText flex"  style={{color: imageColor}}>
        <p>{text}</p>
      </div>
    </div>
  </div>);
}

export default Description;
