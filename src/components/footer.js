import React from "react"
import { Pages } from "./Footer/Pages/Pages"
import { Services } from "./Footer/Services/Services"
import { StoreHours } from "./Footer/StoreHours/StoreHours"
import { PaymentMethods } from "./Footer/PaymentMethods/PaymentMethods"
import { Logo } from "./Header-components/Logo/Logo"
import { SocialMedia } from "./Header-components/Social-Media/SocialMedia"
import { LastText } from "./Footer/LastText/LastText"
import * as classes from "./footerStyles.module.scss"

export function Footer(){
  return(
    <footer className={classes.siteFooter}>
      <div className={`container row ${classes.flexStyles}`}>
        <Pages />
        <Services />
        <StoreHours />
        <PaymentMethods />
      </div>
      <div className={`container row ${classes.lastBlock}`}>
        <Logo />
        <SocialMedia className={classes.footerIcon} />
        <LastText />
      </div>
    </footer>
  )
}