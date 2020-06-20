/***
 * @auth: dmx
 * @time: 2020/6/20
 * @func: 有可能涉及到ant-design 的 ICON组件， ant4 的Icon是改版了，
 ***/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlogLayout from '../layout';
import Login from '../pages/login';


export default function () {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BlogLayout} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )

}
