"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { Box, Pagination, Typography } from "@mui/material";
import { GetProductManufactuerUrlService } from "@/services/productService";
import { useParams, useRouter } from "next/navigation";

const Manufactuer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const params = useParams();
  const router = useRouter();

  const { productManufactuerUrl } = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(GetProductManufactuerUrlService(params?.url))
  }, [page,params?.url]);

  const ManufactClick = (url) => {
    router.push(`/product/${url}`);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="py-2 text-xl font-bold">
          <h2>Manufacturer Product List</h2>
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {alphabet.map((letter, i) => (
              <button
                className={`${selectedLetter === letter ? "bg-[#B7084B]" : "bg-[#35A24D]"
                  } px-2 text-white rounded-md`}
                key={i}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className={`${selectedLetter === "" ? "bg-[#B7084B]" : "bg-[#35A24D]"} px-2 text-white rounded-md`}
              onClick={() => {
                setSelectedLetter("")
                setPage(1)
              }}
            >
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
        {productManufactuerUrl?.map((row, i) => (

            <div
              key={i}
              className="grid border-[1.5px] p-4 cursor-pointer bg-white border-gray-200 py-5"
              onClick={() => ManufactClick(row?.url)}
            >
              <PlaylistAddCheckIcon
                className="mx-auto opacity-30 text-[red]"
                style={{ fontSize: "40px" }}
              />
              <p className="text-center font-bold">
                <span>{row?.product_name}</span>
              </p>
            </div>
          ))} 
        </div>
        <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
          <Typography fontFamily={"Poppins"}>Showing 1-{10} of {productManufactuerUrl?.pagination?.totalItems} entries</Typography>
          <br />
          <Pagination
            size="large"
            count={productManufactuerUrl?.pagination?.totalPages}
            page={page}
            color="secondary"
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      </section>
    </>
  );
};

export default Manufactuer;
