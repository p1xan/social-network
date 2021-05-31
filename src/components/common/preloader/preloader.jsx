import React from "react";
import styles from "../../Users/users.module.css";
import preloader from "../../../assets/images/a2dc9668f2cf170fe3efeb263128b0e7.gif";

let Preloader = (props) => {
    return <img className={styles.preloader} src={preloader} alt="preloader"/>
}

export default Preloader;