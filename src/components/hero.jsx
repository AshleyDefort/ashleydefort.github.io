import React from "react";
import "../styles/hero.css";
import hello from "../images/hello.gif"
import TypeWriter from "typewriter-effect";
import {Bio} from "../data/constants.jsx"
function Hero() {
  const typeWriter = (
    <TypeWriter
      options={{
        strings: Bio.roles,
        autoStart: true,
        loop: true,
        delay: 50,
      }}
    />
  )
  return (
    <div className="hero-section" id="about">
      <div className="hero-hello">
      <img src={hello} className="hello-gif" alt="hello" /> 
      <h3>, I'm </h3>
      </div>
      <div className="hero-name">
        <h1>
          <span className="name">{Bio.name}</span> <span className="last-name">{Bio.lastName}</span> <span className="second-last-name">{Bio.secondLastName}</span>
        </h1>
      </div>
      <div className="hero-roles">
        <p >I'm a </p>{typeWriter}
      </div>
      
      <p className="hero-description">{Bio.description}</p>
    </div>
  )
}
export default Hero;