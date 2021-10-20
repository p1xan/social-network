import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from "../../../assets/images/download.png";

const ProfileInfo = ({profile, status, updateStatus,isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>

                <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt="avatar"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}


                <div><b>Name</b>: {profile.fullName}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.twitter}</div>
                <div>{profile.contacts.website}</div>
                <div>{profile.contacts.youtube}</div>
                <div>{profile.contacts.mainLink}</div>
                <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
                {
                    profile.lookingForAJob &&
                    <div><b>My proffesionals skills</b>: {profile.lookingForAJobDescription}</div>
                }
                <div>
                    <b>About Me</b> : {profile.aboutMe}
                </div>

                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;