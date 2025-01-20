"use client";
import AdminLayout from "@/components/layouts/AdminLayout";
import AddIcon from "@mui/icons-material/Add";
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
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import VideoInput from "@/components/admin/input/VideoInput";

import dynamic from "next/dynamic";
import Quill from "quill";
import QuillImageResize from "quill-image-resize-module-react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

Quill.register("modules/resize", QuillImageResize);

function GenericeAdd() {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [value, setValue] = useState("");

  const handleTypeChange = (event) => {
    setCategoryName(event.target.value);
  };
  const handleSubTypeChange = (event) => {
    setSubCategoryName(event.target.value);
  };

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
    resize: {
      modules: ["Resize"],
    },
  };

  console.log(value);
  return (
    <AdminLayout>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Generic Name
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/genericelist`)}
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
            <SelectInput
              title={"Category Name"}
              value={categoryName}
              onChange={handleTypeChange}
              data={catType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={" Sub Category Name"}
              value={subCategoryName}
              onChange={handleSubTypeChange}
              data={subcatType}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Generic Name"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"URL"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput title={"Image"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput title={"Image Alt Tag"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <VideoInput title={"Video Upload"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Video Alt Tag"} />
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
          <Grid2 size={{ xs: 12, md: 8 }}>
            {/* <EditorToolbar /> */}
            <InputLabel
              id="input"
              sx={{
                mt: 1,
                mb: 0.5,
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "#000",
                fontSize: 14,
              }}
            >
              Medical Description of Medicine :
            </InputLabel>
            <ReactQuill
              modules={modules}
              //   formats={formats}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </Grid2>
        </Grid2>
      </Paper>
      <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
        <Button style={{ textTransform: "capitalize" }} variant="contained">
          Submit
        </Button>
      </Stack>
    </AdminLayout>
  );
}

export default GenericeAdd;
