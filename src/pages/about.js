import React from "react"
import { Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/section-header"
import AboutItem from "../components/about-item"

import gymnastics from "../images/about/ashly-getty.jpg"
import movies from "../images/about/movies.jpg"
import doodles from "../images/about/doodles.jpg"

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

export default About
