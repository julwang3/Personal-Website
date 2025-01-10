import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './learn-more.css'

const LearnMore = (props) => {
  const [faq1Visibile, setFaq1Visibile] = useState(false)
  
  return (
    <div
      className={`learn-more-main-container ${props.rootClassName} `}
    >
      <div className="learn-more-container">
        {/* Buttons */}
        <div className="learn-more-buttons">
          {/* Learn More */}
          <div
            onClick={() => setFaq1Visibile(!faq1Visibile)}
            className="learn-more-trigger thq-button-filled"
          >
            <p>
              <Fragment>
                <p className="learn-more-label-text thq-body-large">Learn More</p>
              </Fragment>
            </p>
            <div className="learn-more-icons-container">
              {!faq1Visibile && (
                <div>
                  <svg viewBox="0 0 1024 1024" className="learn-more-icons">
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
              )}
              {faq1Visibile && (
                <div>
                  <svg viewBox="0 0 1024 1024" className="learn-more-icons">
                    <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
          {/* Relevant Links */}
          <div className="learn-more-relevant-links">
            { props.relevantLinks && props.relevantLinks.map((link) => (
              <a href={link.url} className="learn-more-button-filled thq-button-filled" target="_blank" rel="noopener noreferrer">
                <Fragment>
                  <span className="learn-more-label-text thq-body-large">{link.name}</span>
                </Fragment>
              </a>
            ))}
          </div>
        </div>
        {faq1Visibile && (
          <div className="learn-more-dropdown-container">
            <span className="thq-body-large">
              {props.longDescriptionMore ?? "Lorem ipsum dolor sit amet..."}
            </span>
            <ul className="list">
              {props.resumeBullet1 != '' && <li className="thq-body-large list-item">
                {props.resumeBullet1 ?? "Text"}
              </li>}
              {props.resumeBullet2 != '' && <li className="thq-body-large list-item">
                {props.resumeBullet2 ?? "Text"}
              </li>}
              {props.resumeBullet3 != '' && <li className="thq-body-large list-item">
                {props.resumeBullet3 ?? "Text"}
              </li>}
              {props.resumeBullet4 != '' && <li className="thq-body-large list-item">
                {props.resumeBullet4 ?? "Text"}
              </li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

LearnMore.defaultProps = {
  rootClassName: '',
  longDescription: '',
  longDescriptionMore: '',
  resumeBullet1: '',
  resumeBullet2: '',
  resumeBullet3: '',
  resumeBullet4: '',
  relevantLinks: [], // [ { name: 'Link-Name', url: 'URL-Link' }, ... ]
}

LearnMore.propTypes = {
  rootClassName: PropTypes.string,
  longDescription: PropTypes.string,
  longDescriptionMore: PropTypes.string,
  resumeBullet1: PropTypes.string,
  resumeBullet2: PropTypes.string,
  resumeBullet3: PropTypes.string,
  resumeBullet4: PropTypes.string,
  relevantLinks: PropTypes.array
}

export default LearnMore
