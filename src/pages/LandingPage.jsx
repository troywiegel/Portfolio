import { useState } from "react";
import { Link } from "react-router-dom";
import pnw from "../assets/img/pnw.mp4";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

function LandingPage() {
  const [isActive, setActive] = useState("");

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <section className={isActive ? "showcase active" : "showcase"}>
        <header>
          <h2 className="logo">
            <Link to="/">Troy Wiegel</Link>
          </h2>
          <div
            className={isActive ? "toggle active" : "toggle"}
            onClick={handleClick}
          ></div>
        </header>

        <video src={pnw} autoPlay loop muted></video>

        <div className="overlay"></div>

        <div className="text">
          <h2>I'm Troy</h2>
          <h3>Web Developer</h3>
          <p>
            I am a Full-Stack Web Developer with a background in Information
            Technology and Music Performance. Welcome to my portfolio.
          </p>
          <Link to="/projects">Explore</Link>
        </div>

        <ul className="social">
          <li>
            <a
              href="https://github.com/troywiegel"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/troywiegel/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto: troywiegel@gmail.com">
              <FaPaperPlane />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1b2t-ETBcAukBnG0wy54gRXTauV_ttPpx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FaClipboardList />
            </a>
          </li>
        </ul>
      </section>

      <div className="menu">
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
    </>
  );
}

export default LandingPage;
