let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'post1', like: 10},
            {id: 2, message: 'post2', like: 11},
            {id: 3, message: 'post3', like: 12},
        ],
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
    },
    sidebar: {
        friends:[
            {id: 1, name: "Dima"},
            {id: 2, name: "Pasha"},
            {id: 3, name: "Sergey"},
        ]
    }
}

export default state;

