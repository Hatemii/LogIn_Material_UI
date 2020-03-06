import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"

export default class Confirm extends React.Component {

  continue = e => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {

    return (<MuiThemeProvider>
      <React.Fragment>

        <AppBar title="Successfully Created"/>

        <h2>
          Thank You For Your Submission
        </h2>
        <p>
          You will get an email with further instructions
        </p>

      </React.Fragment>
    </MuiThemeProvider>)
  }
}
