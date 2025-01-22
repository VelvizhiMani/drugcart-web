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
import VideoInput from "@/components/admin/input/VideoInput";
import { useFormik } from "formik";
import * as yup from "yup";
import TextEditor from "@/components/admin/input/TextEditor";

function GenericListAdd() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      categoryName: "",
      subCategory: "",
      genericName: "",
      categoryImage: "",
      categoryImageAlt: "",
    },
    validationSchema: yup.object({
      categoryName: yup.string().required("Category Name is required"),
      subCategory: yup.string().required("subCategory Name is required"),
      genericName: yup.string().required("Generic Name is required"),
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
    <AdminLayout>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Generic Product
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/category`)}
        >
          Generic Product List
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
              title={"Category Name"}
              value={formik.values.categoryName}
              onChange={formik.handleChange("categoryName")}
              helperText={
                formik.touched.categoryName ? formik.errors.categoryName : null
              }
              error={
                formik.touched.categoryName ? formik.errors.categoryName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Sub Category Name"}
              value={formik.values.subCategory}
              onChange={formik.handleChange("subCategory")}
              helperText={
                formik.touched.subCategory ? formik.errors.subCategory : null
              }
              error={
                formik.touched.subCategory ? formik.errors.subCategory : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Generic Name"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={
                "Brand Name (website Product title) Ex:Veennat 100mg Tablet"
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={"URL (EX:veenat-100mg-tablet) [all small letters only]"}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Other verient Product Name Select"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput
              title={"Product Image (Ex:jpg and jpeg images only upload)"}
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
            <TextInput
              title={
                "Image alt tag: (Brand name, Generic name, price, uses, side Effects, Drugcarts)"
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={
                "Salt Composition(Generic name with Strength) Ex:Veenat (100mg)"
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Form (Ex: Gel or caps)"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Country of Origin"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Storage"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Strength Eg: 100mg"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Pack"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextInput title={"Drugs By Ailments"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <SelectInput
              title={"Manufactuer Address"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <SelectInput
              title={"Marketer Address"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Rex Required (Ex:Rx Required)"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Avaliable Stock"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Product reference(ex: Netmeds)"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Product Status"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Expires on or after:(Ex: June, 2021)"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Payment Type"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Return Policy"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"HSN"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"GST(%)"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"MRP: Ex:123.00"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Percentage DISCOUNT:(Ex:2) only type number"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Other Temperature"} />
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              sx={{ flexGrow: 1 }}
            >
              Author Details
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <SelectInput
              title={"Review By:"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <SelectInput
              title={"Written:"}
              value={formik.values.genericName}
              onChange={formik.handleChange("genericName")}
              helperText={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              error={
                formik.touched.genericName ? formik.errors.genericName : null
              }
              data={catType}
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Medical Description of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Uses of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Uses and Benefits of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Medicine Prescribed for Follow Indication:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Mechanism of action of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"How Medicine works:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Contraindications of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Side effects of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"FAQs for Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Precautions and general warning of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Pregnancy:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Breast Feeding:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Kidney Problem:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Liver Disease:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Heart Disease:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Asthma:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"How to Take Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Use of Medicine in Adult:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Use of Medicine in children:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Use of Medicine in Elderly Patients:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Alcohol:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Driving or operating machinery:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Other general warnings:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Talk to your doctor if:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"General instructions:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Drug Interaction of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Drug-Drug interaction of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Drug-Food interaction of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Drug-Disease interaction of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Interaction with food items:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Dosage of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Over Dose:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Missed Dose:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Storage and disposal:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Fast tag:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"References:"} />
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

export default GenericListAdd;
