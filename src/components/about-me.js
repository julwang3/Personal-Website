import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './about-me.css'
import portrait from '../images/portrait.jpg'

const AboutMe = (props) => {
  return (
    <div
      className={`thq-section-padding`}
    >
      <div className="about-me-max-width thq-section-max-width">
        <div className="about-me-content">
          <p>
            <Fragment>
              <p className="thq-body-large thq-section-max-width">
                <span>
                  Hi there! I’m <b>Julia</b>, an engineer with a B.S. in <b>Computer Science</b> and minor in <b>Immersive Media</b> from the University of Southern California (USC). 
                  I'm currently pursuing my Master's in Computer Science at USC and expect to graduate in 2026.
                </span>
                <br></br>
                <br></br>
                <span>
                  As a <b>Software Engineer</b>, I’m motivated to apply my programming and problem-solving
                  skills to build tools and platforms that tackle real-world challenges, foster connection, 
                  and positively impact people’s everyday lives. I thrive in environments driven 
                  by <b>passion and collaboration</b> and am always excited when faced with new problems 
                  to tackle!
                </span>
                <br></br>
                <br></br>
                <span>
                  As a <b>Creative Technologist</b>, I’m passionate about developing interactive and immersive 
                  experiences that are <b>fun</b> and evoke emotions capable of connecting and <b>bringing 
                  people together</b>. I am always eager to explore new and innovative ways to use technology and <b>push the 
                  boundaries</b> of media — whether it’s through experimenting with alternative controllers, virtual reality, 
                  or other cutting-edge mediums!
                </span>
                <br></br>
                <br></br>
                <span>
                  When I’m not working, you can find me at a concert, splurging my monthly budget at local artist alleys or conventions, or
                  playing games!
                </span>
                <br></br>
              </p>
            </Fragment>
          </p>
        </div>
        <div className="about-me-image-container thq-section-max-width">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
  )
}

AboutMe.defaultProps = {
  feature1ImageSrc: portrait,
  feature1ImageAlt: 'Image',
}

AboutMe.propTypes = {
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default AboutMe
