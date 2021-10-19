import React from "react";

export default function OneUser({ user, deleteUser, changeStatus }) {
  return (
    <div>
      <div>
        <div>
          {user.name} {user.last}
        </div>
        <img src={user.img} alt="" />
      </div>
      <div>
        <button
          onClick={() => {
            deleteUser(user);
          }}
        >
          Удалить
        </button>
        <button
          onClick={() => changeStatus(user.id)}
          style={{ color: user.status ? "red" : "blueviolet" }}
        >
          {user.status ? "Нравится" : "Не нравится"}
        </button>
      </div>
    </div>
  );
}
