"use client"
import AdminLayout from '@/components/layouts/AdminLayout'
import { useRouter } from 'next/navigation'
import { Box, Button, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SelectInput from '@/components/admin/input/SelectInput';
import TextInput from '@/components/admin/input/TextInput';
import { useFormik } from 'formik';
import * as yup from "yup";

function UserAdd() {
    const router = useRouter()
    const [userType, setUserType] = useState("")

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            userType: "",
            salary: "",
        },
        validationSchema: yup.object({
            username: yup.string().required("Username is required"),
            email: yup.string().email().required("Email is required"),
            password: yup.string().required("Password is required").min(6, "6 characters required"),
            userType: yup.string().required("User Type is required"),
            salary: yup.string().required("Salary is required"),
        }),
        onSubmit: async (data) => {
            await console.log(data)
        },
    });

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
                        <TextInput
                            title={"User Name"}
                            value={formik.values.username}
                            onChange={formik.handleChange("username")}
                            helperText={formik.touched.username ? formik.errors.username : null}
                            error={formik.touched.username ? formik.errors.username : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            type="email"
                            title={"Email"}
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            helperText={formik.touched.username ? formik.errors.email : null}
                            error={formik.touched.email ? formik.errors.email : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Password"}
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            helperText={formik.touched.username ? formik.errors.password : null}
                            error={formik.touched.password ? formik.errors.password : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"User Type"}
                            value={formik.values.userType}
                            onChange={formik.handleChange("userType")}
                            helperText={formik.touched.username ? formik.errors.userType : null}
                            error={formik.touched.userType ? formik.errors.userType : null}
                            data={UType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            type="number"
                            title={"Salary"}
                            value={formik.values.salary}
                            onChange={formik.handleChange("salary")}
                            helperText={formik.touched.username ? formik.errors.salary : null}
                            error={formik.touched.salary ? formik.errors.salary : null}
                        />
                    </Grid2>
                </Grid2>
            </Paper>

            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Button
                    style={{ textTransform: "capitalize" }}
                    variant="contained"
                    onClick={formik.handleSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </AdminLayout>
    )
}

export default UserAdd