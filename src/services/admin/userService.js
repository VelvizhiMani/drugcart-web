import { createUser, getUserId, getUsers } from '@/reduxToolkit/slices/admin/adminUserSlice';
import Authorization from '@/utils/authorization';
import axios from 'axios'

const AdminLoginService = (adminData, router) => async (dispatch) => {
    await axios.post('/api/adminlogin', adminData).then((response) => {
        console.log(response);
        localStorage.setItem('token', response?.data?.token);
        localStorage.setItem('role', response?.data?.role);
        router.replace(`/admin`)
    }).catch((error) => {
        console.log("error", error.message)
        alert(error?.response?.data?.error)
    })
}

const CreateUserService = (adminData, router) => async (dispatch) => {
    await axios.post('/api/users', adminData, { headers: await Authorization() }).then((response) => {
        console.log(response);
        // dispatch(createUser(response.data))
        dispatch(GetAllUserService())
        alert("created successfully!!!");
        // router.replace(`/admin`)
    }).catch((error) => {
        console.log("error", error.message)
        alert(error?.response?.data?.error)
    })
}

const GetAllUserService = (page = 1,limit, search = "") => async (dispatch) => {
    await axios.get(`/api/users?page=${page}&limit=${limit}&search=${search}`, { headers: await Authorization() }).then((response) => {
        dispatch(getUsers(response.data))
        console.log(response.data);
        
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteUserService = (userId) => async (dispatch) => {
    await axios.delete(`/api/users/${userId}`, { headers: await Authorization() }).then(() => {
        dispatch(GetAllUserService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const GetUserService = (userId) => async (dispatch) => {
    await axios.get(`/api/users/${userId}`, { headers: await Authorization() }).then((response) => {
        dispatch(getUserId(response.data))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const PutUserService = (userId, userData) => async (dispatch) => {
    await axios.put(`/api/users/${userId}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getUserId(response.data))
        dispatch(GetUserService(userId))
        alert("updated successfully!!!");
    }).catch((error) => {
        console.log("error", error.message)
    })
}


export { AdminLoginService, CreateUserService, GetAllUserService, GetUserService, DeleteUserService, PutUserService }