import React, { Fragment, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './view.css'
import './code-samples.css'

const CodeSamples = (props) => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  return (
    <div className="container">
      <Helmet>
        <title>Code Samples | Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>
      
      <NavBar></NavBar>

      {/* Locked */}
      {!isUnlocked && (
        <div className="locked-container">
          <div>
            <input
              required="true"
              placeholder="Enter Password"
              className="locked-password-text thq-input"
            />
          </div>
        
          <div
            // onClick={() => setFaq1Visibile(!faq1Visibile)}
            className="locked-button-filled thq-button-filled"
          >
            <p>
              <Fragment>
                <p className="thq-body-large">Submit</p>
              </Fragment>
            </p>
          </div>
        </div>
      )}

      {/* Unlocked */}
      {isUnlocked && (
        // TODO
        <div className="locked-container">
          <p>Unlocked</p>
        </div>
      )}

      <Footer></Footer>
    </div>
  )
}

export default CodeSamples
