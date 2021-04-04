import React, { useState } from "react"
import * as classes from "./FormPrescription/formPrescription.module.scss"
import Cross from "../../images/Cross.svg"


export function Textarea({onclick}){


  return(

      <div className="textarea-container">
                <textarea
                  placeholder={`Medication Name(s)/ Or Prescription Number(s)`}
                />
        <button onClick={onclick} type={`button`} className={classes.buttonClose} ><img src={Cross} alt="" /></button>
      </div>
  )
}