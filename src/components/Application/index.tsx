import React from "react";
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GuestScene from "../../scenes/Guest";
import CabinetScene from "../../scenes/Cabinet";
import store from "../../store";

const App = () => {
  const applicationRoutes = (
    <Switch>
      <Route path="/" component={GuestScene} exact={true} />
      <Route path="/guest" component={GuestScene} />
      <Route path="/cabinet" component={CabinetScene} />
    </Switch>
  )

  return (
    <Provider store={store}>
      <BrowserRouter>{applicationRoutes}</BrowserRouter>
    </Provider>
  )
}

export default App;
