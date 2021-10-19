import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserSagaAC } from "../../redux/actionCreators/User/addUserAC";
import { deleteUserSagaAC } from "../../redux/actionCreators/User/deleteUserAC";
import OneUser from "../OneUser/OneUser";

export default function ListUser() {
  const stateUser = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(addUserSagaAC(stateUser));
  };

  const deleteUser = (id) => {
    dispatch(deleteUserSagaAC(id));
  };
  return (
    <div>
      <div>
        Посмотри на юзера<button onClick={getUsers}>Кликай</button>
      </div>
      {stateUser.length > 0 && (
        <div>
          <ul>
            {stateUser.map((user) => {
              return (
                <li key={user.id}>
                  <OneUser user={user} deleteUser={deleteUser} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
