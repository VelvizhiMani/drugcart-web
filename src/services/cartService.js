import axios from 'axios'
import Authorization from '../utils/authorization'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import { addToCart, getCart, incrementQuantity, decrementQuantity, removeFromCart } from '../reduxToolkit/slices/cartSlice'

const getCartService = () => async (dispatch) => {
    await axios.get('/api/cart', { headers: await Authorization() }).then((response) => {
        dispatch(getCart(response.data))
        // localStorage.setItem('cart', cart);
        console.log(response.data);

    }).catch((error) => {
        console.log("error", error.message)
    })
}

const PostCartService = (data) => async (dispatch) => {
    dispatch(addToCart(data))
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/cart', data, { headers: await Authorization() })
        dispatch(addToCart(postData.data))
        dispatch(getCartService())
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Cart added Successfully!!!", severity: "success" }))
    } catch (error) {
        dispatch(getCartService())
        dispatch(IsLoading(false))
        if (error?.response?.data?.error !== "Unauthorized") {
            dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
            localStorage.removeItem("cart")
        }
        console.log("error", error.message)
        // localStorage.removeItem("cart")
        // dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}


const CartIncrementService = (id, userData) => async (dispatch) => {
    dispatch(incrementQuantity(id))
    await axios.put(`/api/cart/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getCartService())
        localStorage.removeItem('cart')
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const CartDecrementService = (id, userData) => async (dispatch) => {
    dispatch(decrementQuantity(id))
    await axios.put(`/api/cart/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getCartService())
        localStorage.removeItem('cart')
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteCartService = (id) => async (dispatch) => {
    dispatch(removeFromCart(id))
    await axios.delete(`/api/cart/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getCartService())
        localStorage.removeItem('cart')
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { getCartService, PostCartService, CartIncrementService, CartDecrementService, DeleteCartService }