import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectInput({ title, data, value, onChange }) {
    return (
        <div>
            <InputLabel
                id="select"
                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                {title}
            </InputLabel>
            <FormControl fullWidth size="small">

                <Select
                    id={value}
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {data.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectInput