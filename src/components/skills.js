import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './skills.css'

const Skills = (props) => {
  return (
    <div
      className={`skills-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <h2>
        {props.feature1Title2 ?? (
          <Fragment>
            <h2 className="skills-text3 thq-heading-2 thq-section-max-width">
              Skills
            </h2>
          </Fragment>
        )}
      </h2>
      <div className="skills-max-width thq-section-max-width">
        <div className="skills-section-title1">
          <h2>
            {props.feature1Title ?? (
              <Fragment>
                <h2 className="skills-text2 thq-heading-3"> Languages</h2>
              </Fragment>
            )}
          </h2>
          <div className="skills-content1">
            <div className="skills-card10">
              <img
                alt={props.member4Alt16}
                src={props.member4Src16}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card11">
              <img
                alt={props.member4Alt151}
                src={props.member4Src151}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card12">
              <img
                alt={props.member4Alt141}
                src={props.member4Src141}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card13">
              <img
                alt={props.member4Alt131}
                src={props.member4Src131}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card14">
              <img
                alt={props.member4Alt121}
                src={props.member4Src121}
                className="thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div className="skills-section-title2">
          <h2>
            {props.feature1Title4 ?? (
              <Fragment>
                <h2 className="skills-text1 thq-heading-3">Tools</h2>
              </Fragment>
            )}
          </h2>
          <div className="skills-content2">
            <div className="skills-card15">
              <img
                alt={props.member4Alt161}
                src={props.member4Src1611}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card16">
              <img
                alt={props.member4Alt15111}
                src={props.member4Src1511}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card17">
              <img
                alt={props.member4Alt1411}
                src={props.member4Src1411}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card18">
              <img
                alt={props.member4Alt13111}
                src={props.member4Src1311}
                className="thq-img-ratio-1-1"
              />
            </div>
            <div className="skills-card19">
              <img
                alt={props.member4Alt1211}
                src={props.member4Src12111}
                className="thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Skills.defaultProps = {
  member4Alt1211: '',
  member4Src121:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src5:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Alt16: '',
  member4Alt121: '',
  member4Alt13111: '',
  member4Src151:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src1311:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src1411:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  feature1Title4: undefined,
  member4Src2:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src141:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src16:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src131:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Alt161: '',
  member4Alt131: '',
  member4Src1511:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Alt151: '',
  member4Alt141: '',
  member4Src3:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Alt1411: '',
  member4Src1611:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src4:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member4Src12111:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1400',
  rootClassName: '',
  feature1Title: undefined,
  member4Alt15111: '',
  feature1Title2: undefined,
}

Skills.propTypes = {
  member4Alt1211: PropTypes.string,
  member4Src121: PropTypes.string,
  member4Src5: PropTypes.string,
  member4Alt16: PropTypes.string,
  member4Alt121: PropTypes.string,
  member4Alt13111: PropTypes.string,
  member4Src151: PropTypes.string,
  member4Src1311: PropTypes.string,
  member4Src1411: PropTypes.string,
  feature1Title4: PropTypes.element,
  member4Src2: PropTypes.string,
  member4Src141: PropTypes.string,
  member4Src16: PropTypes.string,
  member4Src131: PropTypes.string,
  member4Alt161: PropTypes.string,
  member4Alt131: PropTypes.string,
  member4Src1511: PropTypes.string,
  member4Alt151: PropTypes.string,
  member4Alt141: PropTypes.string,
  member4Src3: PropTypes.string,
  member4Alt1411: PropTypes.string,
  member4Src1611: PropTypes.string,
  member4Src4: PropTypes.string,
  member4Src12111: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  member4Alt15111: PropTypes.string,
  feature1Title2: PropTypes.element,
}

export default Skills
