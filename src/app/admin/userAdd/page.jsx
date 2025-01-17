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

function UserAdd() {
    const router = useRouter()
    const [userType, setUserType] = useState("")

    const handleTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const UType = ["salary", "contract"]

    return (
        <AdminLayout>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Add User</Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/dashboard`)}
                >
                    User List
                </Button>
            </Box>
            <Paper sx={{ borderColor: "#fa4b31", borderTopWidth: 3, borderBottomWidth: 2, p: 2, mt: 4 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"User Name"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Email"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Password"} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"User Type"}
                            value={userType}
                            onChange={handleTypeChange}
                            data={UType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Salary"} />
                    </Grid2>
                </Grid2>
            </Paper>

            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Button style={{ textTransform: "capitalize" }} variant="contained">Submit</Button>
            </Stack>
        </AdminLayout>
    )
}

export default UserAdd