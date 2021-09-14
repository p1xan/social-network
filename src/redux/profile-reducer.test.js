import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'post1', like: 10},
        {id: 2, message: 'post2', like: 11},
        {id: 3, message: 'post3', like: 12},
    ]
}

test("post should be added", () => {
    //1.test data
    let action = addPostActionCreator("this is new post");

    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.postsData.length).toBe(4)
});

test("message text should be correct", () => {
    //1.test data
    let action = addPostActionCreator("this is new post");

    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.postsData[3].message).toBe("this is new post")
});

test("should be deleting post", () => {
    //1.test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.postsData.length).toBe(2)
});
