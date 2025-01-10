import React, { Fragment, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import { submitPassword } from '../components/api'
import Footer from '../components/footer'
import './view.css'
import './code-samples.css'

const CodeSamples = (props) => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")

  async function handleSubmit() {
    const contents = await submitPassword(password);
    if (contents.length === 0) {
      setIsUnlocked(false);
    }
    else {
      setIsUnlocked(true);
    }
  }

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
              value={password}
              onChange={(entry) =>
                setPassword(entry.target.value)
              }
            />
          </div>
        
          <div
            onClick={handleSubmit}
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
