"use client";
import React, { useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  FormHelperText,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchInput from "@/components/admin/input/SearchInput";
import DDInput from "@/components/admin/input/DDInput";
import AdminLayout from "@/components/layouts/AdminLayout";

function createData(
  category,
  subCategory,
  generic,
  composition,
  product,
  wordCount,
  manufactuer,
  image,
  stock,
  mrp,
  ptg,
  price
) {
  return {
    category,
    subCategory,
    generic,
    composition,
    product,
    wordCount,
    manufactuer,
    image,
    stock,
    mrp,
    ptg,
    price,
  };
}

const rows = [
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "https://www.beechnut.com/wp-content/uploads/2017/03/BN-Base_bananastrawberries.png",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "https://www.beechnut.com/wp-content/uploads/2017/03/BN-Base_bananastrawberries.png",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "https://www.beechnut.com/wp-content/uploads/2017/03/BN-Base_bananastrawberries.png",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "https://www.beechnut.com/wp-content/uploads/2017/03/BN-Base_bananastrawberries.png",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "https://www.beechnut.com/wp-content/uploads/2017/03/BN-Base_bananastrawberries.png",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
  createData(
    "hiv",
    "hiv",
    "abacavir",
    "Abacavir (300mg)",
    "Abhope 300mg Tablet",
    1795,
    "macleodspharmaceuticals-pvt-ltd",
    "",
    "In Stock",
    "1432.22",
    "8.5",
    "1332.44"
  ),
];
const rowText = {
  color: "#fff",
  fontFamily: "Poppins",
};
function GeneticProduct() {
  const params = useParams();
  console.log(params);

  const pathname = usePathname();
  const [showNo, setShowNo] = useState("");

  const handleNoChange = (event) => {
    setShowNo(event.target.value);
  };

  const router = useRouter();
  const handleClick = () => {
    alert("row count alert");
  };

  const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <AdminLayout>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h5"
            fontFamily={"Poppins"}
            fontWeight="bold"
            sx={{ flexGrow: 1 }}
          >
            Generic Product List
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
            startIcon={<AddIcon />}
            onClick={() => router.push(`/admin/genericlistadd`)}
          >
            Add Product
          </Button>
        </Box>
        <Grid2 container alignItems={"center"} spacing={2}>
          <Grid2
            container
            alignItems={"center"}
            marginTop={2}
            size={{ xs: 12, sm: 5, md: 1, lg: 3, xl: 3 }}
            marginRight={"auto"}
          >
            <Typography fontFamily={"Poppins"} fontWeight={500}>
              Show Pages
            </Typography>
            <DDInput
              value={showNo}
              data={userEntries}
              onChange={handleNoChange}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}
            marginLeft={"auto"}
          >
            <SearchInput
              filterOption={true}
              rowCount={8}
              filterSubmit={handleClick}
            />
          </Grid2>
        </Grid2>

        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table size="small" aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#24282c" }}>
              <TableRow>
                <TableCell style={rowText}>Sno</TableCell>
                <TableCell style={rowText}>Category</TableCell>
                <TableCell style={rowText}>Sub Category</TableCell>
                <TableCell style={rowText}>Generic</TableCell>
                <TableCell style={rowText}>Selt Composition</TableCell>
                <TableCell style={rowText}>Product</TableCell>
                <TableCell style={rowText}>Word Count</TableCell>
                <TableCell style={rowText}>Manufactuer</TableCell>
                <TableCell style={rowText}>Image</TableCell>
                <TableCell style={rowText}>Stock</TableCell>
                <TableCell style={rowText}>MRP</TableCell>
                <TableCell style={rowText}>%</TableCell>
                <TableCell style={rowText}>Price</TableCell>
                <TableCell align="right" style={rowText}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                    {i + 1}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    component="th"
                    scope="row"
                  >
                    {row.category}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.subCategory}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.generic}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.composition}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.product}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.wordCount}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.manufactuer}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.image ? (
                      <Avatar
                        alt="Remy Sharp"
                        src={row.image}
                        style={{width: 45, height: 45}}
                        variant="rounded"
                      />
                    ) : (
                      <FormHelperText error>No Image</FormHelperText>
                    )}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.stock}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.mrp}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.ptg}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    scope="row"
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    align="right"
                  >
                    <button>
                      <CreateIcon color="primary" />
                    </button>
                    <button>
                      <DeleteIcon color="error" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontFamily={"Poppins"} fontWeight={500}>
            Showing 1-10 of 182 entries
          </Typography>
          <br />
          <Pagination size="large" count={10} color="secondary" />
        </Box>
      </Box>
    </AdminLayout>
  );
}

export default GeneticProduct;
