import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "./logo.module.scss"


export function Logo(){

  const data = useStaticQuery(graphql`
      {
          strapiSiteLogo {
              Image {
                  url
                  alternativeText
              }
          }
      }
  `)

  return(
    <div className={classes.logo}>

      <img
        src={data.strapiSiteLogo.Image[0].url}
        alt={data.strapiSiteLogo.Image[0].alternativeText}
      />
    </div>
  )
}