import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { withStyles } from "@material-ui/styles"
import queryString from "query-string"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { Link as RouterLink } from "react-router-dom"
import { bindActionCreators } from "redux"
import { userActions } from "../actions"
import Copyright from "../components/Copyright"
import LoadingProgress from "../components/LoadingProgress"

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})

class ResetPassword extends React.Component {
  state = {
    password: "",
    repeatPassword: "",
    code: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.confirmResetPassword(this.state.code, this.state.password)
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleRepeatPasswordChange = event => {
    this.setState({ repeatPassword: event.target.value })
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search)
    if (parsed.oobCode != undefined) {
      this.setState({ code: parsed.oobCode })
    }
  }

  componentDidUpdate(prevProps, prevState) {
      if(this.props.confirmResetPasswordData !== prevProps.confirmResetPasswordData){
          this.props.history.push("/signin")
      }
  }
  

  render() {
    const { classes, isFetchingData } = this.props
    const { password, repeatPassword } = this.state
    const validPassword = password === repeatPassword
    return (
      <React.Fragment>
        <LoadingProgress />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset your Password
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                autoFocus
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handlePasswordChange}
              />
              <TextField
                error={!validPassword}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="repeat-password"
                label="Repeat Password"
                type="password"
                id="repeat-password"
                autoComplete="current-password"
                value={repeatPassword}
                onChange={this.handleRepeatPasswordChange}
                helperText={!validPassword ? "Passwords do not match!" : ""}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isFetchingData || !validPassword}
              >
                Reset
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link component={RouterLink} to="/signin" variant="body2">
                    {"Go back to Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>

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
    isFetchingData: state.user.isFetchingData,
    confirmResetPasswordData: state.user.confirmResetPasswordData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    confirmResetPassword: bindActionCreators(
      userActions.confirmResetPassword,
      dispatch
    )
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(ResetPassword))
)
