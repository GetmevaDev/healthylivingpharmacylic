import React, {useState} from "react"
import Plus from "../../images/plus.svg"
import { Textarea } from "./Textarea"
import * as classes from "./FormPrescription/formPrescription.module.scss"


export class MedicationNames extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      textareaArray: [],
    }
  }


  addTextarea = () => {
    this.setState({
      textareaArray: this.state.textareaArray.concat(<Textarea />)
    })

  }

  removeTextarea = (id) =>{
    this.setState(({textareaArray}) => {
      const idx = textareaArray.indexOf(id);
      textareaArray.splice(idx, 1)


      return {textareaArray: textareaArray}
    })
  }


  render(){
    return(
      <div className={classes.medicationTextarea}>
        <h4>Please Enter Your Refill Numbers or Medication Names</h4>
        {

          this.state.textareaArray.map((item, i) =>{
            return (<Textarea onclick={this.removeTextarea.bind(this, i)} />)
          })
          // textareaArray.map((item, i) =>{
          //
          //   return (<Textarea onclick={() => {
          //     getTextareaArray(textareaArray.slice(0, i))
          //     getTextareaArray(textareaArray.slice(i +  1))
          //   }} />)
          //
          // })
        }

        <button
          onClick={this.addTextarea.bind(this)}
          type={`button`}
          className={classes.buttonOpen}>
          <img src={Plus} alt="" />Add more</button>
      </div>
    )
  }


}