import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-bar.css'

const NavBar = (props) => {
  return (
    <header className={`nav-bar-main-container`}>
      <header data-thq="thq-navbar" className="nav-bar-navbar-interactive">
        {/* Name */}
        <div className="nav-bar-width-container">
          <div className="nav-bar-left-container">
            <h1>
              <Fragment>
                <h1 className="thq-heading-1">Julia Wang</h1>
              </Fragment>
            </h1>
          </div>
          <span>
            <Fragment>
              <pre className="thq-body-large">
                Software Engineer &amp; Creative Technologist
              </pre>
            </Fragment>
          </span>
        </div>

        {/* Desktop Menu */}
        <div data-thq="thq-navbar-nav" className="nav-bar-desktop-menu">
          <nav className="nav-bar-links-desktop">
            <Link to="/">
              <Fragment>
                <span className="thq-link">Work</span>
              </Fragment>
            </Link>
            <Link to="/about">
              <Fragment>
                <span className="thq-link">About</span>
              </Fragment>
            </Link>
            <a href={props.archiveLink} target="_blank" rel="noopener noreferrer">
              <Fragment>
                <span className="thq-link">Archive</span>
              </Fragment>
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-mobile-menu">
          <div className="nav-bar-nav">
            <div className="nav-bar-top">
              <div data-thq="thq-close-menu" className="nav-bar-close-menu">
                <svg viewBox="0 0 1024 1024" className="nav-bar-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="nav-bar-links-mobile">
            <Link to="/">
              <Fragment>
                <span className="thq-link">Work</span>
              </Fragment>
            </Link>
            <Link to="/about">
              <Fragment>
                <span className="thq-link">About</span>
              </Fragment>
            </Link>
            <a href={props.archiveLink} target="_blank" rel="noopener noreferrer">
              <Fragment>
                <span className="thq-link">Archive</span>
              </Fragment>
            </a>
            </nav>
          </div>
          <div className="nav-bar-icon-group">
            <a href="mailto:jlwang98@gmail.com?subject=" className="footer-link1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="thq-button-icon thq-icon-small"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/julialywang/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="thq-button-icon thq-icon-small"
              >
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/jlwang03"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="thq-button-icon thq-icon-small"
              >
                <path
                  d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                  fill="currentColor"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </header>
  )
}

NavBar.defaultProps = {
  archiveLink: 'https://julwang.itch.io/',
  logoSrc:
    'https://www.linkedin.com/in/julialywang/',
  logoAlt: 'logo',
}

NavBar.propTypes = {
  archiveLink: PropTypes.string,
  resumeLink: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default NavBar
