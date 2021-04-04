import React from "react"
import * as classes from "./contactForm.module.scss"
import axios from "axios"


class ContactForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onPhoneChange(event) {
    this.setState({phone: event.target.value})
  }

  onMsgChange(event) {
    this.setState({message: event.target.value})
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3000/contact",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        console.log("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        console.log("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '',phone:'', message: ''})
  }


render(){

    return(
      <section  className={classes.sectionContactForm}>
        <div className="container">
          <form method="post" onSubmit={this.submitEmail.bind(this)} >
            <div className={`row ${classes.flexStyles}`}>
              <div>
                <label htmlFor="name">Name</label>
                <input value={this.state.name}
                       onChange={this.onNameChange.bind(this)} name="name" placeholder={`Enter name`} id={`name`} type="text"/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input value={this.state.email} onChange={this.onEmailChange.bind(this)} name="email" placeholder={`Enter email`} id={`email`} type="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input value={this.state.phone}
                       onChange={this.onPhoneChange.bind(this)} name="phone" placeholder={`Enter phone`} id={`phone`} type="tel" />
              </div>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea onChange={this.onMsgChange.bind(this)} value={this.state.message} name="message" placeholder={`Comments Or Questions`} name="" id="description" />
            </div>
            <button onClick={this.submitEmail.bind(this)} type={`submit`}>Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm