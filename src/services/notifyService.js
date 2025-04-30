import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { addNotify, getNotifyList, getNotify } from '../reduxToolkit/slices/notifySlice'

const PostNotifyService = (data, resetForm) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/notify', data, { headers: await Authorization() })
        dispatch(addNotify(postData.data))
        // dispatch(GetNotifyIdService(postData.data?._id))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Submitted Successfully!!!", severity: "success" }))
        resetForm()
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}

const GetNotifyListService = (page = 1, limit, search = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/notify?page=${page}&limit=${limit}&search=${search}`, { headers: await Authorization() })
        dispatch(getNotifyList(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetNotifyIdService = (id) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/notify/${id}`, { headers: await Authorization() })
        dispatch(getNotify(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const PutNotifyService = (id, userData) => async (dispatch) => {
    await axios.put(`/api/mainslider/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getMainSlider(response.data))
        dispatch(GetMainSliderIdService(id))
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteNotifyService = (id) => async (dispatch) => {
    await axios.delete(`/api/notify/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getMainSlider(id))
        dispatch(GetMainSliderListService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { PostNotifyService, GetNotifyListService, GetNotifyIdService, PutNotifyService, DeleteNotifyService }
