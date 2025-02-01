"use client";
import AddIcon from "@mui/icons-material/Add";
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
import React, { useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import VideoInput from "@/components/admin/input/VideoInput";
import { useFormik } from "formik";
import * as yup from "yup";

function CategoryAdd() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      categoryType: "",
      categoryName: "",
      url: "",
      categoryImage: "",
      categoryImageAlt: "",
    },
    validationSchema: yup.object({
      categoryType: yup.string().required("Category type is required"),
      categoryName: yup.string().required("Category Name is required"),
      url: yup.string().required("URL is required"),
      categoryImage: yup.string().required("Category Image is required"),
    }),
    onSubmit: async (data) => {
      await console.log(data);
    },
  });

  const handleCategoryImage = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("categoryImage", file);
    setImagePreview(URL.createObjectURL(file));
  };

  const catType = ["prescriptions", "non-prescriptions", "Others"];

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
              title={"Category Type"}
              value={formik.values.categoryType}
              onChange={formik.handleChange("categoryType")}
              helperText={
                formik.touched.categoryType ? formik.errors.categoryType : null
              }
              error={
                formik.touched.categoryType ? formik.errors.categoryType : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Category Name"}
              value={formik.values.categoryName}
              onChange={formik.handleChange("categoryName")}
              helperText={
                formik.touched.categoryName ? formik.errors.categoryName : null
              }
              error={
                formik.touched.categoryName ? formik.errors.categoryName : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"URL"}
              value={formik.values.url}
              onChange={formik.handleChange("url")}
              helperText={formik.touched.url ? formik.errors.url : null}
              error={formik.touched.url ? formik.errors.url : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput
              title={"Category Image"}
              image={imagePreview}
              onChange={handleCategoryImage}
              error={
                formik.touched.categoryImage
                  ? formik.errors.categoryImage
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Image Alt Tag"} />
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
            <TextInput title={"Meta Title"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Meta Keyword"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <InputArea title={"Meta Description"} />
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
