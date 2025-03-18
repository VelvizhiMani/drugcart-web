import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { addContactUs, getContactUsList, getContactUs } from '../reduxToolkit/slices/contactSlice'

const PostContacUsService = (data, resetForm) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/contactus', data, { headers: await Authorization() })
        dispatch(addContactUs(postData.data))
        dispatch(GetContacUsIdService(postData.data?._id))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Message sent Successfully!!!", severity: "success" }))
        resetForm()
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}

const GetContacUsListService = (page = 1, limit, search = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/contactus?page=${page}&limit=${limit}&search=${search}`, { headers: await Authorization() })
        dispatch(getContactUsList(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetContacUsIdService = (id) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/contactus/${id}`, { headers: await Authorization() })
        dispatch(getContactUs(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const DeleteContacUsService = (id) => async (dispatch) => {
    await axios.delete(`/api/contactus/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getContactUs(id))
        dispatch(GetContacUsListService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { PostContacUsService, GetContacUsListService, GetContacUsIdService, DeleteContacUsService }