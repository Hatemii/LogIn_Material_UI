import React from 'react';
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Confirm from "./Confirm"
import Success from "./Success"






  export class UserForm extends React.Component {

  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  }

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to previus step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handelChanges = input => e => {
    this.setState({
      [input]: e.target.value //Set input whatever the value is [name , lastname ,......] will handle all fields!
    })
  }

  render() {
    const {step} = this.state;

    // pull out all the fields .. so for instance
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state

    // with this we can pass the value into each component
    // so we can render those values in the inputs
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    }

    switch (step) {

      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChanges={this.handelChanges}
            values={values}
          />)

      case 2:
      return (
        <FormPersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChanges={this.handelChanges}
          values={values}
        />)

      case 3:
      return (
        <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />)
      case 4:
        return(
          <Success/>
        )
    }
  }
}
