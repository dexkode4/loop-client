import Login from 'pages/Login';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => {
              return (
                  <Redirect to="login"/>
              )
          }}/>
          
          <Route exact path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    )
}

export default AppRouter
