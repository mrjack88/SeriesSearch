import CssBaseline from "@material-ui/core/CssBaseline"
import LinearProgress from "@material-ui/core/LinearProgress"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import baseApp from "../base"

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isAuthenticated: false
    }
    this.unsubscribe = {};
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
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated ? (
            <Component {...props} />
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
