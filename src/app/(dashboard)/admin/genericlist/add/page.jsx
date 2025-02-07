"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid2,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import VideoInput from "@/components/admin/input/VideoInput";
import dynamic from "next/dynamic";
// import Quill from "quill";
// import QuillImageResize from "quill-image-resize-module-react";
import "react-quill-new/dist/quill.snow.css";
import TextEditor from "@/components/admin/input/TextEditor";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useSelector, useDispatch } from "react-redux";
import { GetCategoryService } from "@/services/categoryService";
import { GetSubCategoryService } from "@/services/subCategoryService";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Quill.register("modules/resize", QuillImageResize);

function GenericeAdd() {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categoryData)
  const { subCategories } = useSelector((state) => state.subCategoryData)
  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const formik = useFormik({
    initialValues: {
      catnames: "",
      subname: "",
      url: "",
      generices: "",
      // gen_img: "",
      imagealt: "",
      mechanism: "",
      // description: "",
      // usesofmeds: "",
      // useofbenefits: "",
      // indicat: "",
      // mechanism: "",
      // medicinework: "",
      // contraindications: "",
      // sideeffects: "",
      // faqs: "",
      // pregnancy: "",
      // breastfeeding: "",
      // kidneyproblem: "",
      // liverdisease: "",
      // asthma: "",
      // takemedicine: "",
      // adult: "",
      // childrenmed: "",
      // elderlymed: "",
      // alcohol: "",
      // heartdisease: "",
      // driving: "",
      // warnings: "",
      // talkdoctor: "",
      // instructions: "",
      // druginteraction: "",
      // drugfood: "",
      // drugdiease: "",
      // fooditems: "",
      // overdose: "",
      // misseddose: "",
      // disposal: "",
      // fasttag: "",
      // refer: "",
      // metatitle: "",
      // metakeyword: "",
      // metadesc: "",
    },
    validationSchema: yup.object({
      catnames: yup.string().required("Category type is required"),
    }),
    onSubmit: async (data) => {
      await console.log(data);
      // await dispatch(PostSubCategoryService(data, resetForm))
    },
  });
  useEffect(() => {
    dispatch(GetCategoryService())
    dispatch(GetSubCategoryService())
  }, [formik.values.catnames])

  const filterSubCategory = subCategories?.subcategoryItems?.filter((item) => item?.cat_name === formik.values.catnames)

  // useEffect(() => {
  //   if (typeof window !== "undefined" && typeof document !== "undefined") {
  //     // This ensures the code runs only on the client side
  //     window.addEventListener("load", () => {
  //       // Quill.register("modules/resize", QuillImageResize);
  //     });
  //   }
  // }, []);
  const catType = ["prescriptions", "non-prescriptions", "Others"];
  const subcatType = ["test", "test1"];
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
    // resize: {
    //   modules: ["Resize"],
    // },
  };

  console.log(formik.values.mechanism);
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Generic Name
        </Typography>
        {/* <div
          dangerouslySetInnerHTML={{ __html: formik.values.mechanism }}
        /> */}
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/genericlist`)}
        >
          Generic List
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
              value={formik.values.catnames}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.category_name || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("catnames", newValue);
                formik.setFieldValue("subname", "");
              }}
              helperText={
                formik.touched.catnames ? formik.errors.catnames : null
              }
              error={
                formik.touched.catnames ? formik.errors.catnames : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Sub Category Name"
              data={filterSubCategory}
              value={formik.values.subname}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.subcat_name || "")}
              onInputChange={(event, newValue) => formik.setFieldValue("subname", newValue)}
            // helperText={
            //   formik.touched.subname ? formik.errors.subname : null
            // }
            // error={
            //   formik.touched.subname ? formik.errors.subname : null
            // }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Generic Name"}
              value={formik.values.generices}
              onChange={formik.handleChange("generices")}
            // helperText={formik.touched.generices ? formik.errors.generices : null}
            // error={formik.touched.generices ? formik.errors.generices : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"URL"}
              value={formik.values.url}
              onChange={formik.handleChange("url")}
            // helperText={formik.touched.url ? formik.errors.url : null}
            // error={formik.touched.url ? formik.errors.url : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput title={"Image"} />
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            {/* <EditorToolbar /> */}
            <TextEditor title={"Medical Description of Medicine:"}
              value={formik.values.mechanism}
              onChange={formik.handleChange("mechanism")}
            // value={value} 

            />
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
            <TextEditor title={"References:"} value={value} onChange={setValue} />
          </Grid2>
        </Grid2>
      </Paper>
      <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
        <Button style={{ textTransform: "capitalize" }} variant="contained" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default GenericeAdd;