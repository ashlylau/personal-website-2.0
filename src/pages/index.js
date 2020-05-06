import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero"
import ExperienceSection from "../components/experience"
import ProjectsSection from "../components/projects"
import EducationSection from "../components/education"
import AboutSection from "../components/about"
import ContactSection from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='hero' >
      <p>Hey, I'm Ashly.</p>
      <p>Currently an incoming SWE intern at Google.</p>
      <HeroComponent/>
    </div>

    <Link to="/projects/stitch-call/">Go to my first Markdown blog post</Link>

    <ExperienceSection/>
    <ProjectsSection />
    <EducationSection />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
