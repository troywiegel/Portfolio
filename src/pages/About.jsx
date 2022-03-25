import Header from "../components/Header";
import Background from "../components/Background";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

function About() {
  return (
    <section>
      <Background />
      <Header />
      <div className="aboutContent">
        <h2>
          I'm a full-stack web developer who loves to learn and create. Let's
          connect and see what we can build together!
        </h2>
        <ul className="aboutSocial">
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
              href="https://drive.google.com/file/d/1O98nPcx7gIXFpKtYDmPLc10Ezn1qriJE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FaClipboardList />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
