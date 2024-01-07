import React from "react";
import "../styles/skills.css";
import { Skills } from "../data/constants.jsx";
function SkillsSection() {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-list">
        {Skills.map((skill) => (
          <div className="skill" key={skill.title}>
            <h3>{skill.title}</h3>
            <div className="skill-list">
              {skill.skills.map((item) => (
                <div className="skill-item" key={item.name}>
                  
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