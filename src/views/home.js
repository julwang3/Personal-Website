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

import MSGSphere from '../images/sphere.jpg'
import ICT from '../images/ict.png'
import POSEIDON from '../images/poseidon.jpg'
import FreeWill from '../images/freewill.png'
import Portal from '../images/portal.jpg'
import Blossom from '../images/blossom.jpg'

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
  // TODO : Closure, Wind & Wisp
]
const projectImageMap = {
  '../images/sphere.jpg' : MSGSphere,
  '../images/ict.png' : ICT,
  '../images/poseidon.jpg' : POSEIDON,
  '../images/freewill.png' : FreeWill,
  '../images/portal.jpg' : Portal,
  '../images/blossom.jpg' : Blossom,
}
// END

const work = await jsonify(workJSONs)
const projects = await jsonify(projectJSONs)
const upcomingProjects = await jsonify(upcomingProjectJSONs)

async function jsonify(files) {
  const data = []
  for (let i = 0; i < files.length; i++) {
    data[i] = JSON.parse(JSON.stringify(files[i]));
    console.log(data[i]);
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

      <div className={`home-heading-padding`}>
        <h2><Fragment>
            <span className="home-heading">
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
          projectImage={projectImageMap[project.projectImage]}
        />
      ))}

      {/* Projects */}

      <div className={`home-heading-padding`}>
        <h2><Fragment>
            <span className="home-heading">
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
          projectImage={projectImageMap[project.projectImage]}
        />
      ))}

      {/* Upcoming Projects */}

      {/* <div className={`home-heading-padding`}>
        <h2><Fragment>
            <span className="home-heading">
              Upcoming Projects
            </span>
        </Fragment></h2>
        <hr />
      </div> */}

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
          projectImage={projectImageMap[project.projectImage]}
        />
      ))}

      <Footer></Footer>
    </div>
  )
}

export default Home
