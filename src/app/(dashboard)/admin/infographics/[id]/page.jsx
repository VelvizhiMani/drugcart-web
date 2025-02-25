"use client";
import { useRouter, useParams } from "next/navigation";
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
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutInfoGraphicsService, GetInfoGraphicsIdService } from '@/services/infoGraphicsService';
import { useDispatch, useSelector } from "react-redux";

function EditInfoGraphics() {
    const { infoGraphics } = useSelector((state) => state.infoGraphicssData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetInfoGraphicsIdService(params?.id))
    }, [params?.id])

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: infoGraphics?. title || "",
            url: infoGraphics?.url || "",
            thuming: infoGraphics?.thuming || "",
            thumbalt: infoGraphics?.thumbalt || "",
            picture: infoGraphics?.picture || "",
            alt: infoGraphics?.alt || "",
            metatitle: infoGraphics?.metatitle || "",
            metakeyboard: infoGraphics?.metakeyboard || "",
            metadesc: infoGraphics?.metadesc || "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            url: yup.string().required("Url is required"),
            picture: yup.string().required("Picture is required")
        }),
        onSubmit: async (data) => {
            console.log(data);
            await dispatch(PutInfoGraphicsService(infoGraphics?._id, data))
        },
    });

    const handleThumImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("thuming", URL.createObjectURL(file));
    };

    const handleImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("picture", URL.createObjectURL(file));
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.title)
    }, [formik.values.title])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Infographics
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/infographics`)}
                >
                    Infographics List
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
                            title={"Title"}
                            value={formik.values.title}
                            onChange={formik.handleChange("title")}
                            helperText={
                                formik.touched.title ? formik.errors.title : null
                            }
                            error={formik.touched.title ? formik.errors.title : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.title)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Images Thumb"}
                            image={formik.values.thuming}
                            onChange={handleThumImage}
                            error={
                                formik.touched.thuming
                                    ? formik.errors.thuming
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Image Thumb Alt"}
                            value={formik.values.thumbalt}
                            onChange={formik.handleChange("thumbalt")}
                            helperText={
                                formik.touched.thumbalt ? formik.errors.thumbalt : null
                            }
                            error={formik.touched.thumbalt ? formik.errors.thumbalt : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Images"}
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
                            title={"Image Alt"}
                            value={formik.values.alt}
                            onChange={formik.handleChange("alt")}
                            helperText={
                                formik.touched.alt ? formik.errors.alt : null
                            }
                            error={formik.touched.alt ? formik.errors.alt : null}
                        />
                    </Grid2>
                </Grid2>
            </Paper>

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
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Meta Title"}
                            value={formik.values.metatitle}
                            onChange={formik.handleChange("metatitle")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Meta Keyword"}
                            value={formik.values.metakeyboard}
                            onChange={formik.handleChange("metakeyboard")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <InputArea
                            title={"Meta Description"}
                            value={formik.values.metadesc}
                            onChange={formik.handleChange("metadesc")}
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

export default EditInfoGraphics;
