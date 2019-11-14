import React, { useState } from 'react'
import axios from "axios";
import './index.css'


const Pricing = () => {

  return (<div id="pricingSection" className="flex">
    <p className="title" >PRICING</p>

    <p className="pricingDescription heading">A CUSTOMIZABLE DASHBOARD for $4000/yr</p>

    <p className="title">HOW IT WORKS</p>
    <p className="pricingDescription">The only thing you pay is the $4000/yr subscription.</p>
    <p className="pricingDescription">The first app is free with limitations (Let's talk)</p>
    <p className="pricingDescription">Additional features will be a one time charge. Prices may vary.</p>

    <div className="featureExampleSection flex">
      <p className="title">Example Features</p>
      <ul>
        <li>Timesheets</li>
        <li>Analytics</li>
        <li>KPI reporting</li>
        <li>Goal tracking</li>
        <li>Alerts</li>
        <li>Integration of data</li>
        <li>Pre built reports</li>
      </ul>
    </div>

  </div>)
}

export default Pricing
