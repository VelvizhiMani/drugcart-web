"use client"
import AdminLayout from '@/components/layouts/AdminLayout'
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation'
import { Box, Button, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SelectInput from '@/components/admin/input/SelectInput';
import TextInput from '@/components/admin/input/TextInput';
import ImageInput from '@/components/admin/input/ImageInput';
import InputArea from '@/components/admin/input/InputArea';
import VideoInput from '@/components/admin/input/VideoInput';

function SubCategoryAdd() {
    const router = useRouter()
    const [categoryType, setCategoryType] = useState("")
    const [stock, setStock] = useState("")
    const handleTypeChange = (event) => {
        setCategoryType(event.target.value);
    };
    const handleStockChange = (event) => {
        setStock(event.target.value);
    };

    const catType = ["alzheimers-disese", "anaemia"]
    const availableData = [
        "In Stock",
        "Out of Stock",
        " Sold Out",
        "Banned",
        "Not For Sale",
        "Discontinued",
        "Withdrawn",
        "Banned For Sale",
        "We do not sell this product",
        "Banned for Sales - As per Ministry of Health and Family Welfare",
        "We do not facilitate sale of this product at present",
        "We do not sell this product at",
        "Not for Online sale"
    ]

    return (
        <AdminLayout>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Add Sub Category</Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/subcategory`)}
                >
                    Sub Category List
                </Button>
            </Box>
            <Paper sx={{ borderColor: "#fa4b31", borderTopWidth: 3, borderBottomWidth: 2, p: 2, mt: 4 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Category Name"}
                            value={categoryType}
                            onChange={handleTypeChange}
                            data={catType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Sub Category Name"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"URL"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput title={"SubCategory Image"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Image Alt Tag"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <VideoInput title={"Video Upload"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Video Alt Tag"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Available Stock"}
                            value={stock}
                            onChange={handleStockChange}
                            data={availableData}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput title={"Page Banner Image"} />
                    </Grid2>
                </Grid2>
            </Paper>
            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Button style={{ textTransform: "capitalize" }} variant="contained">Submit</Button>
            </Stack>
        </AdminLayout>
    )
}

export default SubCategoryAdd