import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './code-samples.css'

import Cpp1 from '../code-samples/cpp-1.jpg'

const CodeSamples = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>
      
      <NavBar></NavBar>

      <div>
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
          />
      </div>

      <Footer></Footer>
    </div>
  )
}

// DELETE
// test with images
CodeSamples.defaultProps = {
  rootClassName: '',
  feature1ImageSrc: Cpp1,
  feature1ImageAlt: 'Image',
}
// DELETE

export default CodeSamples
