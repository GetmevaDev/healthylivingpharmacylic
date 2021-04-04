import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import AddressIcon from "../../../images/Loc.svg"
import PhoneIcon from "../../../images/Phone.svg"
import FaxIcon from "../../../images/Fax.svg"
import MailIcon from "../../../images/Mail.svg"

import * as classes from "./contacts.module.scss"



export function Contacts({ className, container }){

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Address
              Address_Link
              Phone
              Fax
              Email
          }
      }
  `);

  const {Address,Address_Link, Phone, Fax, Email } = data.strapiContacts;


  return(
    <div className={`${className} ${container ? 'container' : null}`}>
      <ul className={classes}>
        {
          Address ? <li className={classes.listItem}>
            <img src={AddressIcon} />
            <a href={Address_Link}><span>Address:</span>{Address}</a>
          </li> : null
        }
        {
          Phone ? <li className={classes.listItem}>
            <img src={PhoneIcon} />
            <a href={`tel:${Phone}`}><span>Phone:</span>{Phone}</a>
          </li> : null
        }

        {
          Fax ? <li className={classes.listItem}>
            <img src={FaxIcon} />
            <a href={`fax:${Fax}`}><span>Fax:</span>{Fax}</a>
          </li> : null
        }
        {
          Email ? <li className={classes.listItem}>
            <img src={MailIcon} />
            <a href={`mailto:${Email}`}><span>Email:</span>{Email}</a>
          </li> : null
        }
      </ul>
    </div>
  )
}