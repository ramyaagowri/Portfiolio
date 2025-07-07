import React from "react";
import "./style.css";
function Skills() {
  let skills = [
    {
      skillsOn: "Frontend",
      skill: [
        ["HTML/CSS", 95],
        ["React Js", 90],
        ["SCSS", 95],
        ["Typescript", 90],
      ],
    },
    {
      skillsOn: "Backend",
      skill: [
        ["Node Js", 95],
        ["Express Js", 95],
        ["Fastify with Typescript", 95],
        ["Primsa", 95],
        ["Sequelize", 90],
        ["Redis", 95],
      ],
    },
    {
      skillsOn: "DataBase",
      skill: [
        ["Mongo DB", 85],
        ["MySQL", 90],
        ["PostgreSQL", 95],
        ["Sequelize", 80],
        ["Prisma ORM", 95],
      ],
    },
    {
      skillsOn: "Others",
      skill: [
        ["Elastic Search", 85],
        ["Git", 90],
        ["Bit Bucket", 80],
      ],
    },
  ];
  return (
    <div className="bg-[#c4e4f2]">
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h2 className="text-3xl font-semibold">Skills and Technologies</h2>
        <p>
          I have worked with variety of technologies in the web development
          world.Here are my core competencies.
        </p>
      </div>

      <div className="container">
        {skills.map((section, index) => (
          <div className="card" key={index}>
            <h3>{section.skillsOn}</h3>
            <div>
              {section.skill.map(([name, percent], idx) => (
                <div key={idx} style={{ marginBottom: "10px" }}>
                  <p>{name}</p>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${percent}%`, textAlign: "end" }}
                    >
                      {percent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
