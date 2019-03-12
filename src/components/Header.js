import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import Navbar from './Navbar'
import avatar from '../assets/images/mee.png'

class Header extends React.Component {
    render() {
        return (
          <header id="header">
            <div className="inner">
              <Link to="/" className="image avatar">
                <img src={avatar} alt="rahat" />
              </Link>
              
              <h1>
                <strong>My name is Rahat</strong>. <br /> I am a web
                developer <br />
                blogger, rapper, and Pokémon master.
              </h1>
            </div>
            <Navbar />
            <Footer />
          </header>
        )
    }
}

export default Header
