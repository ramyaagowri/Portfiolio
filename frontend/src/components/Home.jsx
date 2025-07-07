import "./style.css";
import homeImage from "../assets/Images/RAMYAA GOWRI K .jpg";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-content">
        <h1>Hi I'm Ramyaa Gowri K</h1>
        <h3>Fullstack developer</h3>
        <p>
          I build exceptional digital experience that are fast , accessible ,and
          visually appealing.
        </p>
        <div style={{ marginTop: "20px" }}>
          <a
            className="bg-blue-400 !text-blue-900 p-4 cursor-pointer rounded !hover:text-gray-300 !active:text-green-700"
            href="./contact"
          >
            Contact Me
          </a>
          <a
            className="bg-blue-400 !text-blue-900 cursor-pointer p-4 rounded !hover:text-gray-300 !active:text-green-700"
            href="./projects"
          >
            View work
          </a>
        </div>
      </div>
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
      ></div>
    </div>
  );
}
