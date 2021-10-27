import React from "react";
import { useHistory } from "react-router";
import css from "./NotFound.module.css";

export default function NotFound() {
  const history = useHistory();
  return (
    <div className={css.main}>
      <div className={css.but}>
        <span className={css.span}>Запрашиваемой страницы не существует</span>
        <button onClick={() => history.push("/")}>На главную</button>
      </div>
      <div>
        <img src={"./404.jpg"} alt="logo wow" className={css.img} />
      </div>
    </div>
  );
}
