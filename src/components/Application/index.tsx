import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GuestScene from "../../scenes/Guest";
import CabinetScene from "../../scenes/Cabinet";
import Auth from "../../scenes/Auth";

const App = () => {
  const applicationRoutes = (
    <Switch>
      <Route path="/" component={GuestScene} exact={true} />
      <Route path="/guest" component={GuestScene} />
      <Route path="/cabinet" component={CabinetScene} />
      <Route path="/auth" component={Auth} />
    </Switch>
  )

  return (
    <BrowserRouter>{applicationRoutes}</BrowserRouter>
  )
}

export default App;
