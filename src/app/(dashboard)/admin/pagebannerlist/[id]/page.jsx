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
import SelectInput from "@/components/admin/input/SelectInput";
import ImageInput from "@/components/admin/input/ImageInput";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { GetPageBannerIdService, PutPageBannerService } from '@/services/pageBannerService';
import { GetMainSliderListService } from '@/services/mainSliderService';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function PageBannerAdd() {
    const [imagePreview, setImagePreview] = useState('')
    const { mainSliderList } = useSelector((state) => state.mainSliderData)
    const { pageBanner } = useSelector((state) => state.pageBannerData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    const getFileNameFromUrl = (url) => {
        return url.split("/").pop();
    }

    useEffect(() => {
        dispatch(GetMainSliderListService())
        dispatch(GetPageBannerIdService(params.id))
    }, [params.id])

    const uniqueArray = mainSliderList?.main_sliders?.filter((v, i, a) => a.findIndex(t => (t.url === v?.url)) === i)

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            pagename: pageBanner?.pagename || "",
            image: pageBanner?.image || "",
            alt: pageBanner?.alt || "",
            status: pageBanner?.status || "",
        },
        validationSchema: yup.object({
            pagename: yup.string().required("Page Name is required"),
            image: yup.string().required("Image is required"),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data) => {
            if (!imagePreview) {
                await dispatch(PutPageBannerService(pageBanner?._id, data))
            } else {
                try {
                    const formData = new FormData();
                    formData.append("file", data.image); // file object
                    formData.append("folder", "admincolor/homepage/pagebanner");

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
                        };

                        const result = await dispatch(PutPageBannerService(pageBanner?._id, updatedData))
                        if (result) {
                            console.log('Page Banner added successfully');
                            setImagePreview("")
                        }
                    } else {
                        alert("Image upload failed");
                    }
                } catch (error) {
                    console.error("Upload error:", error);
                }
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

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Page Banner
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/pagebannerlist`)}
                >
                    Main Page Banner
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
                        <SearchField
                            title="Page Name"
                            data={uniqueArray}
                            value={formik.values.pagename}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.url || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("pagename", newValue)}
                            helperText={
                                formik.touched.pagename ? formik.errors.pagename : null
                            }
                            error={
                                formik.touched.pagename ? formik.errors.pagename : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Banner Image"}
                            image={`https://assets3.drugcarts.com/admincolor/homepage/pagebanner/${pageBanner?.image}`}
                            fallbackImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/admincolor/homepage/pagebanner/${pageBanner?.image}`}
                            onChange={handleImage}
                            error={
                                formik.touched.image
                                    ? formik.errors.image
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
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

export default PageBannerAdd;
