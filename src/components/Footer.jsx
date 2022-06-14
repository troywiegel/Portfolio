import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="nav-footer footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Troy Wiegel</h5>
            <p className="grey-text text-lighten-4">
              I'm excited you are here! Feel free to look around and get to know
              me.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
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
                  href="https://drive.google.com/file/d/1b2t-ETBcAukBnG0wy54gRXTauV_ttPpx/view?usp=sharing"
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
      <div className="footer-copyright white-text">
        <div className="container" id="copyright">
          Copyright © 2022 - Troy Wiegel
        </div>
      </div>
    </div>
  );
}

export default Footer;
