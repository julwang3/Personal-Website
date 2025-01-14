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
            <h2>
              <Fragment>
                <span className="thq-heading-2">
                  {props.projectName}
                </span>
              </Fragment>
            </h2>
            <div className="project-role-date-container">
              <span>
                <Fragment>
                  <span className="thq-body-large thq-white-space">
                    {props.roleTitle}  •  {props.timeline}
                  </span>
                </Fragment>
              </span>
            </div>
            {props.tools && (
              <div className="project-label-container">
                {props.tools.map((tool, index) => (
                  <Fragment key={index}>
                    <label className="project-swe label">
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
                {props.shortDescription ?? 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
                "Suspendisse varius enim in eros elementum tristique. Duis" + 
                "cursus, mi quis viverra ornare, eros dolor interdum nulla," + 
                "ut commodo diam libero vitae erat. Suspendisse varius enim" + 
                "in eros elementum tristique. Duis cursus, mi quis viverra" + 
                "ornare, eros dolor interdum nulla."}
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
              className="thq-img-ratio-16-6"
            />
          </a>}
          {/* Project Image Not Linked */}
          { !props.projectImageLink &&
            <img
              alt={props.projectImageAlt}
              src={props.projectImage}
              className="project-placeholder-image thq-img-ratio-16-6"
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
  longDescription: '',
  resumeBullets: '',
  relevantLinks: [],
  projectImageLink: '',
  projectImage:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  projectImageAlt: 'Image',
}

Project.propTypes = {
  projectName: PropTypes.string,
  roleTitle: PropTypes.string,
  timeline: PropTypes.string,
  tools: PropTypes.array,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.element,
  resumeBullets: PropTypes.array,
  relevantLinks: PropTypes.array,
  projectImageLink: PropTypes.string,
  projectImage: PropTypes.string,
  projectImageAlt: PropTypes.string,
}

export default Project
