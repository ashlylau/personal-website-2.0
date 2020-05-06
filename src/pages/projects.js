import React from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/section-header"
import Image from "../components/image"

import cinect from "../images/projects/cinect.png"
import charje from "../images/projects/charje.png"
import stitchcall from "../images/projects/stitch-call.png"
import style from "../styles/projects.module.css"

const projectInfo = [
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

const ProjectItem = ({props}) => (
  <Col md={4} sm={6}>
    <div className={style.projectContainer}>
      <Link className='my-link' to={props.path}>
          <Image props={props}/>
          <div className={style.container}>
              <p className='my-h2'>{props.title}</p>
              <p className='my-body'>{props.desc}</p>
          </div>
      </Link>
    </div>
  </Col>
);

export default Projects
