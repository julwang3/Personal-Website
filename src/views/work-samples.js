import React, { Fragment, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import { submitPassword } from '../components/api'
import { CodeBlock, monokaiSublime } from 'react-code-blocks'
import './view.css'
import './work-samples.css'

const WorkSamples = (props) => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [contents, setContents] = useState([[]])
  const theme = monokaiSublime

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
        <title>Work Samples | Julia Wang</title>
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
        <div className={`view-heading-padding`}>
          <h2><Fragment>
            <span className="view-heading">
              Work Samples
            </span>
          </Fragment></h2>
          <br /><hr />
          <p className="unlocked-subtitle-text unlocked-max-width">
            <span>
              Below are some samples of my work from personal and/or academic projects!
            </span>
          </p>
          <hr />
        </div>
      )}
      {isUnlocked && (
        <div
          className={`thq-section-padding`}
        >
          <div className="unlocked-max-width thq-section-max-width">
            <div className="unlocked-content">
              {/* Code Samples */}
              { contents.length !== 0 && contents.map(([text, language], index) => {
                if (language == "video") {
                  return (
                    <iframe
                      src={text}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: 640,
                        height: 360
                      }}
                    ></iframe>
                  )
                }
                return (
                  <CodeBlock 
                    key={index}
                    text={text}
                    language={language}
                    theme={theme}
                    customStyle={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.85em",
                      fontStyle: "normal",
                      lineHeight: "1.5",
                      padding: "10px",
                      width: "100%",
                      maxWidth: "1050px",
                      margin: "0 auto",
                      overflowX: "auto",
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  )
}

export default WorkSamples
