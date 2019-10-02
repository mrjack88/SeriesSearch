import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "@material-ui/core/Link"
import React from "react"
import { Link as RouterLink } from "react-router-dom"

const ForgotPasswordLanding = () => {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        We've sent you an email to reset your password.
        <Link component={RouterLink} to="/signin" variant="body2">
          {"Sign in"}
        </Link>
        <Box mt={8}>
          {/* <Copyright /> */}
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default ForgotPasswordLanding
