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
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostPromotionService } from '@/services/promotionService';
import { GetMainSliderListService } from '@/services/mainSliderService';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function PromotionAdd() {
    const [imagePreview, setImagePreview] = useState(null);
    const { mainSliderList } = useSelector((state) => state.mainSliderData)
    const router = useRouter();
    const dispatch = useDispatch()

    function getFileNameFromUrl(url) {
        return url.split("/").pop();
    }

    useEffect(() => {
        dispatch(GetMainSliderListService())
    }, [])

    const uniqueArray = mainSliderList?.main_sliders?.filter((v, i, a) => a.findIndex(t => (t.title === v?.title)) === i)

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            url: "",
            image: "",
            alt: "",
            status: "Active",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            url: yup.string().required("Url is required"),
            image: yup.string().required("Image is required"),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            try {
                const formData = new FormData();
                formData.append("file", data.image);
                formData.append("folder", "admincolor/homepage/slider");

                const res = await axios.post("/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (res.status === 200) {
                    const uploadedImageUrl = res.data.url || res.data.fileName;
                    console.log("Image uploaded successfully:", uploadedImageUrl);

                    const updatedData = {
                        ...data,
                        image: getFileNameFromUrl(uploadedImageUrl),
                        url: URLText(data.url),
                    };

                    await dispatch(PostPromotionService(updatedData, resetForm));
                    setImagePreview(null)
                }
            } catch (error) {
                console.error("Upload error:", error);
                alert("Image Upload error");
            }
        },
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("image", file); // Set actual file
            setImagePreview(URL.createObjectURL(file)); // For preview
        }
    };

    useEffect(() => {
        return () => {
            if (imagePreview) URL.revokeObjectURL(imagePreview);
        };
    }, [imagePreview]);

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
                    Add Promotion
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/promotionlist`)}
                >
                    Promotion List
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
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SearchField
                            title="Title"
                            data={uniqueArray}
                            value={formik.values.title}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.title || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("title", newValue)}
                            helperText={
                                formik.touched.title ? formik.errors.title : null
                            }
                            error={
                                formik.touched.title ? formik.errors.title : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.url)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Image"}
                            image={imagePreview}
                            onChange={handleImage}
                            error={
                                formik.touched.image
                                    ? formik.errors.image
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Alt"}
                            value={formik.values.alt}
                            onChange={formik.handleChange("alt")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Status"}
                            value={formik.values.status}
                            onChange={formik.handleChange("status")}
                            helperText={
                                formik.touched.status ? formik.errors.status : null
                            }
                            error={
                                formik.touched.status ? formik.errors.status : null
                            }
                            data={["Active", "Inactive"]}
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

export default PromotionAdd;
