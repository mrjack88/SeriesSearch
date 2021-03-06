import { createGenerateClassName, StylesProvider } from "@material-ui/styles"
import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "../components/PrivateRoute"
import "./App.css"
import Details from "./Details"
import ForgotPasswordLanding from "./ForgotPasswordLanding"
import Home from "./Home"
import NotFound from "./NotFound"
import ResetPassword from "./ResetPassword"
import SignIn from "./SignIn"
import Signup from "./Signup"

const generateClassName = createGenerateClassName({
  productionPrefix: "jss"
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={ForgotPasswordLanding} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <PrivateRoute path="/shows/:id" component={Details} />
        <PrivateRoute path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </StylesProvider>
  )
}

export default App
