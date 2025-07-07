import React, { useState, useEffect } from "react";
import "./style.css";
import quoraImg from "../assets/Images/Quora.jpg";
import campusImg from "../assets/Images/campusHiring.jpg";
import titanImg from "../assets/Images/titan.jpg";

function Projects() {
  const projectArr = [
    {
      project: "Campus Hiring",
      projectType: "Native",
      images: campusImg,
      projectDescrption:
        "I have developed the native application of my previous company named Campus Hiring.Implemented end-to-end solutions with Node Js and React Js .Collaborated cross functionally to deliver a seamless and user-friendly application experience where we used timer and cache done using redis to have count on the time taken by cadidate to complete a section of the test. ",
      skills: [
        "Node Js",
        "React Js ",
        "Redis",
        "MySQL",
        "Primsa",
        "Fastify",
        "Typescript",
        "Google Authentication",
      ],
    },
    {
      project: "Quora Clone",
      projectType: "Native",
      images: quoraImg,
      projectDescrption:
        "It is a sample website of quora built with express framework in Node js.My part was backend develpment have done that using MySQL Database",
      skills: ["Node Js", "MySQL", "Google Authentication", "expressJS"],
    },
    {
      project: "One Pager",
      projectType: "Titan Company Limited",
      images: titanImg,
      projectDescrption:
        "Managed a large employee details from the backend,with fast and effective response using elastic search.We have used sequelize as an ORM and Oracle Database .Have used Fastiy with Typescript for secured and fast backend functionalities. ",
      skills: [
        "Node Js",
        "Sequelize",
        "Google Authentication",
        "Fastify",
        "Typescript",
        "Swagger Docs",
        "Multer",
        "Zod validations",
        "Puppeteer",
        "BitBucket",
      ],
    },
  ];
  return (
    <div className="bg-[#c4e4f2]">
      <h2 className="text-3xl font-semibold text-center m-4">Projects</h2>
      <div className="grid grid-cols-[auto_auto_auto] gap-4 ml-4">
        {projectArr.map((ele) => {
          return (
            <div className="flex flex-col bg-white rounded-xl shadow-lg  p-4 w-full max-w-sm cursor-pointer">
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={ele.images}
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold mb-1">{ele.project}</p>
              <p className="text-sm text-gray-700 mb-2 overflow-hidden">
                {ele.projectDescrption}
              </p>
              <ul className="flex flex-wrap gap-2 text-sm text-white">
                {ele.skills.map((i) => {
                  return <li className="bg-blue-500 px-2 py-1 rounded">{i}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
