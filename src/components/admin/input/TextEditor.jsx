import { FormHelperText, InputLabel, TextField } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
// import Quill from "quill";
// import QuillImageResize from "quill-image-resize-module-react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Quill.register("modules/resize", QuillImageResize);

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

function TextEditor({ title, value, type, onChange, helperText, error }) {
  // console.log(value);
  
  return (
    <div>
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
        {title}
      </InputLabel>
      <ReactQuill
        modules={modules}
        //   formats={formats}
        theme="snow"
        value={value}
        onChange={onChange}
      />
      <FormHelperText error>{error}</FormHelperText>
    </div>
  );
}

export default TextEditor;
