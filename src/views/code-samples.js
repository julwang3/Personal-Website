import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './view.css'

const CodeSamples = (props) => {
  return (
    <div className="view-container">
      <Helmet>
        <title>Code Samples | Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>
      
      <NavBar></NavBar>


      <Footer></Footer>
    </div>
  )
}

export default CodeSamples
