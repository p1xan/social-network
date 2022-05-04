import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import styles from "./ProfileInfo.module.css";
import style from "../../common/FormControls/FormControls.module.css";


const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
            {error && <div className={style.formSummaryError}> {error}</div>}
            <div>
                <button>Login</button>
            </div>
        </div>

        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My proffesional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>About Me</b> : {createField("About me", "aboutMe", [], Textarea)}
        </div>

                <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={styles.contacts}>
                <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;