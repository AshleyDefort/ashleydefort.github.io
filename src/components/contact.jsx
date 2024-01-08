import React from "react";
import "../styles/contact.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Bio} from "../data/constants.jsx";
function ContactSection() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-title">
        <h1>Contact</h1>
        <p>Feel free to contact me through any of my social media</p>
      </div>
      <div className="contact-list">
        <a className="contact-item" href={Bio.github} target="_blank">
          <FaGithub />
          <p>Github</p>
        </a>
        <a className="contact-item" href={Bio.linkedin} target="_blank">
          <FaLinkedinIn />
          <p>LinkedIn</p>
        </a>
        <a className="contact-item" href={`mailto:${Bio.email}`}>
          <MdEmail />
          <p>Email</p>
        </a>
      </div>
    </div>
  );
}
export default ContactSection;