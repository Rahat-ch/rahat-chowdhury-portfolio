import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
import avatar from '../assets/images/mee.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>My name is Rahat</strong>. <br /> I am a web developer <br />
                    blogger, rapper, and husband.
                    </h1>
                </div>
                <Navbar />
                <Footer />
            </header>
        )
    }
}

export default Header
