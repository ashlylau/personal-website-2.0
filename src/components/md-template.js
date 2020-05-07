import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import style from "../styles/markdown.module.css"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.image.childImageSharp.fluid
  
  return (
    <Layout>
    <SEO title={frontmatter.title} description={frontmatter.desc}/>
    <div className={style.container}>
        <div className="blog-post">
            <p className='my-h1'>{frontmatter.title}</p>
            <Img className={style.mainImage} fluid={featuredImgFluid}/>

            <div className={style.subtitle}>
            <p className='my-h2'>{frontmatter.desc}</p>
            <p className='my-body'>{frontmatter.additional}</p>
            </div>

            <div
            className={style.content} style={{maxWidth: `600px`, margin: 'auto'}}
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        title
        desc
        additional
      }
    }
  }
`