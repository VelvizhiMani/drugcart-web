"use client";
import AdminLayout from "@/components/layouts/AdminLayout";
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
import { useFormik } from "formik";
import * as yup from "yup";

function FormAdd() {
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      formName: "",
      formURL: "",
      image: "",
      imageAlt: "",
    },
    validationSchema: yup.object({
      formName: yup.string().required("Form Name Name is required"),
      formURL: yup.string().required("Form URL is required"),
      image: yup.string().required("Image is required"),
    }),
    imageAlt: yup.string().required("Image Alt is required"),
    onSubmit: async (data) => {
      await console.log(data);
    },
  });

  const handleCategoryImage = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("image", file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <AdminLayout>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Form
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/formlist`)}
        >
          Form List
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
              title={"Form Name (Ex: Gel or caps)"}
              value={formik.values.formName}
              onChange={formik.handleChange("formName")}
              helperText={
                formik.touched.formName ? formik.errors.formName : null
              }
              error={formik.touched.formName ? formik.errors.formName : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={"URL Name (Ex: gel or caps)"}
              value={formik.values.formURL}
              onChange={formik.handleChange("formURL")}
              helperText={formik.touched.formURL ? formik.errors.formURL : null}
              error={formik.touched.formURL ? formik.errors.formURL : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ImageInput
              title={"Image"}
              image={imagePreview}
              onChange={handleCategoryImage}
              error={formik.touched.image ? formik.errors.image : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={"Image Alt"}
              value={formik.values.imageAlt}
              onChange={formik.handleChange("imageAlt")}
              helperText={
                formik.touched.imageAlt ? formik.errors.imageAlt : null
              }
              error={formik.touched.imageAlt ? formik.errors.imageAlt : null}
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
    </AdminLayout>
  );
}

export default FormAdd;
