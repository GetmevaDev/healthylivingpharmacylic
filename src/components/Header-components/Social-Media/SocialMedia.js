import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import * as classes from "./socialMedia.module.scss"

export function SocialMedia({marginLeft,  className }){
  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Social_Media {
                  Link
                  icon {
                      url
                      alternativeText
                  }
              }
          }
      }
  `)
  return(
    <ul style={{
      marginLeft: marginLeft,
    }} className={`row ${className}`}>
      {
        data.strapiContacts.Social_Media.map(list => (
          <li className={classes.icon}>
            <a href={list.Link}>
            <img src={list.icon[0].url} alt={list.icon[0].alternativeText} />
          </a>
          </li>
        ))
      }

    </ul>
  )
}