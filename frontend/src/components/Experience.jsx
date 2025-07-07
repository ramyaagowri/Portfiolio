import React from "react";
// import workSvg from "../assets/Images/work.svg";
import SvgIcon from "./WorkSvgIcon";
function Experience() {
  const data = [
    {
      title: "Product Engineer",
      description: "Codingmart Technologies",
      experienceYrs: "Jan 2 2023 - Mar 30 2024",
    },
  ];
  const edu = [
    {
      Study: "UG - B.E(Electronics and Communication Engineering)",
      institute: "Erode Sengunthar Engineering College",
      period: "Batch => 2019 -23",
      percent: "Secured 9.3 CGPA",
    },
    {
      Study: "Higher Secondary",
      institute: "Bharathi Matriculation",
      period: "Batch => 2017 -19",
      percent: "Secured 84 percent",
    },
    {
      Study: "SSLC",
      institute: "Karunya Vidhya Bhavan",
      period: "Batch => 2015 - 17",
      percent: "Secured 86 Percent",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center m-4">
        Experience & Education
      </h2>
      <div>
        <div className="flex gap-2 justify-center pl-8">
          <div>
            {/* <img
            src={workSvg}
            alt="Work Icon"
            className="w-8 h-8 fill-blue-500"
          /> */}
            <SvgIcon />
          </div>

          <span className="text-blue-900 text-2xl font-semibold mb-7 text-center">
            Work Experience
          </span>
        </div>
        <div className="relative w-[80%] max-w-4xl mx-auto py-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-12`} // increased mb for spacing
            >
              {/* Number circle */}
              <div className="absolute left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-white bg-blue-600 flex items-center justify-center font-semibold shadow-lg">
                {index + 1}
              </div>

              {/* Card */}
              <div className="w-[35%] bg-white p-6 rounded-lg shadow-md z-0">
                <h3 className=" font-bold mb-1 text-blue-700">{item.title}</h3>
                <p className="text-black font-semibold text-sm mb-1">
                  {item.description}
                </p>
                <p className="text-gray-800 text-xs">{item.experienceYrs}</p>
                <p className="text-sm">
                  Proficient in designing and implementing scalable and
                  efficient solutions ,with expertise in fullstack developement.
                  Skilled in languages such as javascript , Node Js, and React
                  Js frameworks,and technologies.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-2 justify-center pl-8">
          <div>
            {/* <img
            src={workSvg}
            alt="Work Icon"
            className="w-8 h-8 fill-blue-500"
          /> */}
            <SvgIcon />
          </div>

          <span className="text-blue-900 text-2xl font-semibold mb-7 text-center">
            Educational Qualification
          </span>
        </div>
        <div className="relative w-[80%] max-w-4xl mx-auto py-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          {edu.map((item, index) => (
            <div
              key={index}
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-12`} // increased mb for spacing
            >
              {/* Number circle */}
              <div className="absolute left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-white bg-blue-600 flex items-center justify-center font-semibold shadow-lg">
                {index + 1}
              </div>

              {/* Card */}
              <div className="w-[35%] bg-white p-6 rounded-lg shadow-md z-0">
                <h3 className=" font-bold mb-1 text-blue-700">{item.Study}</h3>
                <p className="text-black font-semibold text-sm mb-1">
                  {item.institute}
                </p>
                <p className="text-gray-500 font-semibold text-xs">
                  {item.period}
                </p>
                <p className="text-sm"> {item.percent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
