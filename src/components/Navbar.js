import React from 'react'
import { Link } from 'gatsby'

class Navbar extends React.Component {
    render(){
        return (
          <nav className="navWrapper">
            <ul className="navContainer">
              <Link to="/#one" className="navlink">
                <li className="navItem">
                  <strong className="strongLink">Projects</strong>
                </li>
              </Link>
              <Link to="/#two" className="navlink">
                <li className="navItem">
                  <strong className="strongLink">About</strong>
                </li>
              </Link>
              <Link to="/#three" className="navlink">
                <li className="navItem">
                  <strong className="strongLink">Contact</strong>
                </li>
              </Link>
              <a
                className="navlink"
                href="https://rahatcodes.com/"
                target="_blank"
              >
                <li className="navItem">
                  <strong className="strongLink">Blog</strong>
                </li>
              </a>
            </ul>
          </nav>
        )
    }
}

export default Navbar
