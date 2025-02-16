"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Avatar, Box, Button, FormHelperText, Grid2, IconButton, Typography } from "@mui/material";
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
import SearchInput from "@/components/admin/input/SearchInput";
import DDInput from "@/components/admin/input/DDInput";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProductService, GetProductIdService, GetProductService } from '@/services/productService';
import DeleteModal from '@/components/admin/modal/DeleteModal';

function createData(name, url, status) {
  return { name, url, status };
}

const rows = [
  createData("Tablet", "tablet", "Active"),
  createData("Soft Gelatin Capsule", "soft-gelatin-capsule", "Active"),
  createData("Chewable tablet", "chewable-tablet", "Active"),
  createData("Film-coated tablet", "film-coated-tablet", "Active"),
  createData("Pellets", "pellets", "Active"),
  createData("Lozenges", "lozenges", "Active"),
  createData("Ointments", "ointments", "Active"),
];
const rowText = {
  color: "#fff",
  fontFamily: "Poppins",
};
function GenericProducts() {
  const { productList, product } = useSelector((state) => state.productData)
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const [showNo, setShowNo] = useState(10)
  const [openModal, setOpenModal] = useState(false)
  const params = useParams()
  const dispatch = useDispatch()

  const handleNoChange = (event) => {
    setShowNo(event.target.value);
  };

  const router = useRouter();

  const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    dispatch(GetProductService(page, showNo, search, params?.generics))
  }, [page, showNo, search, params?.generics])

  const searchSubmit = () => {
    dispatch(GetProductService(page, showNo, search, params?.generics))
  }

  console.log("params", params);
  console.log("productList", productList);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h5"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Generic ProductList
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
          startIcon={<AddIcon />}
          onClick={() => router.push(`/admin/genericproducts/add`)}
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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            filterSubmit={searchSubmit}
          />
        </Grid2>
      </Grid2>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table size="small" aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#7d5e69" }}>
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
            {productList && productList?.products?.map((row, i) => (
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
                  {row?.cat_name}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.subcat_name}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.generices}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.brand}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.product_name}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  12212
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.manufactuer}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.product_img ? (
                    <Avatar
                      alt="Remy Sharp"
                      src={row?.product_img}
                      style={{ width: 45, height: 45 }}
                      variant="rounded"
                    />
                  ) : (
                    <FormHelperText error>No Image</FormHelperText>
                  )}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.stock}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.saleprice}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.percentage}
                </TableCell>
                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                  {row?.price}
                </TableCell>
                <TableCell
                  sx={{ fontFamily: rowText.fontFamily }}
                  align="right"
                >
                  <button onClick={() => {
                    router.push(`/admin/storagelist/${row?._id}`)
                  }}>
                    <CreateIcon color="primary" />
                  </button>
                  <button onClick={async () => {
                    setOpenModal(true)
                    await dispatch(GetProductIdService(row?._id))
                  }}>
                    <DeleteIcon color='error' />
                  </button>
                </TableCell>
                <DeleteModal
                  open={openModal}
                  setOpen={setOpenModal}
                  title={"Delete Product"}
                  description={`Are you sure you want to delete ${product?.brand}`}
                  onSubmit={() => dispatch(DeleteStorageService(product?._id))} />
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
        <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {productList?.pagination?.totalItems} entries</Typography>
        <br />
        <Pagination
          size="large"
          count={productList?.pagination?.totalPages}
          page={page}
          color="secondary"
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
}

export default GenericProducts;
