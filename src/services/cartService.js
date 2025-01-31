import axios from 'axios'
import { getCart } from '../reduxToolkit/slices/cartSlice'
import Authorization from '../utils/authorization'

const getCartService = () => async (dispatch) => {
    await axios.get('/api/cart', { headers: await Authorization() }).then((response) => {
        dispatch(getCart(response.data))
        // localStorage.setItem('cart', cart);
    }).catch((error) => {
        console.log("error", error.message)
    })
}

export { getCartService }