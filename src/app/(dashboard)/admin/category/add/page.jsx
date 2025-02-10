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
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import VideoInput from "@/components/admin/input/VideoInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { PostCategoryService } from '../../../../../services/categoryService'

function CategoryAdd() {
  const dispatch = useDispatch()
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);

  const URLText = (text) => {
    const splitText = text.split(" ")
    const joinSpace = splitText.join("-").toLowerCase()
    return joinSpace
  }

  const handleCategoryImage = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("cat_img", URL.createObjectURL(file));
    setImagePreview(URL.createObjectURL(file));
  };


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
      cat_img: yup.string().required("Category Image is required"),
    }),
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      await dispatch(PostCategoryService(data, resetForm))
    },
  });

  useEffect(() => {
    formik.values.url = URLText(formik.values.category_name)
  }, [formik.values.category_name])


  const catType = ["prescriptions", "non-prescriptions", "Others"];
  // console.log(imagePreview);

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
              value={formik.values.cat_type}
              onChange={formik.handleChange("cat_type")}
              helperText={
                formik.touched.cat_type ? formik.errors.cat_type : null
              }
              error={
                formik.touched.cat_type ? formik.errors.cat_type : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Category Name"}
              value={formik.values.category_name}
              onChange={formik.handleChange("category_name")}
              helperText={
                formik.touched.category_name ? formik.errors.category_name : null
              }
              error={
                formik.touched.category_name ? formik.errors.category_name : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"URL"}
              value={URLText(formik.values.category_name)}
              onChange={formik.handleChange("url")}
              helperText={formik.touched.url ? formik.errors.url : null}
              error={formik.touched.url ? formik.errors.url : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput
              title={"Category Image"}
              image={formik.values.cat_img}
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

export default CategoryAdd;
