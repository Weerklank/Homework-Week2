import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer class="site-footer">
        <div class="container">
            <div class="row">
              <div class="col-xs-6 col-md-3">
                <h6>Languages and Frameworks</h6>
                <ul class="footer-links">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SQL</li>
                  <li>React</li>
                  <li>jQuery</li>
                </ul>
              </div>

            </div>
            <hr/>
          </div>
        <div className="container">
        <div class="col-sm-12 col-md-6">
                <a class="text-justify" href="#Top">
                    <h1>Back to Top</h1>
                    </a>
              </div>
         </div>
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                  <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                  <li><a class="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    )
}