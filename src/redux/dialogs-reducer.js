const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hey"},
        {id: 3, message: "Ho"},
    ],
    dialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Pasha"},
        {id: 3, name: "Sergey"},
    ],
    newMessageText: "hello Dima",
}

 const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy
        }
        default:
            return state
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;
