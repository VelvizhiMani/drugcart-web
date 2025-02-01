"use client"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Box, Button, Grid2, IconButton, Typography } from '@mui/material'
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
import SelectInput from '../input/SelectInput';
import DDInput from '../input/DDInput';


function createData(name, email, password, userType) {
    return { name, email, password, userType };
}

const rows = [
    createData('admin infoway', "admin@gmail.com", "HRW12345", "salary"),
    createData('mukesh', "mukesh@gmail.com", "HRW12345", "contract"),
    createData('dilima', "dilima@gmail.com", "HRW12345", "contract"),
    createData('Meher', "meher@gmail.com", "HRW12345", "salary"),
    createData('Abirami', "abirami@gmail.com", "HRW12345", "contract"),
    createData('kamali', "kamali@gmail.com", "salary", "salary"),
    createData('Raghavi', "raghavi@gmail.com", "HRW12345", "contract"),
];
const rowText = {
    color: '#fff',
    fontFamily: "Poppins",
}
function UserTable() {
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
        <Box sx={{ my: 5 }}>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>User List</Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/userAdd`)}
                >
                    Add User
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
                            <TableCell style={rowText}>Name</TableCell>
                            <TableCell  style={rowText}>Email</TableCell>
                            <TableCell  style={rowText}>Password</TableCell>
                            <TableCell  style={rowText}>UserType</TableCell>
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
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row.email}</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row.password}</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row.userType}</TableCell>
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
                <br/>
                <Pagination size="large" count={10} color="secondary" />
            </Box>
        </Box>
    )
}

export default UserTable