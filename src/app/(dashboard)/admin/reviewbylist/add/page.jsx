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
import SelectInput from "@/components/admin/input/SelectInput";
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostReviewByService } from '@/services/reviewByService';
import { useDispatch } from "react-redux";

function ReviewByAdd() {
    const router = useRouter();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: "",
            qualification: "",
            picture: "",
            experience: "",
            imagealt: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Name is required"),
            qualification: yup.string().required("Qualification is required"),
            picture: yup.string().required("Picture is required"),
            experience: yup.string().required("Experience is required"),
            imagealt: yup.string().required("Image alt is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostReviewByService(data, resetForm))
        },
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("picture", URL.createObjectURL(file));
    };

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Review By
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/reviewbylist`)}
                >
                    Add Review By List
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
                            title={"Name"}
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
                            title={"Qualification"}
                            value={formik.values.qualification}
                            onChange={formik.handleChange("qualification")}
                            helperText={
                                formik.touched.qualification ? formik.errors.qualification : null
                            }
                            error={formik.touched.qualification ? formik.errors.qualification : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Image"}
                            image={formik.values.picture}
                            onChange={handleImage}
                            error={
                                formik.touched.picture
                                    ? formik.errors.picture
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Image Alt Tag"}
                            value={formik.values.imagealt}
                            onChange={formik.handleChange("imagealt")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Experience EX: (2 years)"}
                            value={formik.values.experience}
                            onChange={formik.handleChange("experience")}
                            helperText={
                                formik.touched.experience ? formik.errors.experience : null
                            }
                            error={formik.touched.experience ? formik.errors.experience : null}
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

export default ReviewByAdd;
