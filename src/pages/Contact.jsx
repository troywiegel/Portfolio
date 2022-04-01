import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <div className="container contactContainer">
        <div className="row">
          <div className="col">
            <div className="card #e57373 red lighten-2">
              <div className="card-content cardBackground white-text">
                <img
                  className="aboutImg"
                  src={require("../assets/img/ME2.png")}
                  alt="page background"
                />
                <p className="aboutContent">
                  Let's connect and build something together!
                </p>
                <ul className="contactSocial">
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
                      href="https://drive.google.com/file/d/18XupPr3-BbMeDH0TTa4GVdGetJBdzssu/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaClipboardList />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
