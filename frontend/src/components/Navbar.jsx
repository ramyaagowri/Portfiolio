import { NavLink } from "react-router-dom";
import "./style.css";
function Navbar() {
  //   const [count, setCount] = useState(0);
  return (
    <>
      <div className="Nav">
        <div className="sheet-title">PortFolio</div>
        <ul className="Nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Testimonials</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
