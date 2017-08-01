import React from 'react'
import {renderToString} from 'react-dom/server'

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html lang="ru">
    <html>
    <head>
        <meta charset="utf-8">
        <title>Proto</title>
    
        <meta name="description" content="React boilerplate">
        <meta name="author" content="tor <0777144@gmail.com>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!--TODO: разобраться что и зачем -->
        <!--<meta http-equiv="X-UA-Compatible" content="IE=edge">-->
        <!--<meta http-equiv="content-type" content="text/html; charset=utf-8">-->
        <!--<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">-->
        <!--<meta name="MobileOptimized" content="176">-->
        <!--<meta name="HandheldFriendly" content="True">-->
        <!--<base id="base">-->
    
        <link rel="stylesheet" href="/dist/app.bundle.css">
    
        <!--TODO: Add favicons for all browsers -->
        <!--<link rel="icon" type="image/png" href="images/favicon.png">-->
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/vendor.dll.js"></script>
        <script src="/dist/app.bundle.js"></script>
    </body>
    </html>`
}

function handleRender(req, res) {
  // Render the component to a string
  const html = renderToString(
    <div>Loading...</div>
  )

  // Grab the initial state from our Redux store
  // const preloadedState = store.getState()
  const preloadedState = {}

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

export default handleRender
