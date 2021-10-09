import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer class="site-footer">
      <div className="border">
        <div className="container">
          <div class="col-sm-12 col-md-6">
            <a class="text-justify" href="#Top">
              <h1>Back to Top</h1>
            </a>
          </div>
        </div>
      </div>
      <h6 class="lanAndFram">Languages and Frameworks</h6>
      <div className="footer">
        <div class="lists">
          <h5 class="list">JavaScript </h5>
          <h5 class="list">HTML</h5>
          <h5 class="list">CSS</h5>
          <h5 class="list">SQL</h5>
          <h5 class="list">React</h5>
          <h5 class="list">jQuery</h5>
        </div>
        <div class="right">
          <div class="row">
              <ul class="social-icons">
                <li>
                  <a
                    class="github"
                    href="https://github.com/Weerklank"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    class="linkedin"
                    href="https://www.linkedin.com/in/zoe-vanryn-gregg-50b108177/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
