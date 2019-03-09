import React from 'react'

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navWrapper">
                <ul className="navContainer">
                    
                    <a className="navlink" href="#one"><li className="navItem"><strong className="strongLink">About</strong></li></a>
                    <a className="navlink" href="#two"><li className="navItem"><strong className="strongLink">Projects</strong></li></a>
                    <a className="navlink" href="https://blog.rahatcodes.com/" target="_blank"><li className="navItem"><strong className="strongLink">Blog</strong></li></a>
                    <a className="navlink" href="#three"><li className="navItem"><strong className="strongLink">Contact</strong></li></a>
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar