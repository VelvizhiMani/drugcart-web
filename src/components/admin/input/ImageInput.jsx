import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhotoIcon from "@mui/icons-material/Photo";
import { Avatar, FormHelperText, InputLabel } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function ImageInput({ title, image, onChange, error }) {
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
      {image ? (
        <Avatar
          src={image}
          sx={{ width: "100%", height: 300, mt: 1, mb: 2 }}
          variant="square"
        />
      ) : null}

      <Button
        component="label"
        role={undefined}
        variant="contained"
        color="secondary"
        tabIndex={-1}
        style={{ textTransform: "capitalize" }}
        startIcon={<PhotoIcon />}
      >
        Upload Image
        <VisuallyHiddenInput
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={onChange}
        />
      </Button>
      <FormHelperText error>{error}</FormHelperText>
    </div>
  );
}

export default ImageInput;
