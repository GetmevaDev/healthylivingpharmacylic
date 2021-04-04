import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "./paymentMethods.module.scss"


export function PaymentMethods(){

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Payment_Methods {
                  Text
                  Image {
                      alternativeText
                      url
                  }
                  Images {
                      Image {
                          alternativeText
                          url
                      }
                  }
              }
          }
      }
  `)

  return(
    <div className={`blocks-footer`}>
      <h2>Payment Methods</h2>
      <div className={classes.border}>
        {
          data.strapiContacts.Payment_Methods.Images.map(item => (
            <span className={`'image-pay'`}>
              <img
                src={item.Image[0].url}
                alt={item.Image[0].alternativeText}
              />
            </span>

          ))
        }
      </div>
      <div className={`row ${classes.flexStyle}`}>
        <h2 className={classes.title}>{data.strapiContacts.Payment_Methods.Text}</h2>
        <span className={classes.image}>
          <img
            src={data.strapiContacts.Payment_Methods.Image[0].url}
            alt={data.strapiContacts.Payment_Methods.Image[0].alternativeText}
          />
        </span>

      </div>
    </div>
  )
}