import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <img src={profile.photos.large}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.vk}</div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;