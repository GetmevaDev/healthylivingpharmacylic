import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { SectionConsultation } from "../components/common/SectionConsultation/SectionConsultation"



const AboutDr = ({ data }) =>{

  const { Name, Specialization, Text, Photo} = data.strapiAboutDrs;

  return(
    <Layout marginSocialMedia={'34%'}>
      <SectionHeader
        classSection={'aboutDr'}
        title={Name}
        specialization={Specialization}
        text={Text}
        image={Photo}
      />
      <SectionConsultation marginTop={'102px'} />
    </Layout>
  )
}


export default AboutDr

export const query = graphql`
    query DrQuery($slug: String) {
        strapiAboutDrs(slug: { eq: $slug }) {
            Name
            Specialization
            Text
            slug
            Photo {
                alternativeText
                url
            }
        }
    }
`