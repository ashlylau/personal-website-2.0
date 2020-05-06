import React from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/section-header"
import Image from "../components/image"

import gymnastics from "../images/about/ashly-getty.jpg"
import movies from "../images/about/movies.jpg"
import doodles from "../images/about/doodles.jpg"
import style from "../styles/about.module.css"

const aboutInfo = [
    {
        image: gymnastics,
        title: 'Gymnastics',
        path: 'about/gymnastics',
        desc: 'Another life',
    },
    {
        image: movies,
        title: 'Movies',
        path: 'about/movies',
        desc: 'I\'m a bit of a film buff',
    },
    {
        image: doodles,
        title: 'Doodles',
        path: 'about/doodles',
        desc: 'I get bored easily',
    }
]

const About = () => (
  <Layout>
    <SEO title="About" />
    <SectionHeader props={{title:'ABOUT', color: '#3598C1'}} />
    <p className='my-h2'>I like making people infer stuff about me.</p>
    <div>
      <Row>
        {aboutInfo.map((project) => <AboutItem props={project}/>)}
      </Row>
    </div>
  </Layout>
)

const AboutItem = ({props}) => (
  <Col md={4} sm={6}>
      <Link className='my-link' to={props.path}>
          <Image props={props}/>
          <div className={style.container}>
              <p className='my-h2'>{props.title}</p>
              <p className='my-body'>{props.desc}</p>
          </div>
      </Link>
  </Col>
);


export default About
