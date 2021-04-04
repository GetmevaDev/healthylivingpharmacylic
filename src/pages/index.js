import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { Card } from "../components/common/Card/Card"
import { AboutUs } from "../components/Home/AboutUs/AboutUs"
import { SectionConsultation } from "../components/common/SectionConsultation/SectionConsultation"
import { SectionContacts } from "../components/Home/SectionContacts/SectionContacts"
import "../scss/main.scss"

const IndexPage = ({data}) => (
  <Layout marginSocialMedia={50}>
    <SectionHeader
      pretitle={data.strapiHomePage.Section_Header.Pretitle}
      title={data.strapiHomePage.Section_Header.Title}
      linkReadMore={data.strapiHomePage.Section_Header.Link}
      images={data.strapiHomePage.Section_Header.Slide_Images}
    />
    <Card data={data.strapiHomePage.Our_Advantages} variant={false} />
    <AboutUs />
    <SectionConsultation />
      <SectionContacts />
  </Layout>
)

export default IndexPage
export const query = graphql`
    {
        strapiHomePage {
            Section_Header {
                Pretitle
                Title
                Link
                Slide_Images {
                    alternativeText
                    url
                }
            }
            Our_Advantages {
                Pretitle
                Title
                Cards {
                    id
                    link
                    text
                    title
                    icon {
                        alternativeText
                        url
                    }
                }
            }
        }
    }
`