import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Home from './containers/home'


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)