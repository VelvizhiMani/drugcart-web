import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SortSharpIcon from '@mui/icons-material/SortSharp';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material';

function SearchInput({ filterOption, rowCount, filterSubmit }) {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper
            component="form"
            elevation={3}
            sx={{ p: '0px 0px', 
                display: 'flex', 
                alignItems: 'center', 
                // width: 300, 
                borderColor: "gray", 
                borderWidth: 1,
                marginTop: 2
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, fontFamily: "Poppins" }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            {filterOption ?
                <>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <SortSharpIcon color="secondary" />
                    </IconButton>
                </>
                :
                null}

            <Menu

                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {Array.from(Array(rowCount)).map((_, i) => (
                    <MenuItem
                        key={i}
                        sx={{ paddingLeft: 3, paddingRight: 3, fontWeight: 600 }}
                        onClick={() => filterSubmit()}>
                        {i + 1}
                    </MenuItem>
                ))}
            </Menu>
        </Paper>
    );
}

export default SearchInput