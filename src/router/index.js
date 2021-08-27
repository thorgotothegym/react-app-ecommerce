import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CheckOut } from "../views/CheckOut/CheckOut";
import { ShowCase } from "../views/ShowCase";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <ShowCase />
      </Route>
      <Route path="/cart">
        <CheckOut />
      </Route>
    </Switch>
  </BrowserRouter>
);
