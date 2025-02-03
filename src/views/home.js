import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Project from '../components/project'
import Footer from '../components/footer'
import './view.css'

import MSGSphereJSON from '../projects/msg.json'
import ICTJSON from '../projects/ict.json'
import POSEIDONJSON from '../projects/poseidon.json'
import FreeWillJSON from '../projects/freewill.json'
import PortalJSON from '../projects/portal.json'
import BlossomJSON from '../projects/blossom.json'
import WatWJSON from '../projects/watw.json'
import ClosureJSON from '../projects/closure.json'

import MSGSphere from '../images/sphere.gif'
import ICT from '../images/ict.gif'
import POSEIDON from '../images/poseidon.jpg'
import FreeWill from '../images/freewill.gif'
import Portal from '../images/portal.png'
import Blossom from '../images/blossom.jpg'
import WatW from '../images/watw.jpg'
import Closure from '../images/closure.jpg'

// UPDATE WHEN ADDING NEW PROJECTS/JSONS
// START
const workJSONs = [ 
  MSGSphereJSON,
  ICTJSON,
]
const projectJSONs = [
  POSEIDONJSON,
  FreeWillJSON,
  PortalJSON,
  BlossomJSON,
]
const upcomingProjectJSONs = [
  WatWJSON,
  ClosureJSON
]
const projectImageMap = {
  'Madison Square Garden Sphere Entertainment Co.' : MSGSphere,
  'USC Institute for Creative Technologies' : ICT,
  'POSEIDON Mission Control' : POSEIDON,
  'Free Will' : FreeWill,
  'Portal (Remake)' : Portal,
  'Blossom' : Blossom,
  'The Wind and the Wisp' : WatW,
  'Closure' : Closure,
}
// END

const work = await jsonify(workJSONs)
const projects = await jsonify(projectJSONs)
const upcomingProjects = await jsonify(upcomingProjectJSONs)

async function jsonify(files) {
  const data = []
  for (let i = 0; i < files.length; i++) {
    data[i] = JSON.parse(JSON.stringify(files[i]));
  }
  return data;
}

const Home = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>

      <NavBar></NavBar>

      {/* Work Experience */}

      <div className={`view-heading-padding`}>
        <h2><Fragment>
            <span className="view-heading">
              Work Experience
            </span>
        </Fragment></h2>
        <hr />
      </div>
      { work && work.map((project) => (
        <Project
          projectName={project.projectName}
          roleTitle={project.roleTitle}
          timeline={project.timeline}
          tools={project.tools}
          shortDescription={project.shortDescription}
          longDescription={project.longDescription}
          resumeBullets={project.resumeBullets}
          relevantLinks={JSON.parse(JSON.stringify(project.relevantLinks))}
          projectImageLink={project.projectImageLink}
          projectImage={projectImageMap[project.projectName]}
        />
      ))}

      {/* Projects */}

      <div className={`view-heading-padding`}>
        <h2><Fragment>
            <span className="view-heading">
              Projects
            </span>
        </Fragment></h2>
        <hr />
      </div>

      { projects && projects.map((project) => (
        <Project
          projectName={project.projectName}
          roleTitle={project.roleTitle}
          timeline={project.timeline}
          tools={project.tools}
          shortDescription={project.shortDescription}
          longDescription={project.longDescription}
          resumeBullets={project.resumeBullets}
          relevantLinks={JSON.parse(JSON.stringify(project.relevantLinks))}
          projectImageLink={project.projectImageLink}
          projectImage={projectImageMap[project.projectName]}
        />
      ))}

      {/* Upcoming Projects */}

      <div className={`view-heading-padding`}>
        <h2><Fragment>
            <span className="view-heading">
              Upcoming Projects
            </span>
        </Fragment></h2>
        <hr />
      </div>

      { upcomingProjects && upcomingProjects.map((project) => (
        <Project
          projectName={project.projectName}
          roleTitle={project.roleTitle}
          timeline={project.timeline}
          tools={project.tools}
          shortDescription={project.shortDescription}
          longDescription={project.longDescription}
          resumeBullets={project.resumeBullets}
          relevantLinks={JSON.parse(JSON.stringify(project.relevantLinks))}
          projectImageLink={project.projectImageLink}
          projectImage={projectImageMap[project.projectName]}
        />
      ))}

      <Footer></Footer>
    </div>
  )
}

export default Home
