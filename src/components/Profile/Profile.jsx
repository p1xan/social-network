import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData.postsData} newPostText={props.postsData.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;