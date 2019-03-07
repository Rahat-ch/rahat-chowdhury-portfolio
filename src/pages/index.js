import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'



class HomeIndex extends React.Component {

    constructor() {
        super();   
    }
   
    

    render() {
        const siteTitle = "Rahat Chowdhury"
        const siteDescription = "Full Stack Development Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About me</h2>
                        </header>
                        <p>I’m a Customer Experience aficionado turned Full Stack Web Developer. My experience stems from working with clients to solve their issues to now helping create the interfaces in a way that the end user faces the least amount of issues possible. My unique skill set gives me the ability to fully understand the user experience as I build my code.</p>
                        <p>My development experience is rooted in JavaScript, CSS, HTML, Node.js, SQL, React and Python. In September 2018 I began my journey through the Columbia University Coding Bootcamp. This is where I honed my skills as a web developer and fell in love with all aspects of development. I’m a people manager with experience in recruiting, training, managing and mentoring both large and small teams.</p>
                        <p>My goal is together my skills in customer experience and web development and help to create the ideal experience for all end users. </p>
                        <p>In my free time I love to play video games, write, rap, and record music.</p>
                        <ul className="actions">
                            <li><a href="#" className="button"> Download My Resume</a></li>
                        </ul>
                    </section>

                    

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex