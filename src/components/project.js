import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import LearnMore from './learn-more'
import './project.css'

const Project = (props) => {
  return (
    <div
      className={`project-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="project-layout350"
      >
        <div className="project-max-width thq-section-max-width">
          <div className="project-content">
            <div className="project-section-title">
              <div className="project-container1">
                <h2>
                  <Fragment>
                    <h2 className="project-text22 thq-heading-2">
                      {props.projectName}
                    </h2>
                  </Fragment>
                </h2>
                <div className="project-container2">
                  <span>
                    <Fragment>
                      <span className="project-text17 thq-body-large">
                        {props.roleTitle}
                      </span>
                    </Fragment>
                  </span>
                  <span>
                    <Fragment>
                      <span className="project-text19 thq-body-large">
                          •  
                      </span>
                    </Fragment>
                  </span>
                  <span>
                    <Fragment>
                      <span className="project-text20 thq-body-large">
                        {props.timeline}
                      </span>
                    </Fragment>
                  </span>
                </div>
                {props.tags ?? (
                  <div className="project-container3">
                    <label>
                      <Fragment>
                        <label className="project-text23 label">
                          Software Engineering
                        </label>
                      </Fragment>
                    </label>
                    <label>
                      <Fragment>
                        <label className="project-text18 label">
                          Game Development
                        </label>
                      </Fragment>
                    </label>
                  </div>
                )}
              </div>
              <p>
                <Fragment>
                  <p className="project-text21 thq-body-large">
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
              <p className="project-technologies-used">
                <Fragment>
                  <p className="project-text13 thq-body-large"><b>
                    <span className="project-text14">Tools</span>
                    <span className="project-text15">
                      :
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                      <span>{props.toolsUsed}</span>
                  </b></p>
                </Fragment>
              </p>
            </div>
          </div>
          <div className="project-image-container">
            <img
              alt={props.projectImageAlt}
              src={props.projectImage}
              className="project-placeholder-image thq-img-ratio-16-9"
            />
          </div>
        </div>
        <div className="project-actions">
          <LearnMore
            longDescription={props.longDescription}
            longDescriptionMore={props.longDescriptionMore}
            resumeBullet1={props.resumeBullet1}
            resumeBullet2={props.resumeBullet2}
            resumeBullet3={props.resumeBullet3}
            resumeBullet4={props.resumeBullet4}
          ></LearnMore>
        </div>
      </div>
    </div>
  )
}

Project.defaultProps = {
  rootClassName: '',
  projectName: '',
  roleTitle: '',
  timeline: '',
  tags: undefined,
  shortDescription: '',
  toolsUsed: '',
  longDescription: undefined,
  longDescriptionMore: undefined,
  resumeBullet1: '',
  resumeBullet2: '',
  resumeBullet3: '',
  projectImage:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
    projectImageAlt: 'Image',
}

Project.propTypes = {
  rootClassName: PropTypes.string,
  projectName: PropTypes.string,
  roleTitle: PropTypes.string,
  timeline: PropTypes.string,
  tags: PropTypes.element,
  shortDescription: PropTypes.string,
  toolsUsed: PropTypes.string,
  longDescription: PropTypes.element,
  longDescriptionMore: PropTypes.element,
  resumeBullet1: PropTypes.string,
  resumeBullet2: PropTypes.string,
  resumeBullet3: PropTypes.string,
  projectImage: PropTypes.string,
  projectImageAlt: PropTypes.string,
}

export default Project
