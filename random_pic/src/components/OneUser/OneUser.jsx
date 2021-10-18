import React from "react";

export default function OneUser({ user }) {
  return (
    <div>
      <div>
        <div>
          {user.name} {user.last}
        </div>
        <img src={user.img} alt="" />
      </div>
      <div>
        <button onClick={() => console.log("проверка удаления")}>
          Удалить
        </button>
        <button onClick={() => console.log("проверка смены статуса")}>
          Смена статуса
        </button>
      </div>
    </div>
  );
}
