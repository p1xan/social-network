import React from "react";
import myPosts from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={myPosts.posts}>
                <textarea className={myPosts.textarea}></textarea>
                <button className={myPosts.button}>add post</button>
            </div>
            <Post message="post1" like="10"/>
            <Post message="post2" like="15"/>
        </div>
    )
}

export default MyPosts;