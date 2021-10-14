import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusAC } from "../../redux/actionCreators/ setStatusAC";
import { addCatAC } from "../../redux/actionCreators/addCatAC";
import { DeleteCatAC } from "../../redux/actionCreators/deleteCatAC";
import OneCat from "../OneCat/OneCat";
import css from "./ListCats.module.css";

export default function ListCats() {
  const dispatch = useDispatch();
  const catsState = useSelector((state) => state);
  const [filteredCat, setFilteredCat] = useState([]);
  const [filterType, setFilterType] = useState(true);

  useEffect(() => {
    setFilteredCat(catsState);
  }, [catsState]);

  function getCats() {
    dispatch(addCatAC());
  }

  const deletePic = (id) => {
    dispatch(DeleteCatAC(id));
  };

  const likePic = (id) => {
    dispatch(setStatusAC(id));
  };

  const filterCats = () => {
    if (filterType)
      setFilteredCat(catsState.filter((pic) => pic.status === filterType));
    else setFilteredCat(catsState);
    setFilterType((prevState) => !prevState);
  };

  return (
    <div className={css.main}>
      <div className={css.but_main}>
        <div>
          <button className={css.but} onClick={getCats}>
            Показать кота
          </button>
        </div>
        <div>
          <button className={css.but} onClick={filterCats}>
            Фильтр
          </button>
        </div>
      </div>
      {filteredCat.length > 0 && (
        <div>
          <ul>
            {filteredCat.map((cat) => (
              <li className={css.li} key={cat.id}>
                <OneCat cat={cat} deletePic={deletePic} likePic={likePic} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
