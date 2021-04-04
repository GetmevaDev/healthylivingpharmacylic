import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"



export function Services(){

  const data = useStaticQuery(graphql`
      {
          strapiNavigationMenu {
              Menu_Items {
                  Page
                  Link_Page
                  Submenu {
                      id
                      Page
                      Link_Page
                  }
              }
          }
      }
  `)

  return(
    <div className={`blocks-footer`}>
      <h2>Services</h2>
      <ul>
        {
          data.strapiNavigationMenu.Menu_Items[1].Submenu.map((item, i) =>{
            if (i !== 4){
              return(
                <li>
                  <Link to={item.Link_Page}>
                    {item.Page}
                  </Link>
                </li>
              )
            }else{
             return null
            }

          }

          )
        }
      </ul>
    </div>
  )
}