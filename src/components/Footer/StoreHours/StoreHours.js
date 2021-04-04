import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as classes from "./storeHours.module.scss"




export function StoreHours(){

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Store_Hours {
                  id
                  Days
                  Time
              }
          }
          linkContactPage: strapiNavigationMenu {
              Menu_Items {
                  Link_Page
                  Page
              }
          }
      }
  `)

  return(
    <div className={`blocks-footer`}>
      <h2>Store Hours</h2>
      <ul>
        {
          data.strapiContacts.Store_Hours.map(item =>(
            <li className={classes.listHours} key={item.id}>
              <strong>{item.Days}</strong>
              <span>{item.Time}</span>
            </li>
          ))
        }
      </ul>
      <Link className={classes.linkContactPage} to={data.linkContactPage.Menu_Items[5].Link_Page}>{data.linkContactPage.Menu_Items[5].Page}</Link>
    </div>
  )
}