import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from'../components/Reuseable/HeroSection'
import Infoblock from'../components/Reuseable/Infoblock'
import Dualinfoblock from'../components/Reuseable/Dualinfoblock'
import Teamphotosection from'../components/About/Teamphotosection'


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="i write code "
      subtitle="learncode online tech qamar"
      heroclass="about-background"
    />
    <Dualinfoblock heading="Our project"/>
    <Infoblock heading="Our Team" />
    
    <Teamphotosection/>
    
  </Layout>
)
export const query = graphql `{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
