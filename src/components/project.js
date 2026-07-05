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
          {props.projectMediaType === "video" ? (
            <>
            {/* Video */}
              { props.projectMediaLink && <a href={props.projectMediaLink} className="project-placeholder-image" target="_blank" rel="noopener noreferrer">
                <a href={props.projectMediaLink} className="project-placeholder-image" target="_blank" rel="noopener noreferrer">
                  <video
                    className="thq-img-ratio-24-6"
                    src={props.projectMedia}
                    poster={props.projectMediaPoster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </a>
              </a>}
              { !props.projectMediaLink &&
                <video
                  className="thq-img-ratio-24-6"
                  src={props.projectMedia}
                  poster={props.projectMediaPoster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              }
            </>
          ) : (
            <>
            {/* Image */}
              { props.projectMediaLink && <a href={props.projectMediaLink} className="project-placeholder-image" target="_blank" rel="noopener noreferrer">
                <img
                  src={props.projectMedia}
                  className="thq-img-ratio-24-6"
                  loading="lazy"
                  decoding="async"
                />
              </a>}
              { !props.projectMediaLink &&
                <img
                  src={props.projectMedia}
                  className="project-placeholder-image thq-img-ratio-24-6"
                  loading="lazy"
                  decoding="async"
                />
              }
            </>
          )}
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
  projectMediaLink: '',
  projectMedia: '',
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
  projectMediaLink: PropTypes.string,
  projectMedia: PropTypes.string,
  projectMediaType: PropTypes.string,
  projectMediaPoster: PropTypes.string,
  inProgress: PropTypes.bool,
  awards: PropTypes.array,
}

export default Project
