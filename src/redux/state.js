let store = {
     _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'post1', like: 10},
                {id: 2, message: 'post2', like: 11},
                {id: 3, message: 'post3', like: 12},
            ],
            newPostText: 'hello react-js!',
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Pasha"},
                {id: 3, name: "Sergey"},
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
         return this._state
    },
    subscribe(observer)  {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 15
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText,
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

}

window.store = store
export default store;

