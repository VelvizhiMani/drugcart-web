"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoryService } from '@/services/categoryService';
import { GetSubCategoryService, GetSubCategoryUrlService } from '@/services/subCategoryService';
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

function AyushCategory() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { subCategoryUrl } = useSelector((state) => state.subCategoryData)

    useEffect(() => {
        dispatch(GetSubCategoryUrlService("ayush"))
    }, [])
    console.log('categories', subCategoryUrl)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {subCategoryUrl && subCategoryUrl.map((item, i) => (
                    <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }} key={i}>
                        <CardItem
                            elevation={6}
                            onClick={() => router.push(`/admin/ayushlist/${item?.url}`)}
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

export default AyushCategory