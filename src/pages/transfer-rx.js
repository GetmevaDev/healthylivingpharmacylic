import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { FormPrescription } from "../components/TransferRX/FormPrescription/FormPrescription"
import "../scss/main.scss"

const TransferRX = ({data}) => {

  return(
    <Layout marginSocialMedia={'34%'}>
      <SectionHeader
        classSection={`aboutDr contacts`}
        pretitle={data.strapiTransferRx.Pretitle}
        title={data.strapiTransferRx.Title}
        image={data.strapiTransferRx.Image}
      />
      <FormPrescription />
    </Layout>
  )
}


export default TransferRX
export const query = graphql`
    {
        strapiTransferRx {
            Pretitle
            Title
            Image {
                alternativeText
                url
            }
        }
    }
`