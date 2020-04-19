import React from "react";
import QuestionForm from "./../QuestionForm/index";
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  const applicationRoutes = (
    <Switch>
      <Route path="/" component={AuthScene} exact={true} />
      <Route path="/auth" component={AuthScene} />
      <Route path="/cabinet" component={MainScene} />
    </Switch>
  )

  return (
    <Provider store={store}>
      <BrowserRouter>{applicationRoutes}</BrowserRouter>
    </Provider>
    // <>
    //   <QuestionForm />
    // </>
  )
}

export default App;
