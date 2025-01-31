import axios from 'axios'
import { createUser, userRegister } from '@/reduxToolkit/slices/userSlice'

const registerService = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        dispatch(userRegister(response.data))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const PostUserService = (data) => async (dispatch) => {
    await axios.post('https://jsonplaceholder.typicode.com/posts', data).then((response) => {
        dispatch(createUser(response.data))
        dispatch(registerService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const sendOTPService = (userData, router) => async (dispatch) => {
    console.log(userData);
    
    const { phone, username } = userData
    await axios.post('/api/users', {phone}).then((response) => {
        console.log(response);
        router.push(`/otp?username=${username}&phone=${phone}`)
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const verifyOTPService = (userData, router) => async (dispatch) => {
    await axios.post('/api/verify-otp', userData).then((response) => {
        console.log("user data", response.data);
        localStorage.setItem('token', response?.data?.token);
        router.push(`/`)
    }).catch((error) => {
        console.log("error", error?.response?.data?.error)
        alert(error?.response?.data?.error)
    })
    console.log('dispatch', phone);
    
}
export { registerService, PostUserService, sendOTPService, verifyOTPService }