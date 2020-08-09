import React, { useState } from 'react'
import axios from "axios";
import './index.css'


const Contact = () => {

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const nameChange = (e) => {
    const value = e.target.value;
    setName(value)
  }

  const contactChange = (e) => {
    const value = e.target.value;
    setContact(value)
  }

  const messageChange = (e) => {
    const value = e.target.value;
    setMessage(value)
  }

  const submitEmail = (e) => {
    e.preventDefault();
    const params = {
      name,
      contact,
      message
    }

    const host = "blakio";

    axios.post("https://blakiodashserver.herokuapp.com/email", {
      params,
      host
    }).then(data => {
      setName("")
      setContact("")
      setMessage("Message sent! Thanks")
    }).catch(err => console.log(err));

  }

  return (<div id="contactForm" className="flex">
    {/*<div class="contactio flex">
      <p class="i">i</p>
      <p class="o">o</p>
    </div>*/}
    <p className="smallText contactHeading">Contact Us<span className="icolor">.</span></p>
    <div className="form-style-2">
      <form action="" method="post">
        <label for="field1">
          <span>Call or text: 814 753 0157</span>
          <span>Email: ijh5005@outlook.com</span>
          {/*<span>Name</span>*/}
          {/*<input type="text" className="input-field" name="field1" value={name} onChange={nameChange.bind(this)}/>*/}
        </label>
       {/*<label for="field2">
          <span>Email</span>
          <input type="text" className="input-field" name="field2" value={contact} onChange={contactChange.bind(this)}/>
        </label>
        <label for="field5"><span>Message</span>
          <textarea name="field5" className="textarea-field" value={message} onChange={messageChange.bind(this)}></textarea></label>
        <label>
        <span> </span><input type="submit" value="Submit" onClick={submitEmail.bind(this)} /></label>*/}
      </form>
    </div>
  </div>)
}

export default Contact
