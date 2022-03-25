import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

function Header() {
  return (
    <header className="headerContainer">
      <h2 className="headerLogo">
        <Link to="/">Troy Wiegel</Link>
      </h2>
      <div className="headerMenu">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
