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
// import Quill from "quill";
// import QuillImageResize from "quill-image-resize-module-react";
import "react-quill-new/dist/quill.snow.css";
import TextEditor from "@/components/admin/input/TextEditor";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Quill.register("modules/resize", QuillImageResize);

function GenericeAdd() {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // This ensures the code runs only on the client side
      window.addEventListener("load", () => {
        // Quill.register("modules/resize", QuillImageResize);
      });
    }
  }, []);

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
    // resize: {
    //   modules: ["Resize"],
    // },
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
              title={"Sub Category Name"}
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            {/* <EditorToolbar /> */}
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
            <TextEditor title={"References:"} value={value} onChange={setValue}/>
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
