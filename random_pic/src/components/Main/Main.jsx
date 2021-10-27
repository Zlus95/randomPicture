import React from "react";
import { Switch, Route } from "react-router-dom";
import ListCats from "../ListCats/ListCats";
import ListUser from "../ListUser/ListUser";
import MainPage from "../MainPage/MainPage";
import NotFound from "../NotFound/NotFound";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/cat">
          <ListCats />
        </Route>
        <Route exact path="/user">
          <ListUser />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
