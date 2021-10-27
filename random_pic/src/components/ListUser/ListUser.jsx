import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserSagaAC } from "../../redux/actionCreators/User/addUserAC";
import { deleteUserSagaAC } from "../../redux/actionCreators/User/deleteUserAC";
import { changeStatusUserSagaAC } from "../../redux/actionCreators/User/changeStatus";
import OneUser from "../OneUser/OneUser";
import css from "./ListUser.module.css";

export default function ListUser() {
  const stateUser = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [filtredUsers, setFiltredUsers] = useState([]);
  const [filterType, setFilterType] = useState(true);

  useEffect(() => {
    setFiltredUsers(stateUser);
  }, [stateUser]);

  const getUsers = () => {
    dispatch(addUserSagaAC(stateUser));
  };

  const deleteUser = (id) => {
    dispatch(deleteUserSagaAC(id));
  };

  const changeStatus = (id, status) => {
    dispatch(changeStatusUserSagaAC(id, status));
  };

  const filterUsers = () => {
    if (filterType) {
      setFiltredUsers(stateUser.filter((user) => user.status === filterType));
    } else setFiltredUsers(stateUser);
    setFilterType((prevState) => !prevState);
  };

  return (
    <div className={css.main}>
      <div className={css.but_main}>
        <div>
          <button className={css.but} onClick={getUsers}>
            Посмотри на юзера
          </button>
        </div>
        <div>
          <button className={css.but} onClick={filterUsers}>
            Фильтр
          </button>
        </div>
      </div>

      {filtredUsers.length > 0 && (
        <div>
          <ul>
            {filtredUsers.map((user) => {
              return (
                <li className={css.li} key={user.id}>
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
