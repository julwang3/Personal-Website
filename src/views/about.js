import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import AboutMe from '../components/about-me'
// import Skills from '../components/skills'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>
      
      <NavBar></NavBar>

      <AboutMe></AboutMe>
      {/* <Skills></Skills> */}

      <Footer></Footer>
    </div>
  )
}

export default About
