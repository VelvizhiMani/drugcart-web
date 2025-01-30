import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Avatar, InputLabel } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function VideoInput({ title }) {
    return (
        <div>
            <InputLabel
                id="input"
                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                {title}
            </InputLabel>
            {/* <Avatar
                src='https://drasite.com/content/img/icons/places/folder-red-pictures.svg'
                sx={{ width: "100%", height: 300, mt: 1, mb: 2 }}
                variant="square" /> */}
            <Button
                component="label"
                role={undefined}
                variant="contained"
                color="secondary"
                tabIndex={-1}
                style={{ textTransform: "capitalize" }}
                startIcon={<CloudUploadIcon />}
            >
                Upload Video
                <VisuallyHiddenInput
                    type="file"
                    accept="video/*"
                    onChange={(event) => console.log(event.target.files)}
                />
            </Button>
        </div>
    );
}

export default VideoInput