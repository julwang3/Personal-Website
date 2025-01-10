import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      id={props.footerId}
      className={`footer-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-credits">
          <div className="footer-social-links">
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
              href="https://github.com/julwang3"
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
          <span>
            <Fragment>
              <span className="footer-text thq-body-large">
                © 2024 by Julia Wang
              </span>
            </Fragment>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  footerId: '',
  rootClassName: '',
}

Footer.propTypes = {
  footerId: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
