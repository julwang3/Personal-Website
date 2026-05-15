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
// import PortalJSON from '../projects/portal.json'
import BlossomJSON from '../projects/blossom.json'
import WatWJSON from '../projects/watw.json'
import ClosureJSON from '../projects/closure.json'

import MSGSphere from '../images/sphere.gif'
import ICT from '../images/ict.gif'
import POSEIDON from '../images/poseidon.jpg'
import FreeWill from '../images/freewill.gif'
// import Portal from '../images/portal.png'
import Blossom from '../images/blossom.gif'
import WatW from '../images/watw.gif'
import Closure from '../images/closure.gif'

const projectsData = {
  work: [
    {
      json: MSGSphereJSON,
      image: MSGSphere
    },
    {
      json: POSEIDONJSON,
      image: POSEIDON
    },
    {
      json: ICTJSON,
      image: ICT
    }
  ],
  projects: [
    {
      json: ClosureJSON,
      image: Closure
    },
    {
      json: WatWJSON,
      image: WatW
    },
    {
      json: FreeWillJSON,
      image: FreeWill
    },
    // {
    //   json: PortalJSON,
    //   image: Portal
    // },
    {
      json: BlossomJSON,
      image: Blossom
    }
  ]
}

const work = await jsonify(projectsData.work.map(p => p.json))
const projects = await jsonify(projectsData.projects.map(p => p.json))

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

      {/* Projects */}

      <div className={`view-heading-padding`}>
        <h2><Fragment>
            <span className="view-heading">
              Projects
            </span>
        </Fragment></h2>
        <hr />
      </div>

      { projects && projects.map((project, index) => (
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
          projectImage={projectsData.projects[index].image}
          inProgress={project.inProgresss}
          awards={JSON.parse(JSON.stringify(project.awards))}
        />
      ))}

      {/* Work Experience */}

      <div className={`view-heading-padding`}>
        <h2><Fragment>
            <span className="view-heading">
              Work Experience
            </span>
        </Fragment></h2>
        <hr />
      </div>
      { work && work.map((project, index) => (
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
          projectImage={projectsData.work[index].image}
          inProgress={project.inProgress}
          awards={JSON.parse(JSON.stringify(project.awards))}
        />
      ))}

      <Footer></Footer>
    </div>
  )
}

export default Home
