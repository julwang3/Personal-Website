import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './about-me.css'
import portrait from '../images/portrait.jpg'

const AboutMe = (props) => {
  return (
    <div
      className={`about-me-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="about-me-max-width thq-section-max-width">
        <div className="about-me-content">
          <h2>
            <Fragment>
              <h2 className="about-me-text11 thq-heading-2">ABOUT ME</h2>
            </Fragment>
          </h2>
          <p>
            <Fragment>
              <p className="about-me-text12 thq-body-large thq-section-max-width">
                <span>
                  Hi there! I’m <b>Julia</b>, a software engineer and game developer currently pursuing
                  a B.S. in <b>Computer Science</b> with a minor in <b>Immersive Media</b> at 
                  the University of Southern California.
                </span>
                <br></br>
                <br></br>
                <span>
                  As a <b>software engineer</b>, I’m motivated to apply my programming and problem-solving
                  skills to build tools and platforms that <b>tackle real-world challenges</b>, foster connection, 
                  and <b>positively impact</b> people’s everyday lives. I thrive in environments driven 
                  by <b>passion</b> and <b>collaboration</b> and am always excited when faced with a new problem 
                  to solve!
                </span>
                <br></br>
                <br></br>
                <span>
                  As a <b>game developer</b>, , I’m passionate about developing <b>interactive and immersive experiences</b> that 
                  tell stories and evoke emotions that can <b>bring people together</b>, deepening our understanding of ourselves 
                  and one another. I am always eager to <b>explore </b> innovative ways to use technology and push the boundaries of
                  storytelling — whether it’s through experimenting with alternative controllers, virtual reality, or other
                  cutting-edge mediums.
                </span>
                <br></br>
                <br></br>
                <span>
                  When I’m not working, you can find me listening and singing
                  along to music, supporting local artists at conventions, or
                  playing games (of course!).
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
  rootClassName: '',
  feature1ImageSrc: portrait,
    // 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'Image',
}

AboutMe.propTypes = {
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default AboutMe
