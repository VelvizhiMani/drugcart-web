import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { getContractUser } from '../reduxToolkit/slices/contractSlice'

const GetContractUserService = () => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/contractlist`, { headers: await Authorization() })
        dispatch(getContractUser(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

export { GetContractUserService }