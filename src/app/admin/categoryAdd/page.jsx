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

function CategoryAdd() {
    const router = useRouter()
    const [categoryType, setCategoryType] = useState("")

    const handleTypeChange = (event) => {
        setCategoryType(event.target.value);
    };

    const catType = ["prescriptions", "non-prescriptions", "Others"]

    return (
        <AdminLayout>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Add Category</Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/category`)}
                >
                    Category List
                </Button>
            </Box>
            <Paper sx={{ borderColor: "#fa4b31", borderTopWidth: 3, borderBottomWidth: 2, p: 2, mt: 4 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Category Type"}
                            value={categoryType}
                            onChange={handleTypeChange}
                            data={catType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Category Name"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"URL"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput title={"Category Image"} />
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
                </Grid2>
            </Paper>

            <Paper sx={{ borderColor: "#fa4b31", borderTopWidth: 3, borderBottomWidth: 2, p: 2, mt: 4 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Meta Title"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Meta Keyword"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <InputArea title={"Meta Description"} />
                    </Grid2>
                </Grid2>
            </Paper>
            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Button style={{ textTransform: "capitalize" }} variant="contained">Submit</Button>
            </Stack>
        </AdminLayout>
    )
}

export default CategoryAdd