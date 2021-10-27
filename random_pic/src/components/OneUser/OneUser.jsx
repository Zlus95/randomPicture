import React from "react";
import css from "./OneUser.module.css";

export default function OneUser({ user, deleteUser, changeStatus }) {
  console.log(user.status);
  return (
    <div>
      <div>
        <div className={css.main_handler}>
          {user.name} {user.last}
        </div>
        <div className={css.img}>
          <img src={user.img} alt="" />
        </div>
      </div>
      <div className={css.but_main}>
        <button
          className={css.but}
          onClick={() => {
            deleteUser(user);
          }}
        >
          Удалить
        </button>
        <button
          className={css.but}
          onClick={() => changeStatus(user.id)}
          style={{ color: user.status ? "red" : "blueviolet" }}
        >
          {user.status ? "Нравится" : "Не нравится"}
        </button>
      </div>
    </div>
  );
}
