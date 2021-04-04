import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"




export function Pages(){

  const data = useStaticQuery(graphql`
      {
          strapiNavigationMenu {
              Menu_Items {
                  Page
                  Link_Page
                  Take_out_to_the_footer
                  id
              }
          }
      }
  `)


  return(
    <div className={`blocks-footer`}>
      <h2>Pages</h2>
      <ul>
        {
          data.strapiNavigationMenu.Menu_Items.map((item, i) =>{
            return(
              item.Take_out_to_the_footer ?  <li>
                  <Link to={item.Link_Page} >
                    {item.Page}
                  </Link>
                </li> : null
              )
        })
        }


      </ul>
    </div>
  )
}