import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Project from '../components/project'
import Footer from '../components/footer'
import './view.css'

import MSGSphereJSON from '../assets/projects/msg.json'
import ICTJSON from '../assets/projects/ict.json'
import POSEIDONJSON from '../assets/projects/poseidon.json'
import FreeWillJSON from '../assets/projects/freewill.json'
// import PortalJSON from '../assets/projects/portal.json'
import BlossomJSON from '../assets/projects/blossom.json'
import WatWJSON from '../assets/projects/watw.json'
import ClosureJSON from '../assets/projects/closure.json'
import DrenchedJSON from '../assets/projects/drenched.json'

import MSGSphere from '../assets/videos/sphere.mp4'
import ICT from '../assets/videos/ict.mp4'
import POSEIDON from '../assets/images/poseidon.webp'
import FreeWill from '../assets/videos/freewill.mp4'
// import Portal from '../images/portal.webp'
import Blossom from '../assets/videos/blossom.mp4'
import WatW from '../assets/videos/watw.mp4'
import Closure from '../assets/videos/closure.mp4'
import Drenched from '../assets/videos/drenched.mp4'

import MSGSpherePoster from '../assets/images/sphere-poster.webp'
import ICTPoster from '../assets/images/ict-poster.webp'
import FreeWillPoster from '../assets/images/freewill-poster.webp'
import BlossomPoster from '../assets/images/blossom-poster.webp'
import WatWPoster from '../assets/images/watw-poster.webp'
import ClosurePoster from '../assets/images/closure-poster.webp'
import DrenchedPoster from '../assets/images/drenched-poster.webp'

const projectsData = {
  work: [
    {
      json: MSGSphereJSON,
      media: MSGSphere,
      mediaType: "video",
      mediaPoster: MSGSpherePoster
    },
    {
      json: POSEIDONJSON,
      media: POSEIDON,
      mediaType: "image"
    },
    {
      json: ICTJSON,
      media: ICT,
      mediaType: "video",
      mediaPoster: ICTPoster
    }
  ],
  projects: [
    {
      json: DrenchedJSON,
      media: Drenched,
      mediaType: "video",
      mediaPoster: DrenchedPoster
    },
    {
      json: ClosureJSON,
      media: Closure,
      mediaType: "video",
      mediaPoster: ClosurePoster
    },
    {
      json: WatWJSON,
      media: WatW,
      mediaType: "video",
      mediaPoster: WatWPoster
    },
    {
      json: FreeWillJSON,
      media: FreeWill,
      mediaType: "video",
      mediaPoster: FreeWillPoster
    },
    // {
    //   json: PortalJSON,
    //   media: Portal,
      // mediaType: "image"
    // },
    {
      json: BlossomJSON,
      media: Blossom,
      mediaType: "video",
      mediaPoster: BlossomPoster
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
          projectMediaLink={project.projectMediaLink}
          projectMedia={projectsData.projects[index].media}
          projectMediaType={projectsData.projects[index].mediaType}
          projectMediaPoster={projectsData.projects[index].mediaPoster}
          inProgress={project.inProgress}
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
          projectMediaLink={project.projectMediaLink}
          projectMedia={projectsData.work[index].media}
          projectMediaType={projectsData.work[index].mediaType}
          projectMediaPoster={projectsData.work[index].mediaPoster}
          inProgress={project.inProgress}
          awards={JSON.parse(JSON.stringify(project.awards))}
        />
      ))}

      <Footer></Footer>
    </div>
  )
}

export default Home
