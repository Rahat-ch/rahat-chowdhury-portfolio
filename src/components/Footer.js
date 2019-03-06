import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-file"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Rahat Chowdhury</li><li><a href="http://html5up.net">PC: Munlite Photography</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
