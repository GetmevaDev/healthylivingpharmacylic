import React, { useState } from "react"
import Cross from "../../images/Cross.svg"
import * as classes from "./FormPrescription/formPrescription.module.scss"

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