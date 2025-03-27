import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { addOrder, getAllOrders, getOrder, getGetOrderData } from '../reduxToolkit/slices/orderSlice'

const PostOrderService = (data, router) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/order', data, { headers: await Authorization() })
        dispatch(addOrder(postData.data))
        dispatch(GetOrderIdService(postData.data?._id))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Order Successfully!!!", severity: "success" }))
        router.replace('/success')
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}

const GetOrdersService = (page = 1, limit, search = "", status = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/order?page=${page}&limit=${limit}&search=${search}&orderStatus=${status}`, { headers: await Authorization() })
        dispatch(getAllOrders(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetOrderIdService = (id) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/order/${id}`, { headers: await Authorization() })
        dispatch(getOrder(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetOrderOneService = (orderId) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/order/order-view/${orderId}`, { headers: await Authorization() })
        dispatch(getGetOrderData(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const PutOrderService = (id, userData) => async (dispatch) => {
    await axios.put(`/api/order/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getOrder(response.data))
        dispatch(GetOrderIdService(id))
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteOrderService = (id) => async (dispatch) => {
    await axios.delete(`/api/order/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getOrder(id))
        dispatch(GetOrdersService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { PostOrderService, GetOrdersService, GetOrderIdService, PutOrderService, DeleteOrderService, GetOrderOneService }