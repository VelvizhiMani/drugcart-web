import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    Typography,
    Box,
    Paper,
    InputLabel,
} from "@mui/material";

const users = [
    "admin infoway",
    "mukesh",
    "dilima",
    "Meher",
    "Abirami",
    "kamali",
    "Raghavi",
];

const ProductCalendar = () => {
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2025);

    const daysInMonth = new Date(year, month, 0).getDate();

    const rowText = {
        color: '#fff',
        fontFamily: "Poppins",
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontFamily={"Poppins"} fontWeight="bold" align="center" gutterBottom>
                User Month Report | {year} - {month.toString().padStart(2, "0")}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                }}
            >
                <InputLabel
                    id="input"
                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 18 }}>
                    Month:
                </InputLabel>
                <Select
                    size="small"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    sx={{ width: 100 }}
                >
                    {[...Array(12).keys()].map((m) => (
                        <MenuItem key={m + 1} value={m + 1}>
                            {m + 1}
                        </MenuItem>
                    ))}
                </Select>

                <InputLabel
                    id="input"
                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 18 }}>
                    Year:
                </InputLabel>
                <Select
                    size="small"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    sx={{ width: 120 }}
                >
                    {[2025, 2026, 2027].map((y) => (
                        <MenuItem key={y} value={y}>
                            {y}
                        </MenuItem>
                    ))}
                </Select>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#24282c' }}>
                        <TableRow>
                            <TableCell style={rowText}>Date</TableCell>
                            {[...Array(daysInMonth).keys()].map((d) => (
                                <TableCell key={d + 1} align="center" style={rowText}>
                                    {d + 1}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ backgroundColor: '#24282c', color: "#fff" }}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user}>
                                <TableCell sx={{ backgroundColor: '#24282c', color: "#fff" }}>{user}</TableCell>
                                {[...Array(daysInMonth).keys()].map((d) => (
                                    <TableCell key={d + 1} align="center">
                                        0
                                    </TableCell>
                                ))}
                                <TableCell align="center">0</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ProductCalendar;
