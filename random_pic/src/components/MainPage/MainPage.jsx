import React from "react";
import css from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={css.main}>
      <p className={css.p}>Реализуемые функции:</p>
      <ul className={css.ul}>
        <li>
          Получать картинки/Gif через API и сохранять данные картинки в сторе
        </li>
        <li>Удалять картинки из стора</li>
        <li>Ставить или убрать лайк</li>
        <li>Фильтровать картинки</li>
      </ul>
      <p className={css.p}>В данном проекте использовалось два API:</p>
      <ul className={css.ul}>
        <li>https://randomuser.me/api/;</li>
        <li>https://api.thecatapi.com/v1/images/search?size=full;</li>
      </ul>
    </div>
  );
}
