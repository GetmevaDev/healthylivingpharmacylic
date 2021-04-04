import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import * as classes from "./menuServices.module.scss"



export function MenuServices(){

  const data = useStaticQuery(graphql`
      {
          allStrapiServices {
              nodes {
                  Title
                  slug
              }
          }
      }
  `);

  return(
    <div>
      <ul className={classes.menuContainer}>
        {
          data.allStrapiServices.nodes.map(item =>(
            <li>
              <Link activeStyle={{
                background: '#F07F21',
                color: '#fff',
              }} to={`/${item.slug}`}>{item.Title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}