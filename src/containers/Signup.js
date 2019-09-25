import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import { userActions } from "../actions"
import LoadingProgress from "../components/LoadingProgress"
import Signup from "../components/Signup"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

class SignUp extends React.Component {
  signupFn = (email, password) => {
    this.props.doSignup(email, password)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== {} && prevProps.user !== this.props.user) {
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <React.Fragment>
        <LoadingProgress />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Signup onSignup={this.signupFn} isLoading = {this.props.isSigningUp}/>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user.userData || [],
    isSigningUp: state.user.isFetchingData || false
  }
}
const mapDispatchToProps = dispatch => {
  return {
    doSignup: bindActionCreators(userActions.signup, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp))
