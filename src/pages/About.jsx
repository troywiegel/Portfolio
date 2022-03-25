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
        <img
          className="aboutImg"
          src={require("../assets/img/ME.png")}
          alt="page background"
        />
        <div className="aboutDescription">
          <h2>
            I love to learn and create new things. I enjoy leveraging my
            technical background from 12 years in the Information technology
            field with 15 years of music industry experience to build high
            quality, creative web applications. Let's connect and see what we
            can build together!
          </h2>
          <ul>
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
      </div>
    </section>
  );
}

export default About;
