import React from "react";
import post from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={post.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"/>
            <div className={post.likesAndMessage}>
                {props.message}
                <div>
                    <span> Likes </span> - {props.like}
                </div>
            </div>
        </div>
    )
}

export default Post;