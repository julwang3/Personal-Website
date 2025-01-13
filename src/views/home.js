import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Project from '../components/project'
import Footer from '../components/footer'
import './view.css'

import MSGSphere from '../images/sphere.jpg'
import ICT from '../images/ict.png'
import POSEIDON from '../images/poseidon.jpg'
import FreeWill from '../images/freewill.png'
import Blossom from '../images/blossom.jpg'


const Home = () => {
  return (
    <div className="container">
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
        tags={["swe", "gd"]}

        shortDescription="Live entertainment and media company creating immersive entertainment experiences and advancing visual, audio, and interactive technologies at cutting-edge venues like the Sphere in Las Vegas."
        toolsUsed="C#, Git, Unity 3D, Jira, Confluence, Bitbucket, Oculus Quest 2"

        longDescription={
          <span>
            I was a software engineer on the <b>Simulation and Visualizations (SimVis)</b> team, a team developing software products used internally for content production at Sphere as well as other Madison Square Garden properties. As a <b>Software Engineering Student Associate</b> for SimVis, I...
          </span>
        }
        resumeBullet1="Worked on a multiuser Virtual Reality and Desktop application used by creatives at the Sphere for simulataneous media playback and reviewing."
        resumeBullet2="Implemented moveable user interface panels in 2D and 3D space, optimizing user experience and productivity."
        resumeBullet3="Communicated closely with the engineering team to design architecture solution, create detailed technical specification for, and prototype moveable panels using Agile methodologies."
        resumeBullet4="Tackled and resolved a critical bug in the in-built debug panel used by developers when debugging and testing builds and further developed the feature so that logs can be cleared and saved across all platforms."

        projectImageLink='https://www.thesphere.com/'
        projectImage={MSGSphere}
      ></Project>

      {/* USC ICT */}
      <Project
        projectName="USC Institute for Creative Technologies"
        roleTitle="Game Engineer"
        timeline="February 2023 – May 2024"
        tags={["swe", "gd"]}

        shortDescription="Research institution conducting award-winning R&D in many fields including Artificial Intelligence, Simulation & Gaming, and Mixed Reality."
        toolsUsed="C#, Git, Unity 3D"

        longDescription={
          <div>
          <span>
            As a <b>Game Engineer</b> at the USC Institute for Creative Technologies, I worked on the development of interactive experiences centered around <b>Artificial Intelligence education</b> under Dr. Ning Wang. More specifically, I…
          </span>
          </div>
        }
        resumeBullet1="Collaborated with 5 researchers and engineers to design and develop a 3D first-person game aiming to help the general public learn more about foundational concepts, ethics, and applications of Artificial Intelligence in an engaging manner."
        resumeBullet2="Integrated face landmark detection and swap through MediaPipe Solutions API that is part of Virtual Human Exhibit at Berkeley’s Lawrence Hall of Science with 100+ visitors a day."
        resumeBullet3="Delivered and conceptualized prototypes featuring 3D gameplay interactions and sequences demonstrating how Artificial Intelligence education is achieved through gameplay experience and interactive narratives."

        projectImageLink='https://ict.usc.edu/'
        projectImage={ICT}
      ></Project>

      {/* POSEIDON */}
      <Project
        projectName="POSEIDON Mission Control"
        roleTitle="Backend Software Engineer"
        timeline="January 2024 – May 2024"
        tags={["swe"]}

        shortDescription="Portable mission control and planning software designed to streamline satellite mission operations and provide a centralized platform for orbit calculations, predictions, and automatic event scheduling."
        toolsUsed="Python, Git, Jira, Confluence"

        longDescription={
          <span>
            POSEIDON Mission Control was developed for the the MAVERIC CubeSat project led by Professor David Barnhart at the USC Information Sciences Institute. As a <b>Backend Software Engineer</b>, I...
          </span>
        }
        resumeBullet1="Designed and engineered the application with 5 other engineers, streamlining the satellite mission operations and providing a centralized platform for orbit calculations and predictions."
        resumeBullet2="Automated event creation, updating, and deletion using Python API calls, allowing for more efficient event scheduling and notification for satellite pass times."
        resumeBullet3="Integrated and defined API calls for two-line element data retrieval, providing orbital information on a given satellite."
        resumeBullet4="Communicated with shareholders on weekly basis, effectively providing updates on progress, addressing issues, and ensuring project objectives were being met."

        projectImage={POSEIDON}
      ></Project>

      {/* Free Will */}
      <Project
        projectName="Free Will"
        roleTitle="Gameplay Engineer"
        timeline="August 2023 - July 2024"
        tags={["gd"]}

        shortDescription="2D psychological puzzle RPG where you control a young boy named Will and cleanse corruption by solving meta-puzzles, tweaking system files, and battling reality-warping monsters."
        toolsUsed="C#, Perforce, Unity 2D"

        longDescription={
          <span>
            As a <b>Gameplay Engineer</b>, I...
          </span>
        }
        resumeBullet1="Experimented with designing and developing metapuzzles utilizing .NET Win32 APIs that break the fourth wall to explore the concept of free will in and outside the game."
        resumeBullet2="Programmed wrapper for Steamworks API in Unity, enabling further user engagement through Steam Achievements."
        resumeBullet3="Animated in-game cutscenes with Unity’s animator and timeline to convey a sense of fear and helplessness."

        relevantLinks={[
          { name: 'Website', url: 'https://www.freewillgame.com/' },
          { name: 'Steam', url: 'https://store.steampowered.com/app/2571880/Free_Will/' },
        ]}

        projectImageLink='https://www.freewillgame.com/'
        projectImage={FreeWill}
      ></Project>

      {/* Blossom */}
      <Project
        projectName="Blossom"
        roleTitle="Lead Engineer"
        timeline="July 2022 - May 2023"
        tags={["swe"]}

        shortDescription="Interactive novel brought to life with a pop-up book controller telling the coming-of-age story of a Chinese-American girl named Aspen as she navigates her self of identity amidst the weight of external pressures, labels, and expectations. Featured at the Game Developer's Conference 2023."
        toolsUsed="C#, C, Git, Unity 2D, Arduino"

        longDescription={
          <span>
            As a <b>Lead Engineer</b>, I...
          </span>
        }
        resumeBullet1="Collaborated regularly with the creative director and 4+ designers to design and engineer puzzles that furthered the story's central themes on self-labels, image, and reconciliation for an alternative controller."
        resumeBullet2="Innovated tactile puzzle mechanics in C and C# that received external sensor input detecting physical interactions including touch, dial turns, and item placement."

        relevantLinks={[
          { name: 'Website', url: 'https://blossom-901ae0.webflow.io/' },
          { name: 'alt.ctrl.GDC 2023', url: 'https://gdconf.com/news/here-are-outstanding-games-coming-altctrlgdc-gdc-2023' },
        ]}

        projectImageLink='https://blossom-901ae0.webflow.io/'
        projectImage={Blossom}
      ></Project>
      
      <Footer></Footer>
    </div>
  )
}

export default Home
