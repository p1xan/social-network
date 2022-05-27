import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(" " + i)
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
        <button className={styles.button} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p.id} className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={styles.button} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>
        }
    </div>
}

export default Paginator;