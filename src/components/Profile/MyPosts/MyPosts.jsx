import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.postsData.map(post => <Post message={post.message} like={post.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.myPost}>My posts</h3>
            <div className={styles.posts}>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ref={newPostElement}
                              className={styles.textarea}/>
                </div>
                <div>
                    <button onClick={addPost} className={styles.button}>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;