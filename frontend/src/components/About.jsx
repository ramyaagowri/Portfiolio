import homeImage from "../assets/Images/RAMYAA GOWRI K .jpg";
import "./style.css";
function About() {
  return (
    <div className="about">
      <div className="about-1">
        <h2 className="text-3xl font-semibold">About Me!</h2>
        <p>
          I'm an experienced Product Engineer with a proven track record of 1.3
          years in both backend and frontend development roles.
        </p>
        <p>
          Proficient in designing and implementing scalable and efficient
          solutions, with expertise in full-stack development.
        </p>
        <p>
          Skilled in languages such as Javascript, Node Js and React Js
          frameworks, and technologies.
        </p>
        <p>
          I possess strong analytical and problem-solving abilities, along with
          a commitment to continuous learning and staying abreast of industry
          trends. Seeking opportunities to contribute technical proficiency and
          innovative solutions to drive product excellence.
        </p>
      </div>
      {/* <div className="about-3">
        <div
          style={{
            backgroundImage: `url(${homeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            width: "250px",
            height: "250px",
            objectFit: "cover",
          }}
          className="about-2"
        ></div>
      </div> */}
    </div>
  );
}

export default About;
