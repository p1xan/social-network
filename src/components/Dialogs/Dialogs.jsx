import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLengthMessage50 = maxLengthCreator(50)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    if(!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={styles.dialogs}>
            <div className={styles.wrapperForMessage}>
                <div className={styles.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.wrapperForTextarea}>
            <Field component={Textarea}
                   name={"newMessageText"}
                   placeholder={"Enter your message"}
                   validate={[required,maxLengthMessage50]}
            />
            <button> Send Message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;