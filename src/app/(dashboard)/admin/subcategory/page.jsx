"use client"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Box, Button, Grid2, Typography } from '@mui/material'
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
import SearchInput from '@/components/admin/input/SearchInput';
import DDInput from '@/components/admin/input/DDInput';


function createData(categoryName, subCategory) {
    return { categoryName, subCategory };
}

const rows = [
    createData('alzheimers-disese', "Lewy Body Dementia"),
    createData('alzheimers-disese', "Vascular Dementia"),
    createData('alzheimers-disese', "Fronto Temporal Dementia"),
    createData('anaemia', "Anaemia"),
    createData('anaesthesia-local', "local anesthetic"),
    createData('analgesic', "Headache", "salary"),
    createData('analgesic', "Pain relief"),
];
const rowText = {
    color: '#fff',
    fontFamily: "Poppins",
}
function SubCategory() {
    const router = useRouter()
    const pathname = usePathname()
    const [showNo, setShowNo] = useState("")

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const handleClick = () => {
        alert("row count alert");
    };

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Sub Catogory List</Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/subcategory/add`)}
                >
                    Add Sub Category
                </Button>
            </Box>
            <Grid2 container alignItems={"center"} spacing={2}>
                <Grid2 container alignItems={"center"} marginTop={2} size={{ xs: 12, sm: 5, md: 1, lg: 3, xl: 3 }} marginRight={"auto"}>
                    <Typography fontFamily={"Poppins"} fontWeight={500}>Show Pages</Typography>
                    <DDInput
                        value={showNo}
                        data={userEntries}
                        onChange={handleNoChange}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }} marginLeft={"auto"}>
                    <SearchInput filterOption={true} rowCount={8} filterSubmit={handleClick} />
                </Grid2>
            </Grid2>

            <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                <Table size="small" aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#24282c' }}>
                        <TableRow>
                            <TableCell style={rowText}>Sno</TableCell>
                            <TableCell style={rowText}>Category Name</TableCell>
                            <TableCell style={rowText}>Sub Category</TableCell>
                            <TableCell align="right" style={rowText}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{i + 1}</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                    {row.categoryName}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row.subCategory}</TableCell>
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
            <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
                <Typography fontFamily={"Poppins"} fontWeight={500}>Showing 1-10 of 182 entries</Typography>
                <br />
                <Pagination size="large" count={10} color="secondary" />
            </Box>
        </Box>
    )
}

export default SubCategory