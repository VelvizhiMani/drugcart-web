"use client"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import AdminLayout from '@/components/layouts/AdminLayout'
import { Box, Button, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchInput from '@/components/admin/input/SearchInput';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('pizza burger', 356, 16.0, 49, 3.9),
    createData('sultiute', 356, 16.0, 49, 3.9),
];
const rowText = {
    color: '#fff',
    fontFamily: "Poppins",
}
function Category() {
    const pathname = usePathname()
    const router = useRouter()
    const handleClick = () => {
        alert("row count alert");
    };

    return (
        <AdminLayout>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Category</Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{textTransform: "capitalize"}}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/categoryAdd`)}
                >
                    Add Category
                </Button>
            </Box>
            <SearchInput filterOption={true} rowCount={8} filterSubmit={handleClick} />

            <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                <Table size="small" aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#24282c' }}>
                        <TableRow>
                            <TableCell style={rowText}>Sno</TableCell>
                            <TableCell style={rowText}>Category</TableCell>
                            <TableCell align="right" style={rowText}>Status</TableCell>
                            <TableCell align="right" style={rowText}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{i + 1}</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }} align="right">Active</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }} align="right">
                                    <button>
                                        <CreateIcon color="primary" />
                                    </button>
                                    <button>
                                        <DeleteIcon color='error' />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Pagination size="large" count={10} color="secondary" />
            </Stack>
        </AdminLayout>
    )
}

export default Category