import axios from 'axios'
import { IsLoading, showToast } from '../reduxToolkit/slices/commonSlice'
import Authorization from '../utils/authorization'
import { addProduct, getProducts, getProduct, getGenericProductUrl, getProductCategory, getProductName, GetProductCats } from '../reduxToolkit/slices/productSlice'

const PostProductService = (data, resetForm) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const postData = await axios.post('/api/product', data, { headers: await Authorization() })
        dispatch(addProduct(postData.data))
        dispatch(GetProductIdService(postData.data?._id))
        dispatch(IsLoading(false))
        dispatch(showToast({ message: "Created Successfully!!!", severity: "success" }))
        resetForm()
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
        dispatch(showToast({ message: error?.response?.data?.error, severity: "error" }))
    }
}

const GetProductService = (page = 1, limit, search = "", generics = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/product?page=${page}&limit=${limit}&search=${search}&generices=${generics}`, { headers: await Authorization() })
        dispatch(getProducts(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetProductNameService = (page = 1, limit, search = "", generics = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/product/name?page=${page}&limit=${limit}&search=${search}`, { headers: await Authorization() })
        dispatch(getProductName(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const GetProductCategoryService = (page = 1, limit = 20, subname = "", search = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/product/category?page=${page}&limit=${limit}&subcat_name=${subname}&search=${search}`, { headers: await Authorization() })
        dispatch(getProductCategory(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}


const GetProductCatsService = (page = 1, limit = 4, cat_name = "", search = "") => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getData = await axios.get(`/api/product/categorys?page=${page}&limit=${limit}&cat_name=${cat_name}&search=${search}`, { headers: await Authorization() })
        dispatch(GetProductCats(getData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}


const GetProductIdService = (id) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/product/${id}`, { headers: await Authorization() })
        dispatch(getProduct(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}

const PutProductService = (id, userData) => async (dispatch) => {
    await axios.put(`/api/product/${id}`, userData, { headers: await Authorization() }).then((response) => {
        dispatch(getProduct(response.data))
        dispatch(GetProductIdService(id))
        dispatch(showToast({ message: "Updated Successfully!!!", severity: "success" }))
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const DeleteProductService = (id) => async (dispatch) => {
    await axios.delete(`/api/category/${id}`, { headers: await Authorization() }).then(() => {
        dispatch(getProduct(id))
        dispatch(GetProductService())
    }).catch((error) => {
        console.log("error", error.message)
    })
}

const GetProductGeneticUrlService = (url) => async (dispatch) => {
    try {
        dispatch(IsLoading(true))
        const getIdData = await axios.get(`/api/product/generices?search=${url}`, { headers: await Authorization() })
        dispatch(getGenericProductUrl(getIdData.data))
        dispatch(IsLoading(false))
    } catch (error) {
        dispatch(IsLoading(false))
        console.log("error", error.message)
    }
}


export { PostProductService, GetProductService, GetProductNameService, GetProductCatsService, GetProductCategoryService, GetProductIdService, PutProductService, DeleteProductService, GetProductGeneticUrlService }