import React from "react"
import ReactMarkdown from "react-markdown"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "./content.module.scss"

export function Content({content}){

  const data = useStaticQuery(graphql`
      {
          strapiServicesPages {
              Call_for_more_information {
                  Text
                  image {
                      alternativeText
                      url
                  }
                  Phone
              }
              Description {
                  Image {
                      alternativeText
                      url
                  }
                  Text
                  Text_Link
                  Link
              }
          }
      }
  `)

  return(
    <div className={classes.textContainer}>
      <h2>{content.Title}</h2>
      <ReactMarkdown source={content.Text} />

      <div className={classes.blockLink}>
        <span>{data.strapiServicesPages.Call_for_more_information.Text}</span>
        <img
          src={data.strapiServicesPages.Call_for_more_information.image[0].url}
          alt={data.strapiServicesPages.Call_for_more_information.image[0].alternativeText} />
        <a href={`tel:${data.strapiServicesPages.Call_for_more_information.Phone}`}>
          {data.strapiServicesPages.Call_for_more_information.Phone}
        </a>
      </div>
      <div className={`row ${classes.blockDescription}`}>
        <div className={classes.blockImage}>
          <img
            src={data.strapiServicesPages.Description.Image[0].url}
            alt={data.strapiServicesPages.Description.Image[0].alternativeText}
          />
        </div>

        <div className={classes.blockText}>
          <p>{data.strapiServicesPages.Description.Text}</p>
          <a href={data.strapiServicesPages.Description.Link}>{data.strapiServicesPages.Description.Text_Link}</a>
        </div>
      </div>
    </div>
  )
}