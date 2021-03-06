import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Redirect from="*" to="/"/>
    </Switch>
  </Router>
)

export default App
