import React, { useState } from 'react'
import axios from "axios";
import './index.css'


const Pricing = () => {

  return (<div id="pricingSection" className="flex">
    <p className="title" >PRICING</p>

    <p className="pricingDescription">Dashboard Subscription <span className="big">$4000</span> / yr</p>

    <p className="title">HOW IT WORKS</p>
    <p className="pricingDescription">Add your first dashboard feature for a one time charge from <span className="big">$0</span></p>
    <br />
    <br />
    <p className="pricingDescription">Need more features in the future? No problem.</p>
    <p className="pricingDescription">We will build it with another one time charge.</p>

    <div className="featureExampleSection flex">
      <p className="title">Example Features</p>
      <ul>
        <li>Timesheets</li>
        <li>Automated tasks</li>
        <li>Analytics</li>
        <li>KPI reporting</li>
        <li>Goal tracking</li>
        <li>Alerts</li>
        <li>Integration of data</li>
        <li>Prebuilt reports</li>
      </ul>
      <p className="pricingDescription">Don't see your desired feature here? No problem. We will build it for you.</p>
    </div>

  </div>)
}

export default Pricing
