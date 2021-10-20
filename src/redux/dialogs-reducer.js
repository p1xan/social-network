const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE,newMessageText})
export default dialogsReducer;
