import React from "react";
import "../styles/skills.css";
import { Skills } from "../data/constants.jsx";
function SkillsSection() {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-title">
        <h2>Skills</h2>
        <p>Here are some of my skills on wich I've been working on for the past 3 years</p>
      </div>
      <div className="skills-list">
        {Skills.map((skill) => (
          <div className="skill" key={skill.title} style={{boxShadow: `0px 0px 20px 0px ${skill.backgroundColor}`,}}>
            <h3>{skill.title}</h3>
            <div className="skill-list">
              {skill.skills.map((item) => (
                <div className="skill-item" key={item.name}>
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SkillsSection;