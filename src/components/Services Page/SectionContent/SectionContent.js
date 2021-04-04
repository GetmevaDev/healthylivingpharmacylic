import React from "react"
import { MenuServices } from "../MenuServices/MenuServices"
import { Content } from "../Content/Content"
import * as classes from "./sectionContent.module.scss"


export function SectionContent({data}){

  return(
    <section className={classes.sectionContent}>
      <div className={`container row ${classes.flexStyles}`}>
        <MenuServices />
        <Content content={data} />
      </div>
    </section>
  )
}