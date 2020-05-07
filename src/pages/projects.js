import React from "react"
import { Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/section-header"
import ProjectItem from "../components/project-item"

import cinect from "../images/projects/cinect.png"
import charje from "../images/projects/charje.png"
import stitchcall from "../images/projects/stitch-call.png"

const projectInfo = [
  {
      image: cinect,
      title: 'Cinect',
      path: '/projects/cinect',
      desc: 'Social film discovery',
  },
  {
      image: charje,
      title: 'CHARJE',
      path: '/projects/charje',
      desc: 'An agent-based prediction marketplace implemented on a blockchain',
  },
  {
      image: stitchcall,
      title: 'Stitch Call',
      path: '/projects/stitch-call',
      desc: 'A non-conventional video call platform',
  },
  {
      image: cinect,
      title: 'Cinect',
      path: '/projects/cinect',
      desc: 'Mobile app to help you choose movies with your friends',
  },
  {
      image: charje,
      title: 'CHARJE',
      path: '/projects/charje',
      desc: 'An agent-based prediction marketplace implemented on a blockchain',
  },
  {
      image: stitchcall,
      title: 'Stitch Call',
      path: '/projects/stitch-call',
      desc: 'A non-conventional video call platform',
  }
]

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <SectionHeader props={{title:'PROJECTS', color: '#30838D'}} />
    <p className='my-h2'>Here are some projects that I've worked on.</p>
    <div>
      <Row>
        {projectInfo.map((project) => <ProjectItem props={project}/>)}
      </Row>
    </div>
  </Layout>
)

export default Projects
