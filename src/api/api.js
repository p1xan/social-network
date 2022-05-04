import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY" :'d288c1a7-7477-4d25-ad13-eb66c2aaf9c9'
        },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Deprecated  method. PLease use ProfileAPI')
        return ProfileAPI.getProfile(userId)
    },
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}` ).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status:status}).then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}


export const AuthAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email,password,rememberMe = false) {
        return instance.post(`auth/login`,{email,password,rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}
