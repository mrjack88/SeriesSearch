import { createGenerateClassName, StylesProvider } from "@material-ui/styles"
import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "../components/PrivateRoute"
import "./App.css"
import Home from "./Home"
import NotFound from "./NotFound"
import SignIn from "./SignIn"
import Signup from "./Signup"
import Transition from "./Transition"

const generateClassName = createGenerateClassName({
  productionPrefix: "jss"
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/transition" component={Transition} />
        <PrivateRoute path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </StylesProvider>
  )
}

export default App
