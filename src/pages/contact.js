import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { Contacts } from "../components/common/Contacts/Contacts"
import ContactForm from "../components/ContactUs/ContactForm/ContactForm"
import "../scss/main.scss"




const Contact = ({ data }) => {

  return(
    <Layout marginSocialMedia={'34%'}>
      <SectionHeader
        classSection={`aboutDr contacts`}
        title={data.strapiContacts.Section_Header.Title}
        text={data.strapiContacts.Section_Header.Text}
      />
      <Contacts
        className={`mtStyles`}
        container={true}
      />
      <ContactForm />
    </Layout>
  )
}


export default Contact
export const query = graphql`
    {
        strapiContacts {
            Section_Header {
                Title
                Text
            }
        }
    }
`