import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="i write code "
      subtitle="learncode online tech qamar"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses} />

    <Dualinfoblock heading="our project"/>
  </Layout>
)
export const query = graphql `{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:100,height:120 ){
            src
            
          }
        }
      }
    }
  }
}
`

export default IndexPage
