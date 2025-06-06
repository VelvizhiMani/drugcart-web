"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetSubCategoryService, GetSubCategoryUrlService } from '@/services/subCategoryService';
import { useParams, useRouter } from 'next/navigation';

const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#7d5c68',
    ...theme.typography.body2,
    padding: 36,
    borderRadius: 12,
    marginTop: 20,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#00a65a",
        ...theme.typography.body2,
        padding: 36,
        borderRadius: 12,
    },
}));

function HealthDevice() {
    const { subCategoryUrl } = useSelector((state) => state.subCategoryData)
    const dispatch = useDispatch()
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        dispatch(GetSubCategoryUrlService("health-care-device"))
    }, [])

    console.log('subCategoryUrl', subCategoryUrl)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Health Care Device Sub Category List</Typography>
            </Box>
            <Grid container spacing={2}>
                {subCategoryUrl && subCategoryUrl?.map((item, i) => (
                    <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 3 }} key={i}>
                        <CardItem
                            elevation={6}
                            onClick={() => router.push(`/admin/storedevicelist/${item?.url}`)}
                        >
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={20}
                                    color='#fff'
                                    textAlign="center"
                                    sx={{ flexGrow: 1 }}
                                >
                                    {item?.subcat_name}
                                </Typography>
                            </Box>
                        </CardItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HealthDevice