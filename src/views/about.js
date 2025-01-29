import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import AboutMe from '../components/about-me'
import Footer from '../components/footer'
import './view.css'

const About = (props) => {
  return (
    <div className="container">
      <Helmet>
        <title>About | Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>
      
      <NavBar></NavBar>

      <div className={`view-heading-padding`}>
        <h2><Fragment>
            <span className="view-heading">
              About Me
            </span>
        </Fragment></h2>
        <hr />
      </div>

      <AboutMe></AboutMe>
      {/* <Skills></Skills> */}

      <Footer></Footer>
    </div>
  )
}

export default About
