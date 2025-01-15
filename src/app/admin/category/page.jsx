"use client"
import React from 'react'
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


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const rowText = {
    color: '#fff',
    fontFamily: "Poppins",
}
function Category() {

    return (
        <AdminLayout>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Category</Typography>
                <Button color="secondary" variant="contained" startIcon={<AddIcon />}>
                    Add Category
                </Button>
            </Box>
            <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#24282c'}}>
                        <TableRow>
                            <TableCell style={rowText}>Sno</TableCell>
                            <TableCell style={rowText}>Catogory</TableCell>
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
                                <TableCell>{i + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">Active</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="edit">
                                        <CreateIcon color="primary" />
                                    </IconButton>

                                    <IconButton aria-label="delete">
                                        <DeleteIcon color='error' />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </AdminLayout>
    )
}

export default Category