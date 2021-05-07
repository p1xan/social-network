import React from "react";
import styles from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"/>
            <div className={styles.likesAndMessage}>
                {props.message}
                <div>
                    <span> Likes </span> - {props.like}
                </div>
            </div>
        </div>
    )
}

export default Post;