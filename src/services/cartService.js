import axios from 'axios'
import Authorization from '../utils/authorization'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import { addToCart, getCart } from '../reduxToolkit/slices/cartSlice'

const getCartService = () => async (dispatch) => {
    await axios.get('/api/cart', { headers: await Authorization() }).then((response) => {
        dispatch(getCart(response.data?.carts))
        // localStorage.setItem('cart', cart);
        console.log(response.data?.carts);
        
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const PostCartService = (data) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/cart', data, { headers: await Authorization() })
        dispatch(addToCart(postData.data))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Created Successfully!!!", severity: "success" }))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}
export { getCartService, PostCartService }