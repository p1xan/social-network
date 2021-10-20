import {ProfileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SET_PHOTO';

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
            return {...state, postsData: initialState.postsData.filter(p => p.id != action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile:{...state.profile, photos:action.photos}}
        default:
            return state
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfile(userId);
    dispatch(setUserProfile(response))
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;