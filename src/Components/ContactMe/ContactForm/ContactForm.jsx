import './ContactForm.css'

import { useState } from 'react';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages have been sent successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-title">

      </div>
      <div className="contact-container">
        <div className="contact-content">
      
          <div className="contact-form-container">
            <form className="contact-form">
              {errMsg && <p className="contact-error">{errMsg}</p>}
              {successMsg && <p className="contact-success">{successMsg}</p>}
              <div className="contact-input-group">
                <div className="contact-input-field">
                  <p>Your name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={errMsg === "Username is required!" ? "error" : ""}
                    type="text"
                  />
                </div>
                <div className="contact-input-field">
                  <p>Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={errMsg === "Phone number is required!" ? "error" : ""}
                    type="text"
                  />
                </div>
              </div>
              <div className="contact-input-field">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={errMsg === "Please give your Email!" ? "error" : ""}
                  type="email"
                />
              </div>
              <div className="contact-input-field">
                <p>Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={errMsg === "Plese give your Subject!" ? "error" : ""}
                  type="text"
                />
              </div>
              <div className="contact-input-field">
                <p>Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={errMsg === "Message is required!" ? "error" : ""}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="contact-submit">
                <button onClick={handleSend}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
