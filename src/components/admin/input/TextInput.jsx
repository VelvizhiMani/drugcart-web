import { InputLabel, TextField } from '@mui/material'
import React from 'react'

function TextInput({ title, value, onChange }) {
    return (
        <div>
            <InputLabel
                id="input"
                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                {title}
            </InputLabel>
            <TextField
                id={value}
                value={value}
                onChange={onChange}
                size="small"
                variant="outlined"
                fullWidth
            />
        </div>
    )
}

export default TextInput