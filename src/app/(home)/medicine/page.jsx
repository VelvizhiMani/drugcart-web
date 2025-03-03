"use client"
import { IMAGES } from "@/components/common/images";
import { GetCategoryService } from "@/services/categoryService";
import { Box, Pagination, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Medicine = () => {
  const { categories } = useSelector((state) => state.categoryData);
  const [showNo, setShowNo] = useState(54)
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    dispatch(GetCategoryService(page, showNo));
  }, [page]);
  console.log(categories);

  const filteredConditions =
    selectedLetter === "All"
      ? categories?.categories
      : categories?.categories?.filter((c) => c.category_name.startsWith(selectedLetter));

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="py-2 text-xl font-bold">
          <h2>A - Z Order Medicine</h2>
          <div className="flex justify-center gap-2 my-4">
            {alphabet.map((letter, i) => (
              <button
                className={`${selectedLetter === letter ? "bg-[#B7084B]" : "bg-[#35A24D]"} px-2 text-white rounded-md`}
                key={i}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className={`${selectedLetter === "All" ? "bg-[#B7084B]" : "bg-[#35A24D]"} px-2 text-white rounded-md`}
              onClick={() => setSelectedLetter("All")}
            >
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pb-20">
          {filteredConditions &&
            filteredConditions?.map((category, i) => (
              <div className="bg-bgshop rounded-lg p-4" key={i}>
                <p className="text-center">
                  <Image
                    width={100}
                    height={100}
                    src={category?.cat_img ? `https://assets2.drugcarts.com/category/thumb/${category?.cat_img}` : IMAGES.NO_IMAGE}
                    alt={category?.category_name}
                    className={`mb-3 mx-auto object-cover ${category?.cat_img ? "bg-bgcancer" : null} rounded-full p-2`}
                  />
                  <span>{category?.category_name}</span>
                </p>
              </div>
            ))}
        </div>
        <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
          <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {categories?.pagination?.totalItems} entries</Typography>
          <br />
          <Pagination
            size="large"
            count={categories?.pagination?.totalPages}
            page={page}
            color="secondary"
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      </section>
    </>
  );
};

export default Medicine;
