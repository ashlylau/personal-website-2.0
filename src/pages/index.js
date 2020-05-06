import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero"
import ExperienceSection from "../components/experience"
import ProjectsSection from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='hero' >
      <p>Hey, I'm Ashly.</p>
      <p>Currently an incoming SWE intern at Google.</p>
      <HeroComponent/>
    </div>

    <ExperienceSection/>
    <ProjectsSection />
  </Layout>
)

export default IndexPage
