import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import AboutMe from '../components/about-me'
import Footer from '../components/footer'
import './view.css'

const About = (props) => {
  return (
    <div className="view-container">
      <Helmet>
        <title>About | Julia Wang</title>
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
