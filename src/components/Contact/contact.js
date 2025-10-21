import React from 'react'; // Assuming './Navbar' is the correct path to your Navbar component
import './contact.scss';

const Contact = () => (
  <div className="container">
    <div className="about-section-container" style={{ backgroundImage: 'url("./Patterns.png")' }}>
      <div className="about-section-text-container">
        <p className="primary-subheading">.</p>
        <h1 className="primary-heading">
          We are here To HELP.
        </h1>
        <p className="primary-text">
          Have a question? We have answers. Whether you need technical support,
          want to learn more about
        </p>
        <p className="primary-text">.</p>
        {/* <img src="./Customer.png" alt="Img" className="centered-image" />
        <img src="./Product Information.png" alt="Img" className="centered-image" />
        <img src="./Chat Bubble.png" alt="Img" className="centered-image" /> */}
      </div>
    </div>
    <div className="contact-section">
      <div className="text-side">
        {/* Left side text */}
        <p className="one">CONTACT US</p>
        <p className="two">Have a question?</p>
        <p className="two">or just want to</p>
        <p className="two">say Hello?</p>
      </div>
      <div className="contact-box">
        {/* Contact box */}
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div className="gr__circle__bottom" />
  </div>
);

export default Contact;
