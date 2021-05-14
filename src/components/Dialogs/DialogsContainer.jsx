import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return (
                    <Dialogs addMessage={sendMessage}
                             updateNewMessageText={onMessageChange}
                             dialogsData={state.messagesPage.dialogsData}
                             messagesData={state.messagesPage.messagesData}
                             newMessageText={state.messagesPage.newMessageText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;