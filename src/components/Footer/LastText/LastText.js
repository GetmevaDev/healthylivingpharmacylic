import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "./lastText.module.scss"


export function LastText(){

  const data = useStaticQuery(graphql`
    {
      strapiCommonData {
        Last_Text {
          Name_site
          Text
        }
      }
    }
  `)


  return(
    <div>
      <p className={classes.firstText}>{data.strapiCommonData.Last_Text.Name_site}</p>
      <p className={classes.secondText}>{data.strapiCommonData.Last_Text.Text}</p>
    </div>
  )
}