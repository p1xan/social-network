import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.postsData.map(post => <Post message={post.message} like={post.like}/>)

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.myPost}>My posts</h3>
            <div className={styles.posts}>
                <div><textarea className={styles.textarea} placeholder="wooops"></textarea></div>
                <div><button className={styles.button}>add post</button></div>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;