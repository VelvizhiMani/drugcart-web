"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoryService } from '@/services/categoryService';
import { GetSubCategoryService } from '@/services/subCategoryService';
import { useRouter } from 'next/navigation';
import { GetGeneticService } from '@/services/genericService';
import { GetProductService } from '@/services/productService';
import { GetManufactuerService } from '@/services/manufactuerService';
import { GetFormService } from '@/services/formService';
import { GetStorageService } from '@/services/storageService';
import { GetPackageService } from '@/services/packageService';
import { GetCourierService } from '@/services/courierService';
import { GetCountryCodeService } from '@/services/countryCodeService';
import { GetWrittenByService } from '@/services/writtenByService';
import { GetReviewByService } from '@/services/reviewByService';
import { GetReferenceService } from '@/services/referenceService';
import { GetStockService } from '@/services/stockService';

const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    borderRadius: 12,
    marginTop: 2,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#00a65a",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        borderRadius: 12,
    },
}));

function MedicinePage() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { categories } = useSelector((state) => state.categoryData)
    const { subCategories } = useSelector((state) => state.subCategoryData)
    const { genericList } = useSelector((state) => state.genericData)
    const { productList } = useSelector((state) => state.productData);
    const { manufactuerList } = useSelector((state) => state.manufactuerData)
    const { formList } = useSelector((state) => state.formData)
    const { storageList } = useSelector((state) => state.storageData)
    const { packageList } = useSelector((state) => state.packageData)
    const { courierList } = useSelector((state) => state.courierData)
    const { countryCodeList } = useSelector((state) => state.countryCodeData)
    const { writtenByList } = useSelector((state) => state.writtenbyData)
    const { reviewByList } = useSelector((state) => state.reviewbyData)
    const { referenceList } = useSelector((state) => state.referenceData)
    const { stockList } = useSelector((state) => state.stockData)

    useEffect(() => {
        dispatch(GetCategoryService(0, 0))
        dispatch(GetSubCategoryService(0, 0))
        dispatch(GetGeneticService(0, 0))
        dispatch(GetProductService(0, 0))
        dispatch(GetManufactuerService(0, 0))
        dispatch(GetFormService(0, 0))
        dispatch(GetStorageService(0, 0))
        dispatch(GetPackageService(0, 0))
        dispatch(GetCourierService(0, 0))
        dispatch(GetCountryCodeService(0, 0))
        dispatch(GetWrittenByService(0, 0))
        dispatch(GetReviewByService(0, 0))
        dispatch(GetReferenceService(0, 0))
        dispatch(GetStockService(0, 0))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/category')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Category
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{categories?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/subcategory')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Sub Category
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{subCategories?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/genericlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Genetic Name
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{genericList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/medicinecat')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Products
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{productList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/manufactuerlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Manufactuer
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{manufactuerList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/formlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Form
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{formList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/storagelist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Storage
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{storageList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/packagelist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Pack
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{packageList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/courierlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Courier
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{courierList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/country_code_list')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Country
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countryCodeList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/country_code_list')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Written by list
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{writtenByList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/country_code_list')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Review by list
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{reviewByList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/referlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Reference list
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{referenceList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/stocklist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Stock list
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{stockList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MedicinePage