let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 15
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesPage.newMessageText,
    };
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;

