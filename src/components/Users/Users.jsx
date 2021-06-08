import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={styles.wrapper}>
        <div>
            {pages.map(p => {
                return <span key={p.id} className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <NavLink to={`profile/` + u.id}>
                    <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt='avatar'/>
                </NavLink>
            </div>
            <div>{u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </div>)}
    </div>
}

export default Users;