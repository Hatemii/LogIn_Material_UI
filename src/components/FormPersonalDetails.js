import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"



export default class FormPersonalDetails extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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

        <AppBar title="Enter Personal Details"/>

        <TextField
          hintText="Enter your occupation"
          floatingLabelText="Occupation"
          onChange={handleChanges('occupation')}
          defaultValue={values.occupation}
          />

        <br/>

        <TextField
          hintText="Enter your city"
          floatingLabelText="City"
          onChange={handleChanges('city')}
          defaultValue={values.city}
          />

          <br/>

        <TextField
          hintText="Enter your bio"
          floatingLabelText="Bio"
          onChange={handleChanges('bio')}
          defaultValue={values.bio}
          />

          <br/>

        <RaisedButton
          label = "back"
          primary={false}
          style={styles.button}
          onClick={this.back}
          />


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
