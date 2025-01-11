import React, { Fragment, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import { submitPassword } from '../components/api'
import Footer from '../components/footer'
import './view.css'
import './code-samples.css'

const CodeSamples = (props) => {
  const [isUnlocked, setIsUnlocked] = useState(true)
  const [password, setPassword] = useState("")
  const [contents, setContents] = useState([])

  async function handleSubmit() {
    const passwordContents = await submitPassword(password);
    if (passwordContents.length === 0) {
      // Invalid password
      setPassword("");
      setIsUnlocked(false);
    }
    else {
      // Correct password
      setContents(passwordContents);
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
                setPassword(entry.target.value.toLowerCase())
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
        <div
          className={`container thq-section-padding ${props.rootClassName} `}
        >
          <div className="unlocked-max-width thq-section-max-width">
            <div className="unlocked-content">
              {/* Header */}
              <h2>
                <Fragment>
                  <h2 className="thq-heading-2">Code Samples</h2>
                </Fragment>
              </h2>
              <p className="unlocked-subtitle-text unlocked-max-width">
                <span>
                  Below  are code snippets from a few of the scripts I've worked on for personal and/or academic projects!
                </span>
              </p>

              {/* Code Samples */}
              {/* TODO */}
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  )
}

export default CodeSamples
