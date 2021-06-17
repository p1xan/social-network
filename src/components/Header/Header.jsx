import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png" alt="logo"/>
            <div className={styles.login}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    :  <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;