"use client";
import { useParams, useRouter } from "next/navigation";
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
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutLabPackageService, GetLabPackageIdService } from '@/services/labPackageService';
import { useSelector, useDispatch } from "react-redux";

function EditAdminLabPackage() {
    const { labPackage } = useSelector((state) => state.labPackageData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetLabPackageIdService(params?.id))
    }, [params?.id])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            packageName: labPackage?.packageName || "",
            url: labPackage?.url || "",
            image: labPackage?.image || "",
            alt: labPackage?.alt || "",
        },
        validationSchema: yup.object({
            packageName: yup.string().required("Name is required"),
            url: yup.string().required("Url is required"),
            image: yup.string().required("Image is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PutLabPackageService(labPackage?._id, data))
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


    useEffect(() => {
        formik.values.url = URLText(formik.values.packageName)
    }, [formik.values.packageName])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Lab Package
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/lab-package`)}
                >
                    Lab Package List
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
                            title={"Package"}
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
                        <TextInput title={"Image Alt Tag"}
                            value={formik.values.alt}
                            onChange={formik.handleChange("alt")}
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

export default EditAdminLabPackage;
