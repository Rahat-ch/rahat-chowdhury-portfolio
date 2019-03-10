import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby'

import Layout from '../components/layout'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

class HomeIndex extends React.Component {
   
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
              <Projects />
              <About />
              <Contact />
            </div>
          </Layout>
        )
    }
}

export default HomeIndex