import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroComponent from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='hero' style={{marginTop: `10rem`, marginLeft: `6rem`, marginRight: `6rem`, maxWidth:600}}>
      <p>Hey, I'm Ashly.</p>
      <p>Currently an incoming SWE intern at Google.</p>
      <HeroComponent/>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
