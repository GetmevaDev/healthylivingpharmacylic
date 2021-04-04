import React from "react"
import ButtonImage from "../../../images/button.svg"
import * as classes from "./buttonMenu.module.scss"


export function ButtonMenu({ func, bool }){
  return(
    <div >
      <button onClick={func} className={classes.button}>
        {
          bool ?
            <span >Close</span> :
            <span >Menu</span>
        }

        <img src={ButtonImage}/></button>
    </div>
  )
}