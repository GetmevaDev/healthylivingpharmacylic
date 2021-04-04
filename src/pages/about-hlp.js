import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { SectionConsultation } from "../components/common/SectionConsultation/SectionConsultation"
import { Card } from "../components/common/Card/Card"

import "../scss/main.scss"

const AboutHLP = ({data}) =>{

  const {Title, Text, Image} = data.strapiAboutHlp.Section_Header;


  return(
    <Layout marginSocialMedia={'34%'}>
      <SectionHeader
      classSection={'aboutPage'}
      title={Title}
      text={Text}
      image={Image}
      />
      <Card data={data.strapiAboutHlp} classStyles={'cardAbout'} />
      <SectionConsultation />
    </Layout>
  )
}


export default AboutHLP
export const query = graphql`
    {
        strapiAboutHlp {
            Section_Header {
                Title
                Text
                Image {
                    url
                    alternativeText
                }
            }
            Cards {
                photo {
                    alternativeText
                    url
                }
                id
                name
                specialization
                text
                link
            }
        }
    }
`