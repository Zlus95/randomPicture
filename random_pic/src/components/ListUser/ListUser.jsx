import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserSagaAC } from "../../redux/actionCreators/User/addUserAC";
import { deleteUserSagaAC } from "../../redux/actionCreators/User/deleteUserAC";
import { changeStatusUserSagaAC } from "../../redux/actionCreators/User/changeStatus";
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

  const changeStatus = (id, status) => {
    dispatch(changeStatusUserSagaAC(id, status));
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
                  <OneUser
                    user={user}
                    deleteUser={deleteUser}
                    changeStatus={changeStatus}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
