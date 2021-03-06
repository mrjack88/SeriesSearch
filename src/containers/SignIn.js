import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Snackbar from '@material-ui/core/Snackbar'
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { userActions } from "../actions"
import Copyright from "../components/Copyright"
import LoadingProgress from "../components/LoadingProgress"
import MySnackbarContentWrapper from "../components/MySnackbarContentWrapper"
import Signin from "../components/Signin"

class SignIn extends React.Component {
  doEmailSignIn = (email, password) => {
    this.props.doEmailSignIn(email, password)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== [] && prevProps.user !== this.props.user) {
      this.props.history.push("/")
    }
    if (
      prevProps.resetPasswordData !== [] &&
      prevProps.resetPasswordData !== this.props.resetPasswordData
    ) {
      this.props.history.push("/forgot-password")
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isSigningIn !== this.props.isSigningIn) {
      return true
    }
    if (nextProps.user.length === 0) {
      return false
    }
    return true
  }

  handleResetPassword = email => {
    this.props.resetPassword(email)
  }

  handleCloseSnackBar = () => {
    this.props.history.push("/signin")
  }

  render() {
    return (
      <React.Fragment>
        <LoadingProgress />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.props.location.state !== undefined ?this.props.location.state.fromResetPassword : false}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackBar}
        >
          <MySnackbarContentWrapper
            onClose={this.handleCloseSnackBar}
            variant="success"
            message="Your password has been reset!"
          />
        </Snackbar>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Signin
            onSignIn={this.doEmailSignIn}
            isLoading={this.props.isSigningIn}
            handleResetPassword={this.handleResetPassword}
          />
          <Box mt={8}>
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
    isSigningIn: state.user.isFetchingData || false,
    resetPasswordData: state.user.resetPasswordData || []
  }
}
const mapDispatchToProps = dispatch => {
  return {
    doEmailSignIn: bindActionCreators(userActions.signin, dispatch),
    resetPassword: bindActionCreators(userActions.resetPassword, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn))
