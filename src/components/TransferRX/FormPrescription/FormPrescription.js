import React, { useRef, useState } from "react"
import {graphql, useStaticQuery} from "gatsby"
import DndUpload from "../dndUpload"
import { MedicationNames } from "../MedicationNames"
import * as classes from "./formPrescription.module.scss"


export function FormPrescription(){


    const data = useStaticQuery(graphql`
        {
            strapiTransferRx {
                Form {
                    Title_Form
                    Description_Form
                }
            }
        }
    `)
    return (
      <section className={classes.sectionFormPrescription}>
        <div className="container">
          <h2>{data.strapiTransferRx.Form.Title_Form}</h2>
          <p>{data.strapiTransferRx.Form.Description_Form}</p>

          <form className={`row ${classes.flexStyles}`}>
            <h3>Transfer Your Prescriptions</h3>
            <div className={classes.formInput}>
              <h4>First Name</h4>
              <label>
                <input placeholder={`Enter First Name`} id={`firstName`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4> Last Name</h4>
              <label>

                <input placeholder={`Enter Last Name`} id={`lastName`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Phone Number</h4>
              <label>

                <input placeholder={`Enter Phone Number`} id={`phoneNumber`} type="tel" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Email Address</h4>
              <label>
                <input placeholder={`Enter Email Address`} id={`emailAddress`} type="email" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Gender</h4>

              <div className="row">
                <label className={classes.labelRadio}>
                  <input className={classes.radio} id={`Female`} type="radio" name={`gender`} />
                  <span className={classes.fake}></span>
                  <span>Female</span>
                </label>

                <label className={classes.labelRadio}>
                  <input className={classes.radio} id={`Male`} type="radio" name={`gender`} />
                  <span className={classes.fake}></span>
                  <span>Male</span>
                </label>
              </div>
            </div>

            <div className={classes.formInput}>
              <h4>Date of Birth</h4>
              <label className={classes.date} htmlFor={`dateOfBirth`}>
                <input
                  onfocus="(this.type='date')"
                  placeholder={`Enter Date of Birth`}
                  id={`dateOfBirth`}
                  type="date"
                />
              </label>
            </div>


            <div className={classes.formInput}>
              <h4>Home Address</h4>
              <label>
                <input placeholder={`Enter Home Address`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Insurance Company</h4>
              <label>
                <input placeholder={`Enter Insurance Company`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>ID Number of Cardholder </h4>
              <label>
                <input placeholder={`Enter ID Number of Cardholder `} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>RxBin</h4>
              <label>
                <input placeholder={`Enter RxBin`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>RxGrp</h4>
              <label>
                <input placeholder={`Enter RxGrp`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>RxPCN</h4>
              <label>
                <input placeholder={`Enter RxPCN`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Insurance Member ID</h4>
              <label>
                <input placeholder={`Enter Insurance Member ID`} id={`emailAddress`} type="text" />
              </label>
            </div>

            <DndUpload />

            <div className="row" style={{
              flexWrap: `wrap`,
            }}>
              <div className={classes.formInput}>
                <h4>Do you have drug allergies?</h4>

                <div className="row">
                  <label className={classes.labelRadio}>
                    <input className={classes.radio} id={`Female`} type="radio" name={`allergies`} />
                    <span className={classes.fake}></span>
                    <span>Yes</span>
                  </label>

                  <label className={classes.labelRadio}>
                    <input className={classes.radio} id={`Male`} type="radio" name={`allergies`} />
                    <span className={classes.fake}></span>
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div className={classes.formInput}>
                <h4>If yes, please list</h4>
                <label>
                  <input placeholder={`Enter If yes, please list`} id={`emailAddress`} type="text" />
                </label>
              </div>
            </div>

            <h3>Current Pharmacy Information</h3>

            <div className={classes.formInput}>
              <h4>Pharmacy Name</h4>
              <label>
                <input placeholder={`Enter Pharmacy Name`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Pharmacy Address</h4>
              <label>
                <input placeholder={`Enter Pharmacy Address`} id={`emailAddress`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Pharmacy Phone</h4>
              <label>
                <input placeholder={`Enter Pharmacy Phone`} id={`emailAddress`} type="tel" />
              </label>
            </div>
            <MedicationNames />
            <div className={classes.formInput}>
              <h4>Do you have drug allergies?</h4>

              <div className="row" >
                <label className={classes.labelRadio}>
                  <input className={classes.radio} id={`Female`} type="radio" name={`Delivery`} />
                  <span className={classes.fake}></span>
                  <span>Delivery</span>
                </label>

                <label className={classes.labelRadio}>
                  <input className={classes.radio} id={`Male`} type="radio" name={`Delivery`} />
                  <span className={classes.fake}></span>
                  <span>Pick up</span>
                </label>
              </div>
            </div>
            <div className={classes.formInput}>
              <h4>Your Message to Us</h4>
              <label>
                <input placeholder={`Write Here`} id={`emailAddress`} type="tel" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>7 plus 6 equals?</h4>
              <label>
                <input placeholder={`Write Here`} id={`emailAddress`} type="tel" />
              </label>
            </div>

            <button className={classes.submit} type={`Submit`}>Submit</button>
          </form>
        </div>
      </section>
    )
  }