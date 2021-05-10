import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                addPost={props.addPost}
                postsData={props.postsData.postsData}
                newPostText={props.postsData.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;