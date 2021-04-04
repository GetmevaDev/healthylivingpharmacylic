import React from "react"
import * as classes from "./sectionContent.module.scss"
import { MenuServices } from "../MenuServices/MenuServices"
import { Content } from "../Content/Content"



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