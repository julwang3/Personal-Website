import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './learn-more.css'

const LearnMore = (props) => {
  const [faq1Visibile, setFaq1Visibile] = useState(false)
  return (
    <div
      className={`learn-more-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="learn-more-faq1">
        <div
          onClick={() => setFaq1Visibile(!faq1Visibile)}
          className="learn-more-trigger thq-button-filled"
        >
          <p>
            <Fragment>
              <p className="learn-more-text6 thq-body-large">Learn More</p>
            </Fragment>
          </p>
          <div className="learn-more-icons-container">
            {!faq1Visibile && (
              <div>
                <svg viewBox="0 0 1024 1024" className="learn-more-icon1">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            )}
            {faq1Visibile && (
              <div>
                <svg viewBox="0 0 1024 1024" className="learn-more-icon3">
                  <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        {faq1Visibile && (
          <div className="learn-more-container3">
            {/* <span className="thq-body-large">
              {props.longDescription ??
                "Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis sunt aut" +
                "deleniti illum non repudiandae voluptatem. Aut praesentium" +
                "doloribus qui distinctio neque ut unde temporibus. Cum" +
                "exercitationem eveniet in omnis animi in corporis nulla."
              }
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span> */}
            <div className="learn-more-container4">
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
}

LearnMore.propTypes = {
  rootClassName: PropTypes.string,
  longDescription: PropTypes.string,
  longDescriptionMore: PropTypes.string,
  resumeBullet1: PropTypes.string,
  resumeBullet2: PropTypes.string,
  resumeBullet3: PropTypes.string,
  resumeBullet4: PropTypes.string,
}

export default LearnMore
