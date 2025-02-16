"use client";
import { useState } from "react";
import { TextField, Autocomplete, InputLabel } from "@mui/material";

const medicines = [
  {
    name: "D Bay 500 Tablet",
    img: "https://www.mannafoods.in/cdn/shop/products/2_93661738-cc28-4602-a979-202238ab5aa9.jpg?v=1675151098&width=480",
  },
  {
    name: "D Bikh 75mg Injection",
    img: "https://www.mannafoods.in/cdn/shop/products/2_93661738-cc28-4602-a979-202238ab5aa9.jpg?v=1675151098&width=480",
  },
  {
    name: "D Bio 50mg/325mg Tablet",
    img: "https://www.mannafoods.in/cdn/shop/products/2_93661738-cc28-4602-a979-202238ab5aa9.jpg?v=1675151098&width=480",
  },
  {
    name: "D Bio MR 250mg/50mg/325mg Tablet",
    img: "https://www.mannafoods.in/cdn/shop/products/2_93661738-cc28-4602-a979-202238ab5aa9.jpg?v=1675151098&width=480",
  },
  {
    name: "D Bose 500mg/0.2mg Tablet",
    img: "https://www.mannafoods.in/cdn/shop/products/2_93661738-cc28-4602-a979-202238ab5aa9.jpg?v=1675151098&width=480",
  },
  {
    name: "D Canzal 100mg Capsule",
    img: "https://www.mannafoods.in/cdn/shop/products/2_93661738-cc28-4602-a979-202238ab5aa9.jpg?v=1675151098&width=480",
  },
];

function ImageField({ title }) {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(searchTerm);
  
  return (
    <div>
      <InputLabel
        id="input"
        sx={{
          mt: 1,
          mb: 0.5,
          fontWeight: 600,
          fontFamily: "Poppins",
          color: "#000",
          fontSize: 14,
        }}
      >
        {title}
      </InputLabel>
      <Autocomplete
        freeSolo
        options={medicines}
        getOptionLabel={(option) => option.name || searchTerm}
        value={searchTerm}
        onInputChange={(event, newValue) => setSearchTerm(newValue)}
        renderOption={(props, option) => (
          <li {...props} className="flex items-center space-x-2 p-2 cursor-pointer">
            <img
              src={option.img}
              alt={option.name}
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-semibold">{option.name}</span>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default ImageField;
