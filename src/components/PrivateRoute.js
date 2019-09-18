import CssBaseline from "@material-ui/core/CssBaseline"
import LinearProgress from "@material-ui/core/LinearProgress"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import baseApp from "../base"

// function PrivateRoute({ component: Component, ...rest }) {
//   function fakeAuth() {
//     const user = baseApp.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//           console.log(user)
//           return true;
//         }
//       });
//   }
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signin",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   )
// }

// export default PrivateRoute

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isAuthenticated: false
    }
  }

  componentDidMount() {
    baseApp.auth().onAuthStateChanged( user => {
        this.setState({ loading: false, isAuthenticated: user!== null })
    }
    //   function(user) {
    //     if (user) {
    //       this.setState({ loading: false, isAuthenticated: true })
    //     } else {
    //       this.setState({ isAuthenticated: false })
    //       console.log("stop loading, is not auth")
    //     }
    //   }
    )
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
            <Redirect
              to={{ pathname: "/signin" }}
            />
          )
        }
      />
    )
  }
}
