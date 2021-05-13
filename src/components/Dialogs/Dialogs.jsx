import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>)

    let messageText = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = messageText.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <textarea onChange={onMessageChange} ref={messageText} value={props.newMessageText}/>
            <button onClick={sendMessage}> Send Message</button>
        </div>
    )
}

export default Dialogs;