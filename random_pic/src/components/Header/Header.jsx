import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

import React from "react";

export default function Header() {
  return (
    <div className={css.header}>
      <NavLink
        exact
        to="/"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Главная
      </NavLink>
      <NavLink
        exact
        to="/cat"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Thunk
      </NavLink>
      <NavLink
        exact
        to="/user"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Saga
      </NavLink>
    </div>
  );
}
