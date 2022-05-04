import React, {useState} from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from "../../../assets/images/download.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) => {
         saveProfile(formData).then(
             () => {
                 setEditMode(false);
             } )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>

                <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt="avatar"/>

                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><b>Name</b>: {profile.fullName}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
        {
            profile.lookingForAJob &&
            <div><b>My proffesional skills</b>: {profile.lookingForAJobDescription}</div>
        }
        <div>
            <b>About Me</b> : {profile.aboutMe}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contacts}><b>{contactTitle}</b> : <b>{contactValue}</b></div>
}

export default ProfileInfo;
