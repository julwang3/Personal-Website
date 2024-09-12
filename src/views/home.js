import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Project from '../components/project'
import Footer from '../components/footer'
import './home.css'

import MSGSphere from '../images/sphere.jpg'
import ICT from '../images/ict.png'
import POSEIDON from '../images/poseidon.jpg'
import FreeWill from '../images/freewill.png'
import Blossom from '../images/blossom.jpg'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Julia Wang</title>
        <meta property="og:title" content="Julia Wang" />
      </Helmet>

      <NavBar></NavBar>

      {/* MSG Sphere */}
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

        shortDescription="Live entertainment and media company creating immersive entertainment experiences and advancing visual, audio, and interactive technologies at cutting-edge venues like the Sphere in Las Vegas."
        toolsUsed="C#, Git, Unity 3D, Oculus Quest, Atlassian"

        longDescription="Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis 
                        sunt autdelenitsdfsadfi illum non repudiandae voluptatem. Aut 
                        praesentiumdoloribus qui distinctio neque ut unde temporibus. 
                        Cumexercitationem eveniet in omnis animi in corporis nulla."
        longDescriptionMore={
          <span>
            I was a software engineer on the <b>Simulation and Visualizations (SimVis)</b> team, a team developing software products used internally for content production at Sphere as well as other Madison Square Garden properties. As a <b>Software Engineering Student Associate</b> for SimVis, I...
          </span>
        }
        resumeBullet1="Worked on a multiuser Virtual Reality and Desktop application used by creatives at the Sphere for simulataneous media playback and reviewing."
        resumeBullet2="Implemented user-facing features that optimized user experiences by making user interface panels moveable in three-dimensional Virtual Reality space."
        resumeBullet3="Iterated through the Agile software development cycle, communicating closely with the team to design an architecture solution and create a detailed technical specification for moveable panels."
        resumeBullet4="Tackled and resolved a critical bug in the in-built debug panel used by developers when debugging and testing builds and further developed the feature so that logs can be cleared and saved across all platforms."

        rootClassName="projectroot-class-name"
        projectImage={MSGSphere}
      ></Project>

      {/* USC ICT */}
      <Project
        projectName="USC Institute for Creative Technologies"
        roleTitle="Game Developer"
        timeline="February 2023 – May 2024"
        tags={
          <div className="project-container3">
            <label>
              <Fragment>
                <label className="project-text18 label">
                  Game Development
                </label>
              </Fragment>
            </label>
          </div>
        }

        shortDescription="Research institution conducting award-winning R&D in many fields including Artificial Intelligence, Simulation & Gaming, and Mixed Reality."
        toolsUsed="C#, Git, Unity 3D"

        longDescription="Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis 
                        sunt autdelenitsdfsadfi illum non repudiandae voluptatem. Aut 
                        praesentiumdoloribus qui distinctio neque ut unde temporibus. 
                        Cumexercitationem eveniet in omnis animi in corporis nulla."
        longDescriptionMore={
          <div>
          <span>
            As a <b>Game Developer</b> at the USC Institute for Creative Technologies, I worked on the development of interactive experiences centered around <b>Artificial Intelligence education</b> under Dr. Ning Wang. More specifically, I…
          </span>
          </div>
        }
        resumeBullet1="Designed and developed a 3D first-person game aiming to help the general public learn more about foundational concepts, ethics, and applications of Artificial Intelligence in an engaging manner."
        resumeBullet2="Integrated face landmark detection and face swap activity through MediaPipe Solutions API that is part of Virtual Human Exhibit at Berkeley’s Lawrence Hall of Science with 100+ visitors a day."
        resumeBullet3="Delivered prototype in collaboration with 4 engineers demonstrating how Artificial Intelligence education is achieved through gameplay experience and goals in 2 months."

        rootClassName="projectroot-class-name"
        projectImage={ICT}
      ></Project>

      {/* POSEIDON */}
      <Project
        projectName="POSEIDON Mission Control"
        roleTitle="Backend Engineer"
        timeline="January 2024 – May 2024"
        tags={
          <div className="project-container3">
            <label>
              <Fragment>
                <label className="project-text18 label">
                Software Engineering
                </label>
              </Fragment>
            </label>
          </div>
        }

        shortDescription="Portable mission control and planning software designed to streamline satellite mission operations and provide a centralized platform for orbit calculations, predictions, and automatic event scheduling."
        toolsUsed="Python, Git, Atlassian"

        longDescription="Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis 
                        sunt autdelenitsdfsadfi illum non repudiandae voluptatem. Aut 
                        praesentiumdoloribus qui distinctio neque ut unde temporibus. 
                        Cumexercitationem eveniet in omnis animi in corporis nulla."
        longDescriptionMore={
          <span>
            POSEIDON Mission Control was developed for the the MAVERIC CubeSat project led by Professor David Barnhart at the USC Information Sciences Institute. As a <b>Backend Engineer</b>, I...
          </span>
        }
        resumeBullet1="Automated creating, updating, and deleting of events using Python API calls to the Google Calendar API, allowing for more efficient event scheduling and notification."
        resumeBullet2="Integrated and defined API calls for two-line element data retrieval, providing orbital information on a given satellite."
        resumeBullet3="Corresponded with shareholders working on the MAVERIC CubeSat project directly at weekly meetings to provide updates on progress, address issues, and ensure project objectives were met."

        rootClassName="projectroot-class-name"
        projectImage={POSEIDON}
      ></Project>

      {/* Free Will */}
      <Project
        projectName="Free Will"
        roleTitle="Gameplay Engineer"
        timeline="August 2023 - July 2024"
        tags={
          <div className="project-container3">
            <label>
              <Fragment>
                <label className="project-text18 label">
                Game Development
                </label>
              </Fragment>
            </label>
          </div>
        }

        shortDescription="2D psychological puzzle RPG where you control a young boy named Will and cleanse corruption by solving meta-puzzles, tweaking system files, and battling reality-warping monsters."
        toolsUsed="C#, Unity 2D, Perforce"

        longDescription="Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis 
                        sunt autdelenitsdfsadfi illum non repudiandae voluptatem. Aut 
                        praesentiumdoloribus qui distinctio neque ut unde temporibus. 
                        Cumexercitationem eveniet in omnis animi in corporis nulla."
        longDescriptionMore={
          <span>
            As a <b>Gameplay Engineer</b>, I...
          </span>
        }
        resumeBullet1="Experimented with designing and developing metapuzzles utilizing .NET Win32 APIs that break the fourth wall to explore the concept of free will in and outside the game."
        resumeBullet2="Programmed wrapper for Steamworks API in Unity, enabling further user engagement through Steam Achievements."
        resumeBullet3="Animated in-game cutscenes with Unity’s animator and timeline to convey a sense of fear and helplessness."

        rootClassName="projectroot-class-name"
        projectImage={FreeWill}
      ></Project>

      {/* Blossom */}
      <Project
        projectName="Blossom"
        roleTitle="Engineering Lead"
        timeline="July 2022 - May 2023"
        tags={
          <div className="project-container3">
            <label>
              <Fragment>
                <label className="project-text18 label">
                Game Development
                </label>
              </Fragment>
            </label>
          </div>
        }

        shortDescription="Interactive novel brought to life with a pop-up book controller telling the coming-of-age story of a Chinese-American girl named Aspen as she navigates her self of identity amidst the weight of external pressures, labels, and expectations."
        toolsUsed="C#, C, Git, Unity 2D, Arduino"

        longDescription="Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis 
                        sunt autdelenitsdfsadfi illum non repudiandae voluptatem. Aut 
                        praesentiumdoloribus qui distinctio neque ut unde temporibus. 
                        Cumexercitationem eveniet in omnis animi in corporis nulla."
        longDescriptionMore={
          <span>
            As an <b>Engineering Lead</b>, I...
          </span>
        }
        resumeBullet1="Collaborated regularly with the creative director and 4+ designers to design and engineer puzzles that furthered the story's central themes on self-labels, image, and reconciliation for an alternative controller."
        resumeBullet2="Innovated tactile puzzle mechanics in C and C# that received external sensor input detecting physical interactions including touch, dial turns, and item placement."

        rootClassName="projectroot-class-name"
        projectImage={Blossom}
      ></Project>
      
      <Footer></Footer>
    </div>
  )
}

export default Home
