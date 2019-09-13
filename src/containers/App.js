import { createGenerateClassName, StylesProvider } from "@material-ui/styles"
import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import SignIn from "./SignIn"
import Signup from "./Signup"

const generateClassName = createGenerateClassName({
  productionPrefix: "jss"
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </StylesProvider>
  )
}

export default App
