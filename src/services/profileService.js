import axios from 'axios'
import { getProfile } from '../reduxToolkit/slices/profileSlice'
import Authorization from '../utils/authorization'
import { IsLoading } from '@/reduxToolkit/slices/commonSlice'

const getProfileService = () => async (dispatch) => {
    dispatch(IsLoading(true))
    await axios.get('/api/profile', { headers: await Authorization() }).then((response) => {
        dispatch(getProfile(response.data))
        dispatch(IsLoading(false))
    }).catch((error) => {
        console.log("error", error.message)
        dispatch(IsLoading(false))
    })
}

export { getProfileService }