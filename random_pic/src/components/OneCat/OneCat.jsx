import React from "react";
import css from "./OneCat.module.css";

export default function OneCat({ cat, deletePic, likePic }) {
  return (
    <div>
      <div className={css.img}>
        <img src={cat.url} alt="" className={css.img_style} />
      </div>
      <div className={css.but_main}>
        <button
          className={css.but}
          onClick={() => {
            deletePic(cat.id);
          }}
        >
          Удалить
        </button>
        <button
          className={css.but}
          style={{
            color: cat.status ? "red" : "blueviolet",
          }}
          onClick={() => {
            likePic(cat.id);
          }}
        >
          {cat.status ? "Не нравится" : "Нравится"}
        </button>
      </div>
    </div>
  );
}
