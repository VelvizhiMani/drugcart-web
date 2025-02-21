"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
import { DeleteArticleService, GetArticleIdService, GetArticleService } from '@/services/articleService';
import DeleteModal from '@/components/admin/modal/DeleteModal';
import { tableText } from '@/utils/textFormat'

const rowText = {
    color: "#fff",
    fontFamily: "Poppins",
};
function ArticlePage() {
    const { articleList, article } = useSelector((state) => state.articlesData)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showNo, setShowNo] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const router = useRouter();

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        dispatch(GetArticleService(page, showNo, search))
    }, [page, showNo, search])

    const searchSubmit = () => {
        dispatch(GetArticleService(page, showNo, search))
    }

    console.log("articleList", articleList);

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h5"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Articles List
                </Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/articles/add`)}
                >
                    Add Articles
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
                            <TableCell style={rowText}>Name</TableCell>
                            <TableCell style={rowText}>URL</TableCell>
                            <TableCell style={rowText}>Images</TableCell>
                            <TableCell style={rowText}>Status</TableCell>
                            <TableCell align="right" style={rowText}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articleList && articleList?.articles?.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {row?.sno}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                    component="th"
                                    scope="row"
                                >
                                    {tableText(row?.blogname)}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {row?.url}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {row?.blogimg ? (
                                        <Avatar
                                            alt="blogimg"
                                            src={row?.blogimg}
                                            style={{ width: 24, height: 24 }}
                                            variant="rounded"
                                        />
                                    ) : (
                                        <FormHelperText error>No Image</FormHelperText>
                                    )}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {row?.status}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                    align="right"
                                >
                                    <button onClick={() => {
                                        router.push(`/admin/articles/${row?._id}`)
                                    }}>
                                        <CreateIcon color="primary" />
                                    </button>
                                    <button onClick={async () => {
                                        setOpenModal(true)
                                        await dispatch(GetArticleIdService(row?._id))
                                    }}>
                                        <DeleteIcon color='error' />
                                    </button>
                                </TableCell>
                                <DeleteModal
                                    open={openModal}
                                    setOpen={setOpenModal}
                                    title={"Delete Article"}
                                    description={`Are you sure you want to delete ${article?.blogname}`}
                                    onSubmit={() => dispatch(DeleteArticleService(article?._id))} />
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
                <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {articleList?.pagination?.totalItems} entries</Typography>
                <br />
                <Pagination
                    size="large"
                    count={articleList?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </Box>
    );
}

export default ArticlePage;
