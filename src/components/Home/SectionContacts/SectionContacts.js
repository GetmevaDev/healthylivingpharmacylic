import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { Contacts } from "../../common/Contacts/Contacts"
import * as classes from "./sectionContacts.module.scss"


export function SectionContacts(){

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Contacts {
                  Title
                  Pretitle
              }
          }
      }
  `)

  return(
    data.strapiHomePage.Section_Contacts ? <section className={classes.sectionContacts}>
      <div className={`container row ${classes.flexStyles}`}>
        <div className={classes.contact}>
          <h3 style={{textAlign: `left`}} className={`pretitileSection`}>{data.strapiHomePage.Section_Contacts.Pretitle}</h3>
          <h2 style={{textAlign: `left`, marginBottom: 34}} className={`titleSection`}>{data.strapiHomePage.Section_Contacts.Title}</h2>
          <Contacts />
        </div>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.540836208673!2d-73.94290068459388!3d40.750127979327715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258d5ebd00001%3A0x502036dda620abfc!2sHealthy%20Living%20Pharmacy%20LIC!5e0!3m2!1sru!2s!4v1615990462387!5m2!1sru!2s"
            width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy"
          />
        </div>
      </div>
    </section> : null
  )
}