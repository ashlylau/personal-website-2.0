import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/home-page/hero"
import ExperienceSection from "../components/home-page/experience"
import ProjectsSection from "../components/home-page/projects"
import EducationSection from "../components/home-page/education"
import AboutSection from "../components/home-page/about"
import ContactSection from "../components/home-page/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='hero' >
      <p>Hey, I'm Ashly.</p>
      <p>Currently a Software Engineering Intern at Google.</p>
      <HeroComponent/>
    </div>

    <ExperienceSection/>
    <ProjectsSection />
    <EducationSection />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
