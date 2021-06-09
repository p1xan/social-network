import {UsersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: undefined
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data.userId !== undefined
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId,email,login) => ({type:SET_USER_DATA,data:{userId,email,login}})


export const getAuthUserData = () => {
    return (dispatch) => {
        UsersAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            } else {
                dispatch(setAuthUserData(undefined, undefined, undefined))
            }
        })
    }
}

export default authReducer;