import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { addLocation, getLocationList, getLocation } from '../reduxToolkit/slices/locationSlice'

const PostLocationService = (data, resetForm) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/location', data, { headers: await Authorization() })
        dispatch(addLocation(postData.data))
        dispatch(GetLocationIdService(postData.data?._id))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Created Successfully!!!", severity: "success" }))
        resetForm()
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}

const GetLocationListService = (page = 1, limit, search = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/location?page=${page}&limit=${limit}&search=${search}`, { headers: await Authorization() })
        dispatch(getLocationList(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetLocationIdService = (id) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/location/${id}`, { headers: await Authorization() })
        dispatch(getLocation(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const PutLocationService = (id, userData) => async (dispatch) => {
    await axios.put(`/api/location/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getLocation(response.data))
        dispatch(GetLocationIdService(id))
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteLocationService = (id) => async (dispatch) => {
    await axios.delete(`/api/location/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getLocation(id))
        dispatch(GetLocationListService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { PostLocationService, GetLocationListService, GetLocationIdService, PutLocationService, DeleteLocationService }
