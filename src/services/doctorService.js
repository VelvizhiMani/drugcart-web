import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { addDoctor, getDoctorList, getDoctor } from '../reduxToolkit/slices/doctorSlice'

const PostDoctorService = (data, resetForm) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/doctorlist', data, { headers: await Authorization() })
        dispatch(addDoctor(postData.data))
        dispatch(GetDoctorIdService(postData.data?._id))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Created Successfully!!!", severity: "success" }))
        resetForm()
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}

const GetDoctorService = (page = 1, limit, search = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/doctorlist?page=${page}&limit=${limit}&search=${search}`, { headers: await Authorization() })
        dispatch(getDoctorList(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetDoctorIdService = (id) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/doctorlist/${id}`, { headers: await Authorization() })
        dispatch(getDoctor(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const PutDoctorService = (id, userData) => async (dispatch) => {
    await axios.put(`/api/doctorlist/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getDoctor(response.data))
        dispatch(GetDoctorIdService(id))
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteDoctorService = (id) => async (dispatch) => {
    await axios.delete(`/api/doctorlist/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getDoctor(id))
        dispatch(GetDoctorService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { PostDoctorService, GetDoctorService, GetDoctorIdService, PutDoctorService, DeleteDoctorService }