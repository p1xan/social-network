import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY" :'5ef544a3-f9f0-42e5-96f2-1621636d3144'
        },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const UnFollowAPI = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const FollowAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}` ).then(response => response.data)
    }
}

export const AuthoriseAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}