"use client";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { PostCategoryService } from "../../../../../services/categoryService";
import axios from "axios";

function extractS3Path(url) {
  try {
    const baseURL = "https://drugcarts-assets.s3.ap-south-1.amazonaws.com/";
    if (url.startsWith(baseURL)) {
      return url.substring(baseURL.length);
    }
    return url; // if already short or invalid
  } catch (error) {
    console.error("Invalid URL", error);
    return "";
  }
}

function CategoryAdd() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);

  const catType = ["prescriptions", "non-prescriptions", "Others"];

  const URLText = (text) => {
    const splitText = text.split(" ");
    const joinSpace = splitText.join("-").toLowerCase();
    return joinSpace;
  };

  const handleCategoryImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("cat_img", file); // Set actual file
      setImagePreview(URL.createObjectURL(file)); // For preview
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const formik = useFormik({
    initialValues: {
      category_name: "",
      cat_type: "",
      url: "",
      cat_img: "",
      imagealt: "",
      metatitle: "",
      metadesc: "",
      metakeyboard: "",
    },
    validationSchema: yup.object({
      cat_type: yup.string().required("Category type is required"),
      category_name: yup.string().required("Category Name is required"),
      url: yup.string().required("URL is required"),
      cat_img: yup.mixed().required("Category Image is required"),
    }),
    onSubmit: async (data, { resetForm }) => {
      try {
        // 1. Upload the image first
        const formData = new FormData();
        formData.append("file", data.cat_img); // file object
        formData.append("folder", "maycategory");

        const res = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res.status === 200) {
          const uploadedImageUrl = res.data.url || res.data.fileName;
          console.log("Image uploaded successfully:", uploadedImageUrl);

          // 2. After upload, now dispatch PostCategoryService
          const updatedData = {
            ...data,
            cat_img: extractS3Path(uploadedImageUrl), // update with uploaded URL
            url: URLText(data.category_name), // in case user didn't edit url manually
          };

          const result = await dispatch(PostCategoryService(updatedData, resetForm));
          if (result) {
            console.log('Category added successfully');
            // router.push("/admin/category");
          }
        } else {
          alert("Image upload failed");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Image Upload error");
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue("url", URLText(formik.values.category_name));
  }, [formik.values.category_name]);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Category
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/category`)}
        >
          Category List
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
            <SelectInput
              title="Category Type"
              value={formik.values.cat_type}
              onChange={formik.handleChange("cat_type")}
              helperText={formik.touched.cat_type ? formik.errors.cat_type : null}
              error={formik.touched.cat_type ? Boolean(formik.errors.cat_type) : false}
              data={catType}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title="Category Name"
              value={formik.values.category_name}
              onChange={formik.handleChange("category_name")}
              helperText={formik.touched.category_name ? formik.errors.category_name : null}
              error={formik.touched.category_name ? Boolean(formik.errors.category_name) : false}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title="URL"
              value={formik.values.url}
              onChange={formik.handleChange("url")}
              helperText={formik.touched.url ? formik.errors.url : null}
              error={formik.touched.url ? Boolean(formik.errors.url) : false}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput
              title="Category Image"
              image={imagePreview}
              onChange={handleCategoryImage}
              error={formik.touched.cat_img ? Boolean(formik.errors.cat_img) : false}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title="Image Alt Tag"
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
              title="Meta Title"
              value={formik.values.metatitle}
              onChange={formik.handleChange("metatitle")}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title="Meta Keyword"
              value={formik.values.metakeyboard}
              onChange={formik.handleChange("metakeyboard")}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <InputArea
              title="Meta Description"
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

export default CategoryAdd;
