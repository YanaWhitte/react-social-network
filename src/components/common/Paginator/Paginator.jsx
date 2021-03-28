import { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 8 }) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      <button disabled={(portionNumber <= 1)} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return <div onClick={() => { onPageChanged(p); }} className={s.pageNumberContainer}>
            <span className={(currentPage === p && s.selectedPage) + ' ' + s.pageNumber}
            >{p}</span>
          </div>
        })}
      <button disabled={!(portionCount > portionNumber)} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
    </div>
  );
}

export default Paginator;