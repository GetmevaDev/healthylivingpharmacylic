import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "./sectionConsultation.module.scss"

export function SectionConsultation({marginTop}){

  const data = useStaticQuery(graphql`
      {
          strapiSectionToConsultation {
              Title
              Text
              Text_Link
              Link
              Background_Section {
                  url
              }
          }
      }
  `);
  const sectionData = data.strapiSectionToConsultation;

  return(
    sectionData ?  <section
      className={classes.sectionStyle}
      style={{
        background: `url("${sectionData.Background_Section[0].url}")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        marginTop: marginTop,
      }}>
      <div className="container">
        <h2>{sectionData.Title}</h2>
        <p>{sectionData.Text}</p>
        <a href={sectionData.Link}>{sectionData.Text_Link}</a>
      </div>
    </section> : null
  )
}