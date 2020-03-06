import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"



export default class FormUserDetails extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }


  render() {

    const {values , handleChanges} = this.props

    // button
    const styles = {
      button: {
        margin: 15
      }
    }


    return (
      <MuiThemeProvider>
        <React.Fragment>

        <AppBar title="Enter User Detail"/>

        <TextField
          hintText="Enter your first name"
          floatingLabelText="First Name"
          onChange={handleChanges('firstName')}
          defaultValue={values.firstName}
          />

        <br/>

        <TextField
          hintText="Enter your last name"
          floatingLabelText="Last Name"
          onChange={handleChanges('lastName')}
          defaultValue={values.lastName}
          />

          <br/>

        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={handleChanges('email')}
          defaultValue={values.email}
          />

          <br/>

        <RaisedButton
          label = "Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
          />

      </React.Fragment>
    </MuiThemeProvider>)
  }
}
