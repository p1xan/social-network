import React from "react";
import navbar from "./navbar.module.css";

const Navbar = () => {
    return (
    <nav className={navbar.nav}>
        <div className={navbar.item}>
            <a>Profile</a>
        </div>
        <div className={navbar.item}>
            <a>Messages</a>
        </div>
        <div className={navbar.item}>
            <a>News</a>
        </div>
        <div className={navbar.item}>
            <a>Music</a>
        </div>
        <div className={navbar.item}>
            <a>Settings</a>
        </div>
    </nav>
    )
}

export default Navbar