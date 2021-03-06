import React from 'react'

class Footer extends React.Component {
    render() {
        return (
          <div id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rahatc/"
                    target="_blank"
                    className="icon fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Rahat-ch"
                    target="_blank"
                    className="icon fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/rahatcodes"
                    target="_blank"
                    className="icon fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/resume"
                    target="_blank"
                    className="icon fa-file"
                  >
                    <span className="label">Resume</span>
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>&copy; Rahat Chowdhury</li>
                <li>
                  <a href="https://www.instagram.com/munlitephotography/"target="_blank">
                    PC: Munlite Photography
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default Footer
