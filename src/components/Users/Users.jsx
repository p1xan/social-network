import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conor_McGregor_2018.jpg/525px-Conor_McGregor_2018.jpg', followed: false, fullName: 'Pasha', status: 'lol', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/1/13/Nate_Diaz_Oct_2019.jpg', followed: true, fullName: 'Sergey', status: 'lol', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl:'https://fighttime.ru/images/fightbase/fighters/31239.jpg', followed: false, fullName: 'Andrew', status: 'lol', location: {city: 'Kiev', country: 'Ukraine'}},
        ])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <img className={styles.usersPhoto} src={u.photoUrl} alt='avatar'/>
                <div>{u.followed
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}</div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>)
            }
        </div>
    )
}

export default Users;