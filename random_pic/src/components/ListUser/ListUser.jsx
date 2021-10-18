import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserSagaAC } from "../../redux/actionCreators/User/addUserAC";
import OneUser from "../OneUser/OneUser";

export default function ListUser() {
  const stateUser = useSelector((state) => state);
  console.log(stateUser);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(addUserSagaAC(stateUser));
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
                <li>
                  <OneUser user={user} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
