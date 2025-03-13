"use client";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Grid2,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import TextInput from "@/components/admin/input/TextInput";
import TextEditor from "@/components/admin/input/TextEditor";
import InputArea from "@/components/admin/input/InputArea";
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostTestPackageService } from '@/services/testPackageService';
import { useDispatch } from "react-redux";

function AdminLabTestAdd() {
    const router = useRouter();
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: "",
            packageName: "",
            packageurl: "",
            testname: "",
            url: "",
            nooftest: "",
            logo: "",
            image: "",
            price: "",
            saleprice: "",
            discount: "",
            type: "",
            required: "",
            offervalid: "",
            labdescription: "",
            description: "",
            certificates: "",
            testincludes: "",
            deliverytiming: "",
            procedure: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Lab Name is required"),
            url: yup.string().required("Url is required"),
            image: yup.string().required("Image is required"),
            packageName: yup.string().required("Url is required"),
            packageurl: yup.string().required("Package Url is required"),
            testname: yup.string().required("Test Name is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostTestPackageService(data, resetForm))
        },
    });

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const handleImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("image", URL.createObjectURL(file));
    };

    const handleLogo = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("logo", URL.createObjectURL(file));
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.name)
    }, [formik.values.name])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Test Package
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/test-package`)}
                >
                    Test Package List
                </Button>
            </Box>
            <Paper
                sx={{
                    borderColor: "#fa4b31",
                    borderTopWidth: 3,
                    borderBottomWidth: 2,
                    p: 2,
                    mt: 4,
                }}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Lab Name"}
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            helperText={
                                formik.touched.name ? formik.errors.name : null
                            }
                            error={formik.touched.name ? formik.errors.name : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL(Ex:healthy-life-package)"}
                            value={URLText(formik.values.url)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Image"}
                            image={formik.values.image}
                            onChange={handleImage}
                            error={
                                formik.touched.image
                                    ? formik.errors.image
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Logo"}
                            image={formik.values.logo}
                            onChange={handleLogo}
                            error={
                                formik.touched.logo
                                    ? formik.errors.logo
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Package Name"}
                            value={formik.values.packageName}
                            onChange={formik.handleChange("packageName")}
                            helperText={
                                formik.touched.packageName ? formik.errors.packageName : null
                            }
                            error={formik.touched.packageName ? formik.errors.packageName : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL(Ex:healthy-life-package)"}
                            value={URLText(formik.values.packageurl)}
                            onChange={formik.handleChange("packageurl")}
                            helperText={
                                formik.touched.packageurl ? formik.errors.packageurl : null
                            }
                            error={formik.touched.packageurl ? formik.errors.packageurl : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Test Name"}
                            value={formik.values.testname}
                            onChange={formik.handleChange("testname")}
                            helperText={
                                formik.touched.testname ? formik.errors.testname : null
                            }
                            error={formik.touched.testname ? formik.errors.testname : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"No of Test"}
                            type="number"
                            value={formik.values.nooftest}
                            onChange={formik.handleChange("nooftest")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Price"}
                            type="number"
                            value={formik.values.price}
                            onChange={formik.handleChange("price")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Sale Price"}
                            type="number"
                            value={formik.values.saleprice}
                            onChange={formik.handleChange("saleprice")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Discount"}
                            type="number"
                            value={formik.values.discount}
                            onChange={formik.handleChange("discount")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Type"}
                            type="text"
                            value={formik.values.type}
                            onChange={formik.handleChange("type")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Test Requirement"}
                            type="text"
                            value={formik.values.required}
                            onChange={formik.handleChange("required")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Offer Valid"}
                            type="text"
                            value={formik.values.offervalid}
                            onChange={formik.handleChange("offervalid")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Offer Valid"}
                            type="text"
                            value={formik.values.offervalid}
                            onChange={formik.handleChange("offervalid")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <InputArea
                            title={"Lab Description"}
                            value={formik.values.labdescription}
                            onChange={formik.handleChange("labdescription")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <InputArea
                            title={"Note"}
                            value={formik.values.description}
                            onChange={formik.handleChange("description")}
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
        </Box>
    );
}

export default AdminLabTestAdd;
