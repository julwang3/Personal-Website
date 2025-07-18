import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import LearnMore from './learn-more'
import './project.css'

const Project = (props) => {
  return (
    <div
      className={`thq-section-padding`}
    >
      <div className="project-max-width thq-section-max-width">
        <div className="project-content project-section-title">
          <div className="project-main-container">
            <div className="project-header">
              <h2>
                <Fragment>
                  <span className="thq-heading-2">
                    {props.projectName}
                  </span>
                </Fragment>
              </h2>
              {props.inProgress && <label className="project-in-progress">
                  In Development
              </label>}
            </div>
            <div className="project-role-date-container">
              <span>
                <Fragment>
                  <span className="thq-body-large thq-white-space">
                    <span className="project-text-bold">{props.roleTitle}</span>  •  {props.timeline}
                  </span>
                </Fragment>
              </span>
            </div>
            {props.tools && (
              <div className="project-label-container">
                {props.tools.map((tool, index) => (
                  <Fragment key={index}>
                    <label className="project-tool label">
                      {tool}
                    </label>
                  </Fragment>
                ))}
              </div>
            )}
          </div>
          <p>
            <Fragment>
              <p className="project-description-text thq-body-large">
                <div dangerouslySetInnerHTML={{ __html: props.shortDescription }} />
                {props.awards && props.awards.map((awards, index) => (
                  <Fragment key={index}>
                    <br />
                    {awards.url ? (
                      <a href={awards.url} className="" target="_blank" rel="noopener noreferrer">
                        <b>🏅 <u>{awards.name}</u></b>
                      </a>
                    ) : (
                      <b>🏅 {awards.name}</b>
                    )}
                  </Fragment>
                ))}
              </p>
            </Fragment>
          </p>
          <LearnMore
            longDescription={props.longDescription}
            resumeBullets={props.resumeBullets}
            relevantLinks={props.relevantLinks}
          ></LearnMore>
        </div>
        <div className="project-image-container">
          {/* Project Image Linked */}
          { props.projectImageLink && <a href={props.projectImageLink} className="project-placeholder-image" target="_blank" rel="noopener noreferrer">
            <img
              alt={props.projectImageAlt}
              src={props.projectImage}
              className="thq-img-ratio-24-6"
            />
          </a>}
          {/* Project Image Not Linked */}
          { !props.projectImageLink &&
            <img
              alt={props.projectImageAlt}
              src={props.projectImage}
              className="project-placeholder-image thq-img-ratio-24-6"
            />
          }
        </div>
      </div>
    </div>
  )
}

Project.defaultProps = {
  projectName: '',
  roleTitle: '',
  timeline: '',
  tools: [],
  shortDescription: '',
  toolsUsed: '',
  longDescription: [],
  resumeBullets: [],
  relevantLinks: [],
  projectImageLink: '',
  projectImage: '',
  projectImageAlt: 'Image',
  inProgress: false,
  awards: [],
}

Project.propTypes = {
  projectName: PropTypes.string,
  roleTitle: PropTypes.string,
  timeline: PropTypes.string,
  tools: PropTypes.array,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.array,
  resumeBullets: PropTypes.array,
  relevantLinks: PropTypes.array,
  projectImageLink: PropTypes.string,
  projectImage: PropTypes.string,
  projectImageAlt: PropTypes.string,
  inProgress: PropTypes.bool,
  awards: PropTypes.array,
}

export default Project
