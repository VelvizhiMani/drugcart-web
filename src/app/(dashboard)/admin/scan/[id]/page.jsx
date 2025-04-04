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
import { PutScanService, GetScanIdService } from '@/services/scanService';
import { useSelector, useDispatch } from "react-redux";

function EditScan() {
    const { scan } = useSelector((state) => state.scanData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetScanIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            scantestname: scan?.scantestname || "",
            url: scan?.scantestname || "",
            scanImage: scan?.scanImage || "",
            testcode: scan?.testcode || "",
            category: scan?.category || "",
            areas: scan?.areas || "",
            description: scan?.description || "",
        },
        validationSchema: yup.object({
            scantestname: yup.string().required("Scan Name is required"),
            testcode: yup.string().required("Test Code is required"),
            category: yup.string().required("Category is required"),
            areas: yup.string().required("Area is required"),
            scanImage: yup.string().required("Image is required"),
        }),
        onSubmit: async (data) => {
            console.log(data);
            await dispatch(PutScanService(scan?._id, data))
        },
    });

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const handleScanImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("scanImage", URL.createObjectURL(file));
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.scantestname)
    }, [formik.values.scantestname])


    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Scan
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/scan`)}
                >
                    Scan List
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
                            title={"Scan Test Name:"}
                            value={formik.values.scantestname}
                            onChange={formik.handleChange("scantestname")}
                            helperText={
                                formik.touched.scantestname ? formik.errors.scantestname : null
                            }
                            error={formik.touched.scantestname ? formik.errors.scantestname : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Test Code:"}
                            value={formik.values.testcode}
                            onChange={formik.handleChange("testcode")}
                            helperText={
                                formik.touched.testcode ? formik.errors.testcode : null
                            }
                            error={formik.touched.testcode ? formik.errors.testcode : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Category:"}
                            value={formik.values.category}
                            onChange={formik.handleChange("category")}
                            helperText={
                                formik.touched.category ? formik.errors.category : null
                            }
                            error={formik.touched.category ? formik.errors.category : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Area:"}
                            value={formik.values.areas}
                            onChange={formik.handleChange("areas")}
                            helperText={
                                formik.touched.areas ? formik.errors.areas : null
                            }
                            error={formik.touched.areas ? formik.errors.areas : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>

                        <ImageInput
                            title={"Scan Image:"}
                            image={formik.values.scanImage}
                            onChange={handleScanImage}
                            error={
                                formik.touched.scanImage
                                    ? formik.errors.scanImage
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <TextEditor
                            title={"Description:"}
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

export default EditScan;
