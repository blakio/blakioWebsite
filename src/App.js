import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Splash from "./Splash";
import Home from "./Home";

function App() {
  return (<div id="app">
    <BrowserRouter>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/home" component={Home}/>
    </BrowserRouter>
  </div>);
}

export default App;
