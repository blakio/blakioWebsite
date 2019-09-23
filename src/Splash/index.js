import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

function Splash() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("logoHolder").style.zIndex = -1;
      goToHome();
    }, 2880)
  }, []);

  const [redirect, setRedirect] = useState(false);

  const goToHome = () => setRedirect(true);

  return (<div id="splash" className="flex">
    {redirect && <Redirect to="/home" push />}
    <div id="logoHolder" className="flex">
      <p className="i">i</p>
      <p className="o">o</p>
    </div>
  </div>);
}

export default Splash;
