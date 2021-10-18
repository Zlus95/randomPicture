import React from "react";

export default function OneUser({ user }) {
  console.log(user, "xzxzx");
  return (
    <div>
      <div>
        <div>
          <p>{user.name}</p>
          <p>{user.last}</p>
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
