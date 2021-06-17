import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;