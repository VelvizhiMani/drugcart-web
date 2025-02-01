"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TextInput from "@/components/admin/input/TextInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";

function ManufactuerAdd() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      manufactuerName: "",
      manufactuerURL: "",
      manufactuerAddress: "",
    },
    validationSchema: yup.object({
      manufactuerName: yup.string().required("Manufactuer Name is required"),
      manufactuerURL: yup.string().required("Manufactuer URL is required"),
      manufactuerAddress: yup
        .string()
        .required("Manufactuer Address is required"),
    }),
    onSubmit: async (data) => {
      await console.log(data);
    },
  });

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Manufactuer
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/manufactuerlist`)}
        >
          Manufactuer List
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
            <TextInput
              title={"Manufactuer Name"}
              value={formik.values.manufactuerName}
              onChange={formik.handleChange("manufactuerName")}
              helperText={
                formik.touched.manufactuerName
                  ? formik.errors.manufactuerName
                  : null
              }
              error={
                formik.touched.manufactuerName
                  ? formik.errors.manufactuerName
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Manufactuer URL (Ex: natco-pharma)"}
              value={formik.values.manufactuerURL}
              onChange={formik.handleChange("manufactuerURL")}
              helperText={
                formik.touched.manufactuerURL
                  ? formik.errors.manufactuerURL
                  : null
              }
              error={
                formik.touched.manufactuerURL
                  ? formik.errors.manufactuerURL
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Manufactuer Address/Marketer Address"}
              value={formik.values.manufactuerAddress}
              onChange={formik.handleChange("manufactuerAddress")}
              helperText={
                formik.touched.manufactuerAddress
                  ? formik.errors.manufactuerAddress
                  : null
              }
              error={
                formik.touched.manufactuerAddress
                  ? formik.errors.manufactuerAddress
                  : null
              }
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
    </Box>
  );
}

export default ManufactuerAdd;
