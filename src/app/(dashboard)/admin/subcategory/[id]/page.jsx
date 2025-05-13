"use client";
import AddIcon from "@mui/icons-material/Add";
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
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { GetSubCategoryIdService, PostSubCategoryService, PutSubCategoryService } from '../../../../../services/subCategoryService'
import { GetCategoryService } from "@/services/categoryService";
import axios from "axios";

function EditSubCategory() {
    const [imagePreview, setImagePreview] = useState('')
    const { categories } = useSelector((state) => state.categoryData)
    const { subCategory } = useSelector((state) => state.subCategoryData)
    const dispatch = useDispatch()
    const router = useRouter();
    const params = useParams()

    function getFileNameFromUrl(url) {
        return url?.split("/").pop();
    }

    useEffect(() => {
        dispatch(GetCategoryService())
        dispatch(GetSubCategoryIdService(params?.id))
    }, [params?.id])

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const handleCategoryImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("cat_img", file); // Set actual file
            setImagePreview(URL.createObjectURL(file)); // For preview
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            cat_name: subCategory?.cat_name || "",
            subcat_name: subCategory?.subcat_name || "",
            url: subCategory?.url || "",
            cat_img: subCategory?.cat_img || "",
            imagealt: subCategory?.imagealt || "",
            metatitle: subCategory?.metatitle || "",
            metadesc: subCategory?.metadesc || "",
            metakeyboard: subCategory?.metakeyboard || "",
        },
        validationSchema: yup.object({
            cat_name: yup.string().required("Category type is required"),
            subcat_name: yup.string().required("Sub Category Name is required"),
            url: yup.string().required("URL is required"),
            cat_img: yup.string().required("Sub Category Image is required"),
        }),
        onSubmit: async (data) => {
            if (!imagePreview) {
                await dispatch(PutSubCategoryService(subCategory?._id, data))
            } else {
                try {
                    // 1. Upload the image first
                    const formData = new FormData();
                    formData.append("file", data.cat_img); // file object
                    formData.append("folder", "category/thumb");
                    formData.append("path", "sub");

                    const res = await axios.post("/api/upload", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });

                    if (res.status === 200) {
                        const uploadedImageUrl = res.data.url || res.data.fileName;

                        const updatedData = {
                            ...data,
                            cat_img: getFileNameFromUrl(uploadedImageUrl),
                            url: URLText(data.subcat_name),
                        };

                        const result = await dispatch(PutSubCategoryService(subCategory?._id, updatedData))
                        if (result) {
                            console.log('Category added successfully');
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

    console.log(params);

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Sub Category
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/subcategory`)}
                >
                    Sub Category List
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
                            title="Category Name"
                            data={categories?.categories}
                            value={formik.values.cat_name}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.category_name || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("cat_name", newValue)}
                            helperText={
                                formik.touched.cat_name ? formik.errors.cat_name : null
                            }
                            error={
                                formik.touched.cat_name ? formik.errors.cat_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Sub Category Name"}
                            value={formik.values.subcat_name}
                            onChange={formik.handleChange("subcat_name")}
                            helperText={
                                formik.touched.subcat_name ? formik.errors.subcat_name : null
                            }
                            error={
                                formik.touched.subcat_name ? formik.errors.subcat_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.subcat_name)}
                            onChange={formik.handleChange("url")}
                            helperText={formik.touched.url ? formik.errors.url : null}
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Category Image"}
                            image={`https://assets1.drugcarts.com/category/thumb/${subCategory?.cat_img}`}
                            fallbackImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/category/thumb/${subCategory?.cat_img}`}
                            onChange={handleCategoryImage}
                            error={
                                formik.touched.cat_img
                                    ? formik.errors.cat_img
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Image Alt Tag"}
                            value={formik.values.imagealt}
                            onChange={formik.handleChange("imagealt")}
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

export default EditSubCategory;
