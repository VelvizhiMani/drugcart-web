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
import { PostCountryCodeService } from '@/services/countryCodeService';
import { useDispatch } from "react-redux";

function CountryCodeAdd() {
    const router = useRouter();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            country: "",
            code: "",
            flag: "",
        },
        validationSchema: yup.object({
            country: yup.string().required("Country is required"),
            code: yup.string().required("Code is required"),
            flag: yup.string().required("Flag is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostCountryCodeService(data, resetForm))
        },
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("flag", URL.createObjectURL(file));
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
                    Add Country Code
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/country_code_list`)}
                >
                    Country Code List
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
                            title={"Country Name"}
                            value={formik.values.country}
                            onChange={formik.handleChange("country")}
                            helperText={
                                formik.touched.country ? formik.errors.country : null
                            }
                            error={formik.touched.country ? formik.errors.country : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Country Code"}
                            value={formik.values.code}
                            onChange={formik.handleChange("code")}
                            helperText={
                                formik.touched.code ? formik.errors.code : null
                            }
                            error={formik.touched.code ? formik.errors.code : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Country Flag"}
                            image={formik.values.flag}
                            onChange={handleImage}
                            error={
                                formik.touched.flag
                                    ? formik.errors.flag
                                    : null
                            }
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

export default CountryCodeAdd;
