import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './button.css'

const Button = (props) => {
  return (
    <div className="button-container">
      <a
        href={props.buttonUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="button-button thq-button-filled"
      >
        <span>
          <Fragment>
            <span className="button-text thq-body-small">Learn More</span>
          </Fragment>
        </span>
      </a>
    </div>
  )
}

Button.defaultProps = {
  buttonUrl: 'https://www.linkedin.com/in/julialywang/',
}

Button.propTypes = {
  buttonUrl: PropTypes.string,
}

export default Button
