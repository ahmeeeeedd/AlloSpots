import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsHuman(e.target.checked);
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isHuman) {
      alert("Please verify that you are not a robot.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const mailtoLink = `mailto:your_email@example.com?subject=Message from ${encodeURIComponent(
      email
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact_us">
      <div className="left-S">
        <hr />
        <div>
          <span className="stroke-text">ALWAYS HERE </span>
          <span> FOR YOU</span>
        </div>
        <div>
          <span>
            <br />
            DON'T HESITATE TO
          </span>
          <span className="stroke-text">
            <br /> CONTACT US
          </span>
        </div>
      </div>
      <div className="right-S">
        <form onSubmit={handleSubmit} className="email">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div>
            <input
              type="checkbox"
              id="human"
              checked={isHuman}
              onChange={handleCheckboxChange}
              required
            />
            <label htmlFor="human">
              I'm not <br />a robot
            </label>
          </div>
          <button type="submit" className="btn btn-S">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
