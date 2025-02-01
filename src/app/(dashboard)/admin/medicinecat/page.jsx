"use client";
import { useState } from "react";
import {
  Box,
  Grid2,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import ImageField from "@/components/admin/AutoComplete/ImageField";
import Link from "next/link";

const conditions = [
  { name: "Acne" },
  { name: "ADHD" },
  { name: "Agoraphobia" },
  { name: "Alzheimer's Disease" },
  { name: "Amblyopia" },
  { name: "Bronchitis" },
  { name: "Cancer" },
];

function MedicineCat() {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filter conditions based on first letter of the name
  const filteredConditions =
    selectedLetter === "All"
      ? conditions
      : conditions.filter((c) => c.name.startsWith(selectedLetter));

  return (
    <Box>
      <Box>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField title="Generic Name Search" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }} marginLeft={"auto"}>
            <ImageField title={"Brand Name Search (Product name)"} />
          </Grid2>
        </Grid2>
      </Box>
      <div className="p-4">
        <Typography variant="h5" align="center" gutterBottom>
          A to Z
        </Typography>

        {/* Alphabet Buttons */}
        <div className="flex justify-center flex-wrap gap-2 my-4">
          {alphabet.map((letter, i) => (
            <Button
              size="small"
              key={i}
              variant={selectedLetter === letter ? "contained" : "outlined"}
              color="success"
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </Button>
          ))}
          <Button
            size="small"
            variant={selectedLetter === "All" ? "contained" : "outlined"}
            color="success"
            onClick={() => setSelectedLetter("All")}
          >
            View All
          </Button>
        </div>

        {/* Conditions List */}
        <Typography variant="h6">{selectedLetter}</Typography>
        <Grid2 container spacing={2}>
          {filteredConditions.map((condition, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Link href={`/admin/genericproducts/${condition.name}`}>
                <Card elevation={3} className="p-2 cursor-pointer">
                  <CardContent className="flex flex-col items-center">
                    <Typography variant="h6" align="center" fontWeight="bold">
                      {condition.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </Box>
  );
}

export default MedicineCat;
