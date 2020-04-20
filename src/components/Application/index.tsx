import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GuestScene from "../../scenes/Guest";
import CabinetScene from "../../scenes/Cabinet";

const App = () => {
  const applicationRoutes = (
    <Switch>
      <Route path="/" component={GuestScene} exact={true} />
      <Route path="/guest" component={GuestScene} />
      <Route path="/cabinet" component={CabinetScene} />
    </Switch>
  )

  return (
    <BrowserRouter>{applicationRoutes}</BrowserRouter>
  )
}

export default App;
