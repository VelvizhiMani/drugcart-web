import axios from 'axios'
import { getProfile } from '../reduxToolkit/slices/profileSlice'
import Authorization from '../utils/authorization'
import { IsLoading } from '@/reduxToolkit/slices/commonSlice'
import { GetAddressIdService } from './addressService'
import { mergeCartAfterLogin } from '@/reduxToolkit/slices/cartSlice'

const getProfileService = () => async (dispatch, getState) => {
    dispatch(IsLoading(true))
    await axios.get('/api/profile', { headers: await Authorization() }).then((response) => {
        dispatch(getProfile(response.data))
        dispatch(GetAddressIdService(response.data?._id))
        // localStorage.removeItem("cart")
        dispatch(IsLoading(false))
        const guestCart = getState().cartData.items;
        console.log("guestCart", guestCart);
        dispatch(mergeCartAfterLogin(guestCart));
        
    }).catch((error) => {
        console.log("error", error.message)
        dispatch(IsLoading(false))
    })
}

export { getProfileService }