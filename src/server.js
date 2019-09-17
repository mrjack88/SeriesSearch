import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles"
import express from "express"
import qs from "qs"
import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import serialize from "serialize-javascript"
import App from "./containers/App"
import { showsService } from "./services"
import configureStore from "./store/configureStore"
import theme from "./theme"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", async(req, res) => {
    const context = {}
    const sheets = new ServerStyleSheets()
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)
    let searchdata = []
    if (params.q !== undefined) {
      await showsService.getShows(params.q).then(response => {
        searchdata = response
      })
    }
    const isFetchingData = false
    const error = {}
    const shows = { searchdata, isFetchingData, error }
    // Compile an initial state
    const preloadedState = { shows }

    // Create a new Redux store instance
    const store = configureStore(preloadedState)

    const markup = renderToString(
      sheets.collect(
        <StaticRouter context={context} location={req.url}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <App />
            </Provider>
          </ThemeProvider>
        </StaticRouter>
      )
    )
    const css = sheets.toString()

    // Grab the initial state from our Redux store
    const finalState = store.getState()
    res.status(200).send(`
<!doctype html>
<html lang="">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charSet='utf-8' />
  <title>Series Search</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">
  ${
    assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ""
  }
  ${css ? `<style id='jss-ssr'>${css}</style>` : ""}
    ${
      process.env.NODE_ENV === "production"
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
</head>
<body>
  <div id="root">${markup}</div>
  <script>
    window.__PRELOADED_STATE__ = ${serialize(finalState)}
  </script>
</body>
</html>`)
  })

export default server
