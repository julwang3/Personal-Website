import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Project from '../components/project'
import Footer from '../components/footer'
import './home.css'

import MSGSphere from '../images/sphere.jpg'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>

      <NavBar></NavBar>

      <Project
        projectName="Madison Square Garden Sphere Entertainment Co."
        roleTitle="Software Engineering Student Associate"
        timeline="May 2024 – August 2024"
        tags={
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
        }

        shortDescription="Live entertainment and media company creating immersive entertainment experiences and advancing visual, audio, and interactive technologies at cutting-edge venues like the Sphere in Las Vegas.
"
        toolsUsed="C#, Git, Unity 2D, Oculus Quest"

        longDescription="Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis 
                        sunt autdelenitsdfsadfi illum non repudiandae voluptatem. Aut 
                        praesentiumdoloribus qui distinctio neque ut unde temporibus. 
                        Cumexercitationem eveniet in omnis animi in corporis nulla."
        longDescriptionMore={
          <span>
            I worked as a <b>Software Engineer</b> on the Simulation and Visualizations team at Sphere where I…
          </span>
        }
        resumeBullet1="Worked on a multiuser software product used internally for content production and media playback at the Sphere and other Madison Square Garden properties."
        resumeBullet2="Implemented user-facing features that optimized user experiences by making user interface panels moveable in three-dimensional Virtual Reality space."
        resumeBullet3="Iterated through the Agile software development cycle, communicating closely with the team to design an architecture solution and create a detailed technical specification for moveable panels."

        rootClassName="projectroot-class-name"
        projectImage={MSGSphere}
      ></Project>
      
      <Footer></Footer>
    </div>
  )
}

export default Home
