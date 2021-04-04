import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { SectionContent } from "../components/Services Page/SectionContent/SectionContent"


const Services = ({ data }) => {

  const {Title, Text, Image} = data.strapiServices;

  return(
    <Layout marginSocialMedia={'34%'}>
      <SectionHeader
        pretitle={'Our Services'}
        classSection={'aboutDr services'}
        title={'Healthy Living Services'}
        image={Image}
      />
      <SectionContent data={data.strapiServices} />
    </Layout>
  )
}

export default Services
export const query = graphql`
    query ServicesTemplate($slug: String) {
        strapiServices(slug: { eq: $slug }) {
            Title
            Text
            slug
            Image {
                alternativeText
                url
            }
        }
    }
`