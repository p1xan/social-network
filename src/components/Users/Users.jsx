import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/download.png"


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
         return <div>
            {this.props.users.map(u => <div className={styles.wrapper} key={u.id}>
                <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'/>
                <div>{u.followed
                    ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}</div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>)}
        </div>
    }
}

export default Users;