import {ProfileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postsData: [
        {id: 1, message: 'post1', like: 10},
        {id: 2, message: 'post2', like: 11},
        {id: 3, message: 'post3', like: 12},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 15
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state,postsData: initialState.postsData.filter(p => p.id != action.postId)}
        default:
            return state
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) => {
    return (dispatch) => {
        UsersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;