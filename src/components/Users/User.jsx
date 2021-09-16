import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={styles.wrapper}>
        <div>
            <div>
                <NavLink to={`/profile/` + user.id}>
                    <img className={styles.usersPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                         alt='avatar'/>
                </NavLink>
            </div>
            <div>{user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }}>Follow</button>}
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
        </div>
    </div>
}

export default User;