import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import LinearProgress from "@material-ui/core/LinearProgress"
import { withStyles } from "@material-ui/styles"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import baseApp from "../base"
import MenuAppBar from "../components/AppBar.js"

const styles = {
  root: {
    height: "calc(100vh - 60px)"
  }
}

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isAuthenticated: false
    }
    this.unsubscribe = {}
  }
  componentDidMount() {
    this.unsubscribe = baseApp.auth().onAuthStateChanged(user => {
      this.setState({ loading: false, isAuthenticated: user !== null })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { component: Component, classes, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated ? (
            <Container maxWidth="md" className={classes.root}>
              <MenuAppBar />
              <Component {...props} />
            </Container>
          ) : this.state.loading ? (
            <div>
              <CssBaseline />
              <LinearProgress />
            </div>
          ) : (
            <Redirect to={{ pathname: "/signin" }} />
          )
        }
      />
    )
  }
}

export default withStyles(styles)(PrivateRoute)
