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
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;